// Baut das Gesamtpaket: Startseite, drei Programme, README als Seite, Lizenz, LIESMICH.
// Läuft lokal mit `node tools/paket.mjs` und in der Veröffentlichung, die das ZIP
// anschließend an das Release hängt. Keine Abhängigkeiten, nur Node und das Repo.

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT_DIR = path.join(ROOT, 'paket');
const OUT_FILE = path.join(OUT_DIR, 'FlowState-FPV-mit-Hub.zip');
const SKIP = new Set(['.git', '.github', 'tools', 'paket', 'node_modules', '.arena']);

function walk(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (prefix === '' && SKIP.has(entry.name)) continue;
    const rel = prefix ? prefix + '/' + entry.name : entry.name;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(abs, rel));
    else if (entry.isFile()) out.push(rel);
  }
  return out;
}

// README.md liegt auch als lesbare Seite bei. Der Umsetzer ist derselbe wie im Hub.
function readmePage(markdown) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/js/markdown.js'), 'utf8'), sandbox);
  const md = sandbox.window.FLOWSTATE_MD;
  const body = md ? md.toHtml(markdown) : '<pre>' + markdown + '</pre>';

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
  const programLines = ['hangar', 'tuner', 'guide'].map((id) => {
    const program = data.programs.find((p) => p.id === id) || { name: id };
    const release = data.releases.find((r) => r.program === id) || {};
    let line = '  ' + id + '/index.html';
    while (line.length < 24) line += ' ';
    return line + program.name + (release.version ? ' ' + release.version : '');
  });

  return [
    'FlowState FPV, Übersichtsseite mit den Programmen',
    '',
    '1. Dieses Paket entpacken.',
    '2. index.html im Browser öffnen.',
    '3. Im Kopf der Seite zwischen Hangar, Autotuner und Guide wählen.',
    '',
    'Alles läuft lokal, ohne Server und ohne Internet. Wird die Seite über',
    'file:// geöffnet, öffnen sich die Programme in einem eigenen Tab;',
    'über einen lokalen Server oder GitHub Pages auch direkt im Rahmen.',
    '',
    'Programme in diesem Paket:'
  ]
    .concat(programLines)
    .concat([
      '  hangar/data/hangardeck.json   Startbestand für den Abgleich',
      '',
      'Dazu:',
      '  README.md      Beschreibung des Projekts, wie auf GitHub',
      '  README.html    dieselbe Beschreibung als lesbare Seite',
      '  LICENSE        Lizenz auf Deutsch und Englisch',
      '',
      'Hinweis: Der FPV Guide ist rund 7,7 MB groß, der erste Aufruf dauert kurz.',
      ''
    ])
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

const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/data/versions.json'), 'utf8'));
const files = walk(ROOT);
const entries = files.map((rel) => ({
  name: rel,
  data: fs.readFileSync(path.join(ROOT, rel))
}));

entries.push({
  name: 'LIESMICH.txt',
  data: Buffer.from(liesmich(data), 'utf8')
});
entries.push({
  name: 'README.html',
  data: Buffer.from(readmePage(fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8')), 'utf8')
});

const buf = zip(entries);
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, buf);
console.log('Paket: ' + path.relative(ROOT, OUT_FILE) + ' mit ' + entries.length + ' Dateien, ' + buf.length + ' Bytes');
