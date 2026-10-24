#!/usr/bin/env node
/**
 * Prüft den Release-Hub gegen assets/data/versions.json.
 *
 *   node scripts/validate.mjs [--verbose]
 *
 * Geprüft werden:
 *   - .nojekyll und die Grundstruktur
 *   - Schema, IDs und Kanäle des Release-Index
 *   - Existenz der Zielpfade (tuner/, guide/), Docs und Quellen
 *   - SHA-256 und Größe eingespielter Versionen (available: true)
 *   - interne Links in index.html
 *
 * Exit-Code 1 bei Fehlern, 0 bei Erfolg (Warnungen beenden nicht).
 */

import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, resolve, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = join(ROOT, 'assets/data/versions.json');
const CHANNELS = new Set(['alpha', 'beta', 'rc', 'stable']);
const STATES = new Set(['ok', 'pending', 'na']);
const VERSION_PATTERN = /^v?\d+\.\d+(\.\d+)?(-[0-9A-Za-z]+(\.[0-9A-Za-z]+)*)?$/;

const errors = [];
const warnings = [];
const notes = [];

const rel = (p) => relative(ROOT, p) || '.';
const error = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);
const note = (msg) => notes.push(msg);

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

function readJSON(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    error(`versions.json ist kein gültiges JSON: ${err.message}`);
    return null;
  }
}

/* ---------------------------- Grundstruktur ----------------------------- */

function checkStructure() {
  const required = [
    'index.html',
    'README.md',
    '.nojekyll',
    'assets/css/style.css',
    'assets/js/hub.js',
    'assets/data/versions.json',
    'tuner/index.html',
    'guide/index.html',
    '.github/workflows/pages.yml'
  ];

  for (const file of required) {
    if (!existsSync(join(ROOT, file))) error(`Pflichtdatei fehlt: ${file}`);
  }
}

/* ------------------------------- Schema --------------------------------- */

function checkManifest(data) {
  if (data.schema_version !== 1) {
    error(`schema_version muss 1 sein, gefunden: ${JSON.stringify(data.schema_version)}`);
  }

  if (!data.updated || !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) {
    error('Feld "updated" fehlt oder ist nicht im Format YYYY-MM-DD.');
  }

  if (!Array.isArray(data.projects) || data.projects.length === 0) {
    error('"projects" muss ein nicht-leeres Array sein.');
    return;
  }
  if (!Array.isArray(data.releases)) {
    error('"releases" muss ein Array sein.');
    return;
  }

  const projectIds = new Set();
  for (const project of data.projects) {
    if (!project.id) error('Projekt ohne "id".');
    if (projectIds.has(project.id)) error(`Doppelte Projekt-ID: ${project.id}`);
    projectIds.add(project.id);

    if (!project.name) error(`Projekt ${project.id}: "name" fehlt.`);
    if (!project.path) error(`Projekt ${project.id}: "path" fehlt.`);
    else if (!existsSync(join(ROOT, project.path))) {
      error(`Projekt ${project.id}: Pfad existiert nicht: ${project.path}`);
    }
  }

  const releaseIds = new Set();
  const seen = new Set();

  for (const release of data.releases) {
    const label = `${release.project || '?'} ${release.version || '?'}`;

    if (!release.id) error(`Release ${label}: "id" fehlt.`);
    else if (releaseIds.has(release.id)) error(`Doppelte Release-ID: ${release.id}`);
    else releaseIds.add(release.id);

    if (!projectIds.has(release.project)) {
      error(`Release ${label}: unbekanntes Projekt "${release.project}".`);
    }

    if (!VERSION_PATTERN.test(String(release.version || ''))) {
      error(`Release ${label}: Version entspricht nicht dem Schema vX.Y[.Z][-tag.N].`);
    }

    if (!CHANNELS.has(release.channel)) {
      error(`Release ${label}: Kanal "${release.channel}" ist nicht erlaubt (${[...CHANNELS].join(', ')}).`);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(release.released || ''))) {
      error(`Release ${label}: "released" fehlt oder ist nicht YYYY-MM-DD.`);
    }

    const key = `${release.project}@${release.version}`;
    if (seen.has(key)) warn(`Release ${label}: doppelt im Index (${key}).`);
    seen.add(key);

    for (const signal of release.signals || []) {
      if (!STATES.has(signal.state)) {
        error(`Release ${label}: Signal "${signal.label}" hat unbekannten Status "${signal.state}".`);
      }
    }

    checkReleaseFile(release, label);
    checkReleaseLinks(release, label);
  }

  checkProjectLinks(data);
}

/* -------------------------- Dateien und Hashes -------------------------- */

function checkReleaseFile(release, label) {
  const target = join(ROOT, release.file || '');
  const exists = release.file && existsSync(target);

  if (!exists) {
    if (release.available) error(`Release ${label}: Datei fehlt, ist aber als verfügbar markiert: ${release.file}`);
    else warn(`Release ${label}: Zielpfad fehlt noch: ${release.file}`);
    return;
  }

  const buffer = readFileSync(target);
  const actualHash = sha256(buffer);
  const actualSize = buffer.length;
  const isPlaceholder = buffer.includes('PLATZHALTER');

  if (release.available) {
    if (isPlaceholder) {
      error(`Release ${label}: als verfügbar markiert, aber ${release.file} ist noch der Platzhalter.`);
    }
    if (!/^[a-f0-9]{64}$/.test(String(release.sha256 || ''))) {
      error(`Release ${label}: "sha256" fehlt oder ist kein gültiger Hex-Digest.`);
    } else if (release.sha256 !== actualHash) {
      error(`Release ${label}: SHA-256 stimmt nicht.\n    Index:  ${release.sha256}\n    Datei:  ${actualHash}`);
    }
    if (Number(release.size_bytes) !== actualSize) {
      error(`Release ${label}: Größe stimmt nicht. Index: ${release.size_bytes} B, Datei: ${actualSize} B.`);
    }
  } else {
    note(`Release ${label}: Slot ist ein Platzhalter (${release.file}).`);
  }
}

function checkReleaseLinks(release, label) {
  const source = release.source || {};
  const urls = [source.folder_url, source.file_url].filter(Boolean);
  for (const url of urls) {
    if (!/^https:\/\//.test(url)) error(`Release ${label}: Quelle ist keine HTTPS-URL: ${url}`);
  }
  if (!release.source?.folder) warn(`Release ${label}: "source.folder" fehlt (Herkunft nicht nachvollziehbar).`);
}

function checkProjectLinks(data) {
  for (const project of data.projects) {
    const docs = project.links?.docs;
    if (docs && !existsSync(join(ROOT, docs))) {
      error(`Projekt ${project.id}: verlinktes Dokument fehlt: ${docs}`);
    }
    const app = project.links?.app || project.path;
    if (app && !existsSync(join(ROOT, app))) {
      error(`Projekt ${project.id}: App-Pfad fehlt: ${app}`);
    }
  }
}

/* --------------------------- Interne Links ------------------------------ */

// Die beiden Anwendungen sind eigenständige Single-File-Apps. Ihre Verweise
// stehen teils in JavaScript-Template-Strings und werden zur Laufzeit gebaut –
// statisch prüfbar sind sie nicht. Sie werden daher ausgenommen.
const APP_FILES = new Set(['tuner/index.html', 'guide/index.html']);
const IGNORED_DIRS = new Set(['.git', 'node_modules', '_site', 'google_drive']);

function collectHtmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectHtmlFiles(full, acc);
    else if (extname(entry.name) === '.html' && !APP_FILES.has(rel(full))) acc.push(full);
  }
  return acc;
}

function checkInternalLinks() {
  const files = collectHtmlFiles(ROOT);
  let checked = 0;

  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const refs = html.matchAll(/(?:href|src)="([^"]+)"/g);

    for (const [, ref] of refs) {
      if (!ref) continue;
      if (/^(https?:|mailto:|tel:|data:|javascript:|#)/.test(ref)) continue;
      if (ref.startsWith('//')) continue;
      if (ref.includes('${')) continue;        // JS-Template-Ausdruck
      if (ref.startsWith('/')) continue;       // absolute Serverpfade sind zur Build-Zeit unbekannt

      const clean = ref.split('#')[0].split('?')[0];
      if (!clean) continue;

      const target = clean.startsWith('/')
        ? join(ROOT, clean)
        : resolve(dirname(file), clean);

      checked += 1;
      if (!existsSync(target)) {
        error(`${rel(file)}: Link zeigt ins Leere → ${ref}`);
      }
    }
  }

  note(`${files.length} HTML-Datei(en), ${checked} interne Verweise geprüft.`);
}

/* ------------------------------- Ausgabe -------------------------------- */

function printSummary(data) {
  const lines = [];
  lines.push('');
  lines.push('  FlowState FPV — Release-Index');
  lines.push('  ' + '─'.repeat(58));

  if (data) {
    for (const release of data.releases) {
      const project = data.projects.find((p) => p.id === release.project);
      const state = release.available ? 'eingespielt' : 'offen';
      const size = Number.isFinite(release.size_bytes)
        ? `${(release.size_bytes / 1000).toFixed(0)} KB`
        : '—';
      lines.push(
        `  ${(project?.name || release.project).padEnd(16)} ${String(release.version).padEnd(17)} ` +
        `${String(release.channel).padEnd(7)} ${size.padStart(7)}  ${state}`
      );
    }
    lines.push('  ' + '─'.repeat(58));
  }

  for (const n of notes) lines.push(`  · ${n}`);
  for (const w of warnings) lines.push(`  ! ${w}`);
  for (const e of errors) lines.push(`  ✗ ${e}`);

  console.log(lines.join('\n'));

  if (errors.length) {
    console.log(`\n  ${errors.length} Fehler, ${warnings.length} Warnungen.\n`);
  } else {
    console.log(`\n  OK — 0 Fehler, ${warnings.length} Warnung(en).\n`);
  }
}

/* --------------------------------- Run ---------------------------------- */

checkStructure();
const data = readJSON(MANIFEST);
if (data) checkManifest(data);
checkInternalLinks();
if (process.argv.includes('--verbose') && data) {
  note(`${data.projects.length} Projekte, ${data.releases.length} Releases indexiert.`);
}
printSummary(data);

process.exit(errors.length ? 1 : 0);
