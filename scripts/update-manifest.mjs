#!/usr/bin/env node
/**
 * Trägt SHA-256 und Größe einer eingespielten Anwendungsdatei in
 * assets/data/versions.json ein und markiert das Release als verfügbar.
 *
 *   node scripts/update-manifest.mjs --project tuner --file tuner/index.html
 *   node scripts/update-manifest.mjs --project guide --file guide/index.html --release guide-1.0.1-beta.1
 *
 * Ohne --release wird das jüngste Release des Projekts aktualisiert.
 */

import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = join(ROOT, 'assets/data/versions.json');

const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};

const project = getArg('project');
const file = getArg('file');
const releaseId = getArg('release');

if (!project || !file) {
  console.error('Aufruf: node scripts/update-manifest.mjs --project <id> --file <pfad> [--release <id>]');
  process.exit(1);
}

const absolute = resolve(ROOT, file);
if (!existsSync(absolute)) {
  console.error(`Datei nicht gefunden: ${file}`);
  process.exit(1);
}

const buffer = readFileSync(absolute);
if (buffer.includes('PLATZHALTER')) {
  console.error(`Das ist noch der Platzhalter, nicht die Anwendung: ${file}`);
  process.exit(1);
}

const data = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const projectEntry = data.projects.find((p) => p.id === project);
if (!projectEntry) {
  console.error(`Unbekanntes Projekt: ${project} (bekannt: ${data.projects.map((p) => p.id).join(', ')})`);
  process.exit(1);
}

const candidates = data.releases
  .filter((r) => r.project === project)
  .sort((a, b) => String(b.released).localeCompare(String(a.released)));

const release = releaseId
  ? data.releases.find((r) => r.id === releaseId)
  : candidates[0];

if (!release) {
  console.error(releaseId
    ? `Release nicht gefunden: ${releaseId}`
    : `Kein Release für Projekt ${project} im Index.`);
  process.exit(1);
}

const sha256 = createHash('sha256').update(buffer).digest('hex');
const size = buffer.length;
const previous = { sha256: release.sha256, size: release.size_bytes, available: release.available };

release.file = file;
release.sha256 = sha256;
release.size_bytes = size;
release.available = true;
data.updated = new Date().toISOString().slice(0, 10);

writeFileSync(MANIFEST, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

console.log(`\n  ${projectEntry.name} · ${release.version}`);
console.log(`  Datei    ${file} (${size.toLocaleString('de-DE')} B)`);
console.log(`  SHA-256  ${sha256}`);
if (previous.sha256 && previous.sha256 !== sha256) {
  console.log(`  Hinweis  Vorheriger Hash war ${previous.sha256.slice(0, 16)}…`);
}
if (!previous.available) console.log('  Status   jetzt als "available: true" markiert');
console.log('');

// Die Größe wird bewusst nur gemeldet – so fällt ein falsches Ziel sofort auf.
if (statSync(absolute).size !== size) {
  console.error('  Warnung: Dateigröße inkonsistent gelesen.');
  process.exit(1);
}
