// Baut das Gesamtpaket: Startseite, alle Programme aus dem Register, README als Seite,
// Lizenz, LIESMICH. Läuft lokal mit `node tools/paket.mjs` und in der Veröffentlichung,
// die das ZIP anschließend an das Release hängt. Keine Abhängigkeiten, nur Node und
// das Repo. Welche Programme mitkommen, steht in assets/data/versions.json.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'paket');
const OUT_FILE = path.join(OUT_DIR, 'FlowState-FPV-mit-Hub.zip');
const SKIP = new Set(['.git', '.github', 'tools', 'paket', 'node_modules', '.arena', 'google_drive']);
const SKIP_FILES = new Set(['.gitignore', '.nojekyll', 'PLATTFORM.md', 'PLATTFORM-PLAN.md']);

// Ein Ordner um alles, damit beim Auspacken nichts verstreut liegt. Die Startseite
// heisst nach dem Projekt, die Programme nach sich selbst statt alle index.html.
const FOLDER = 'FlowState-FPV/';
const HUB_PAGE = 'FlowState-FPV.html';

// Das Register. Ein neues Werkzeug braucht hier nichts: es steht in versions.json,
// mit Pfad, Eintragsdatei und dem Namen, den es im Paket bekommt.
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/data/versions.json'), 'utf8'));
const MODULES = (data.programs || []).filter((item) => item && item.id && item.enabled !== false);

function dirOf(value) {
  const text = String(value || '');
  return text && !text.endsWith('/') ? text + '/' : text;
}

function packName(item) {
  return item.pack || dirOf(item.path) + (item.name || item.id) + '.html';
}

const PAGES = {};
MODULES.forEach((item) => { PAGES[item.id] = packName(item); });

// Verweise der Startseite auf die neuen Dateinamen, und die Pfade fuer die hub.js.
function packagedHub(html) {
  let text = String(html);
  MODULES.forEach((item) => {
    const dir = dirOf(item.path).replace(/\/+$/, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp('href="' + dir + '/(\\?[^"]*)?"', 'g'), (all, query) => 'href="' + packName(item) + (query || '') + '"');
  });
  const attrs = MODULES.map((item) => 'data-app-' + item.id + '="' + packName(item) + '"').join(' ');
  return text.replace('<html ', '<html ' + attrs + ' ');
}

function walk(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (prefix === '' && SKIP.has(entry.name)) continue;
    const rel = prefix ? prefix + '/' + entry.name : entry.name;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(abs, rel));
    else if (entry.isFile() && !(prefix === '' && SKIP_FILES.has(entry.name))) out.push(rel);
  }
  return out;
}

// README.md liegt auch als lesbare Seite bei. Der Umsetzer ist derselbe wie im Hub.
function readmePage(markdown) {
  // Das README verweist auf PLATTFORM.md. Die Datei bleibt im Repository, im Paket
  // waere der Verweis tot, deshalb steht dort nur der Name.
  const text = String(markdown).replace(
    /\[`?([A-Za-z0-9_-]+\.md)`?\]\(\1\)/g,
    (all, name) => (SKIP_FILES.has(name) ? '`' + name + '` (im Repository)' : all)
  );

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/markdown.js'), 'utf8'), sandbox);
  const md = sandbox.window.FLOWSTATE_MD;
  const body = md ? md.toHtml(text) : '<pre>' + text + '</pre>';

  return [
    '<!DOCTYPE html>',
    '<html lang="de">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<title>FlowState FPV · README</title>',
    '<style>',
    ':root { color-scheme: light; }',
    'body { margin: 0; padding: 32px 20px 64px; background: #f4f6f5; color: #22302e;',
    '  font: 16px/1.65 ui-sans-serif, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }',
    'main { max-width: 46rem; margin: 0 auto; }',
    'h1, h2, h3, h4 { line-height: 1.25; margin: 1.8em 0 0.5em; }',
    'h1 { font-size: 1.9rem; margin-top: 0; }',
    'h2 { font-size: 1.35rem; padding-bottom: 0.3em; border-bottom: 1px solid #d6dcd9; }',
    'h3 { font-size: 1.1rem; }',
    'p, ul, ol, pre, table { margin: 0 0 1em; }',
    'a { color: #1e746b; }',
    'code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 0.9em;',
    '  background: #eef1f2; border: 1px solid #d6dcd9; border-radius: 3px; padding: 0.1em 0.35em; }',
    'pre { background: #eef1f2; border: 1px solid #d6dcd9; border-radius: 2px; padding: 14px 16px;',
    '  overflow-x: auto; }',
    'pre code { background: none; border: 0; padding: 0; }',
    'table { border-collapse: collapse; width: 100%; font-size: 0.94em; }',
    'th, td { border: 1px solid #d6dcd9; padding: 7px 10px; text-align: left; vertical-align: top; }',
    'th { background: #e9efef; }',
    'hr { border: 0; border-top: 1px solid #d6dcd9; margin: 2em 0; }',
    'footer { max-width: 46rem; margin: 3rem auto 0; color: #5b6a66; font-size: 0.85rem; }',
    '@media (prefers-color-scheme: dark) {',
    '  body { background: #06232a; color: #e7f6f2; }',
    '  h2, hr, th, td, pre, code { border-color: #1c5f63; }',
    '  code, pre, th { background: #0a2e36; }',
    '  a { color: #2ca387; }',
    '  footer { color: #94c4b9; }',
    '}',
    '</style>',
    '</head>',
    '<body>',
    '<main>',
    body,
    '</main>',
    '<footer>FlowState FPV · README.md als Seite, erzeugt beim Packen des ZIP.</footer>',
    '</body>',
    '</html>',
    ''
  ].join('\n');
}

function liesmich(data) {
  // Die Pfade sind unterschiedlich lang, deshalb richtet sich die Spalte nach dem
  // laengsten Eintrag statt nach einer festen Zahl.
  const width = Math.max.apply(null, MODULES.map((program) => ('  ' + packName(program)).length)) + 2;
  const programLines = MODULES.map((program) => {
    const release = data.releases.find((r) => r.program === program.id) || {};
    let line = '  ' + packName(program);
    while (line.length < width) line += ' ';
    return line + program.name + (release.version ? ' ' + release.version : '');
  });
  const extraLines = [];
  MODULES.forEach((program) => {
    (program.extra || []).forEach((rel) => extraLines.push('  ' + rel));
  });
  // Grosse Dateien einzeln nennen, damit niemand einen haengenden Aufruf fuer einen Fehler haelt.
  const big = MODULES.filter((program) => {
    const release = data.releases.find((r) => r.program === program.id) || {};
    return (release.size_bytes || 0) >= 2000000;
  }).map((program) => {
    const release = data.releases.find((r) => r.program === program.id) || {};
    return program.name + ' ' + (Math.round(release.size_bytes / 100000) / 10).toFixed(1).replace('.', ',') + ' MB';
  });
  const names = MODULES.map((item) => item.name);
  const head = [];
  for (let i = 0; i < names.length; i += 3) head.push(names.slice(i, i + 3).join(', '));

  return [
    'FlowState FPV, Übersichtsseite mit den Programmen',
    '',
    '1. Dieses Paket entpacken, es liegt alles im Ordner FlowState-FPV.',
    '2. ' + HUB_PAGE + ' im Browser öffnen.',
    '3. Im Kopf der Seite zwischen diesen Programmen wählen:',
    ...head.map((line) => '   ' + line),
    '',
    'Jedes Programm lässt sich auch einzeln öffnen, ohne die Übersicht:',
    'einfach die jeweilige Datei doppelklicken und als Lesezeichen ablegen.',
    '',
    'Alles läuft lokal, ohne Server. Das Paket braucht nach dem',
    'Herunterladen kein Internet. Wird die Seite über file:// geöffnet,',
    'öffnen sich die Programme in einem eigenen Tab;',
    'über einen lokalen Server oder GitHub Pages auch direkt im Rahmen.',
    '',
    'Programme in diesem Paket:'
  ]
    .concat(programLines)
    .concat(extraLines.length ? ['', ...extraLines] : [])
    .concat([
      '',
      'Dazu:',
      '  README.md      Beschreibung des Projekts, wie auf GitHub',
      '  README.html    dieselbe Beschreibung als lesbare Seite',
      '  LICENSE        Lizenz auf Deutsch und Englisch'
    ])
    .concat(big.length ? ['', 'Große Dateien: ' + big.join(', ') + '. Der erste Aufruf dauert kurz.'] : [])
    .concat([''])
    .join('\n');
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function stamp(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time: time & 0xffff, date: day & 0xffff };
}

function zip(entries) {
  const now = stamp(new Date());
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const entry of entries) {
    const name = Buffer.from(entry.name, 'utf8');
    const data = entry.data;
    const packed = zlib.deflateRawSync(data, { level: 9 });
    const useDeflate = packed.length < data.length;
    const body = useDeflate ? packed : data;
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(useDeflate ? 8 : 0, 8);
    local.writeUInt16LE(now.time, 10);
    local.writeUInt16LE(now.date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, body);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(useDeflate ? 8 : 0, 10);
    central.writeUInt16LE(now.time, 12);
    central.writeUInt16LE(now.date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);

    offset += local.length + name.length + body.length;
  }

  const centralBuf = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralBuf.length, 12);
  end.writeUInt32LE(offset, 16);

  return Buffer.concat(locals.concat([centralBuf, end]));
}

const files = walk(ROOT);

// Startseite und Programme unter ihren neuen Namen, alles andere unverändert.
const RENAMED = { 'index.html': HUB_PAGE };
MODULES.forEach((item) => {
  RENAMED[dirOf(item.path) + (item.entry || 'index.html')] = packName(item);
});

const entries = files.map((rel) => {
  let data = fs.readFileSync(path.join(ROOT, rel));
  if (rel === 'index.html') data = Buffer.from(packagedHub(data.toString('utf8')), 'utf8');
  return { name: FOLDER + (RENAMED[rel] || rel), data };
});

entries.push({
  name: FOLDER + 'LIESMICH.txt',
  data: Buffer.from(liesmich(data), 'utf8')
});
entries.push({
  name: FOLDER + 'README.html',
  data: Buffer.from(readmePage(fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8')), 'utf8')
});

const buf = zip(entries);
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, buf);
console.log('Paket: ' + path.relative(ROOT, OUT_FILE) + ' mit ' + entries.length + ' Dateien, ' + buf.length + ' Bytes');
