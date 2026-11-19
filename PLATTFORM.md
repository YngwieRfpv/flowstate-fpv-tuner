# FlowState FPV: Aufbau und Wartung

Diese Seite ist die technische Kurzreferenz: wie die Übersicht die Programme findet, wie ein
neues Werkzeug dazukommt und wie ein einzelnes aktualisiert wird, ohne die anderen anzufassen.
Die Bestandsaufnahme und die Begründung der Struktur stehen in
[`PLATTFORM-PLAN.md`](PLATTFORM-PLAN.md).

---

## 1. Aufbau

```
index.html              Übersicht: Kopfzeile, Startansicht, Details, Versionen, Download
assets/css/style.css    Gestaltung der Übersicht
assets/js/hub.js        gesamte Logik der Übersicht (Register, ZIP, Sprache, Rahmen)
assets/js/markdown.js   setzt README.md in HTML um, für README.html im Paket
assets/data/versions.json   Register: Programme, Releases, Texte (DE/EN/ES)
assets/data/versions.js     dasselbe als Skript, für file:// und das Paket
assets/images/          Logo, Zeichen, Favicon, Vorschauen

hangar/index.html        Hangar
hangar/data/flowstate-hangar.json   Startbestand, nur im Paket
tuner/index.html         Tuner
guide/index.html         Guide
guide/assets/            Wortmarke und Fußzeile des Guides
presets/index.html       Presets
osd/index.html           OSD

tools/paket.mjs          baut das Gesamt-ZIP (Node, keine Abhängigkeiten)
.github/workflows/       Gesamtpaket an die Releases, Pages-Aufräumen
```

Es gibt bewusst keinen `modules/`-Ordner und keinen Build. Jedes Programm ist eine einzelne
HTML-Datei mit eigenem CSS und eigenem Skript, und jedes läuft allein, auch ohne die Übersicht.
Die Übersicht lädt ein Programm in einem `<iframe>` (über `file://` stattdessen in einem
eigenen Tab, weil Browser dort den Rahmen sperren).

## 2. Das Register

`assets/data/versions.json` ist die einzige Liste. `assets/data/versions.js` enthält denselben
Inhalt als `window.FLOWSTATE_DATA` und wird **nach jeder Änderung neu erzeugt**:

```bash
node -e "const fs=require('fs');const d=JSON.parse(fs.readFileSync('assets/data/versions.json','utf8'));fs.writeFileSync('assets/data/versions.js','// Gleicher Inhalt wie versions.json, für den Betrieb ohne Server (file://) und für das ZIP-Paket.\n// Nach jeder Änderung an versions.json neu erzeugen.\nwindow.FLOWSTATE_DATA = '+JSON.stringify(d,null,2)+';\n')"
```

### Programm-Eintrag

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `id` | ja | Schlüssel, auch für `#/<id>` und den Meldedialog. Nur Buchstaben, Ziffern, `-` |
| `name` | ja | Anzeigename |
| `path` | ja | Ordner mit dem Programm, mit Schrägstrich am Ende |
| `entry` | nein | Dateiname im Ordner, Standard `index.html` |
| `pack` | nein | Name im ZIP, Standard `<ordner>/<name>.html` |
| `icon` | nein | `hangar`, `tuner`, `guide`, `presets`, `osd` oder `tool` (Standard) |
| `enabled` | nein | `false` blendet das Programm überall aus; die Datei bleibt per Adresse erreichbar |
| `extra` | nein | weitere Dateien, die ins ZIP gehören (relativ zum Repository) |
| `kind`, `description`, `highlights`, `meta` | ja | Texte, je Sprache (`de`, `en`, `es`) |
| `accent` | nein | Farbton der Karte: `mint` oder `sky` |

Ein Werkzeug bekommt im Register eine eigene Release-Reihe. Der Tag trägt seit den beiden
Werkzeugen von November 2026 den Programmnamen davor (`presets-v0.2.0-beta.3`,
`osd-v0.1.0-beta.2`), weil GitHub Tags nicht nach Programm trennt und `v0.1.0-beta.1` schon
von einem früheren Hangar-Stand belegt ist. Die drei älteren Tags bleiben unverändert.

Fehlt eine Sprache, greift Englisch, danach die erste vorhandene. Das macht `pick()` in
`hub.js`; dieselbe Regel gilt für Releases.

### Release-Eintrag

Ein Eintrag je Programm in `releases`: `id`, `program`, `version`, `channel`
(`alpha`/`beta`/`rc`/`stable`), `released` (JJJJ-MM-TT), `title`, `summary`, `file`,
`size_bytes`, `sha256`, `available`, `release_url`, dazu optional `signals`, `notes`, `limits`.
Die Startansicht und die Versionsliste lesen Größe und Prüfsumme hier, nicht aus der Datei.

## 3. Was aus dem Register gebaut wird

In `hub.js` liest `moduleList()` die Einträge (Fallback: die drei bekannten, solange die Daten
nicht geladen sind). Daraus entstehen automatisch:

| Stelle | Funktion |
|---|---|
| Umschalter in der Kopfzeile | `renderModuleSwitch()` |
| Untertitel im Kopf und in der Fußzeile | `renderModuleLinks()` |
| Programmlinks über der Startansicht | `renderModuleLinks()` |
| Programmliste in der Fußzeile | `renderModuleLinks()` |
| Kacheln der Startansicht | `renderOverview()` |
| Auswahl im Meldedialog | `renderReportPrograms()` |
| Detailabschnitt, falls im Markup keiner steht | `renderModuleDetails()` |
| ZIP-Inhalt im Browser | `bundleEntries()` |
| ZIP-Inhalt in Node | `tools/paket.mjs` |
| Adress-Route `#/<id>` | `currentAppId()` / `openApp()` |
| Verweise auf Programme | `appTarget()` / `syncAppLinks()` |
| Fehlerbericht | `reportPrograms()` |

Alle Aufrufe laufen in `renderModules()`, das nach dem Laden der Daten und bei jedem
Sprachwechsel einmal durchläuft. `initAppSwitch()` und `bindFilter()` binden neu gezeichnete
Elemente, ohne bestehende doppelt zu verdrahten. Der Kanal- und der Versionsfilter bleiben,
die Programmschalter sind entfallen.

Die drei vorhandenen Detailabschnitte (`#hangar`, `#tuner`, `#guide`) stehen weiter im Markup:
sie haben eigenen Aufbau (Bereichsraster, Logos, Beispiele), und dieser Text soll nicht in JSON
gepresst werden. `renderModuleDetails()` füllt nur Abschnitte für Programme, die im Markup
fehlen. Wer für ein neues Programm einen eigenen Abschnitt schreiben will, legt ihn ins Markup
und setzt die `id` auf die Programm-ID; der generische Abschnitt entfällt dann von selbst.

## 4. Ein Programm hinzufügen

1. Ordner anlegen und die Datei hineinlegen, zum Beispiel `presets/index.html`.
2. In `assets/data/versions.json` einen Programm-Eintrag ergänzen (`id: "presets"`,
   `path: "presets/"`, `pack: "presets/Preset-Loader.html"`, Texte in DE/EN/ES) und einen
   Release-Eintrag mit Version, Größe und SHA-256.
3. `versions.js` neu erzeugen (Abschnitt 2), `node tools/paket.mjs` laufen lassen.

Danach erscheint das Programm in Kopfzeile, Startansicht, Fußzeile, Meldedialog und ZIP, und
`#/presets` öffnet es im Rahmen. Plattform-Code wird nicht angefasst.

Die Startseite zeigt bewusst weder Nummern noch Programmliste noch Programmschalter: nach
außen ist das ein Werkzeug mit drei Bereichen. Register und Abschnitte bleiben trotzdem
getrennt, damit ein viertes ohne Umbau dazukommt.

Prüfen:

- `node --check assets/js/hub.js` und `node tools/paket.mjs`
- Startseite über einen lokalen Server, `?lang=de|en|es`, alle drei Farben
- Programm direkt öffnen, im Rahmen öffnen, zurück zur Übersicht
- ZIP entpacken und `FlowState-FPV.html` über `file://` öffnen

## 5. Ein Programm aktualisieren

1. Nur die Datei des Programms ersetzen, zum Beispiel `hangar/index.html`.
2. Im Register die Werte dieses Programms nachziehen: `version`, `size_bytes`, `sha256`,
   `released`, Texte von `title`/`summary`, `release_url`.

```bash
stat -c%s hangar/index.html
sha256sum hangar/index.html
```

Alles andere bleibt unberührt. Kein anderes Programm, keine Plattformlogik, keine
Speicher-Schlüssel. Wenn ein Programm neue Dateien mitbringt (Bilder, Startbestand), gehören sie
in `extra`, damit sie im ZIP landen.

**Speicherformate** dürfen sich nicht stillschweigend ändern. Die Schlüssel heute:

| Programm | Schlüssel |
|---|---|
| Hangar | `flowstate.hangar.v1`, `flowstate.hangar.prefs` |
| Tuner | `flowstate-v48-alpha1`, `flowstate-disclaimer` |
| Guide | `bf-tuning-guide-alpha-de-v1` |
| Presets | `flowstate.presets.v1`, `flowstate.presets.prefs`, `flowstate.presets.beepExtra` |
| OSD | `bfOsdLab.shell.v1`, `bfOsdLab.fontImports.v1` |
| gemeinsam | `flowstate.prefs`, `flowstate-theme`, `flowstate-lang` |

Die drei gemeinsamen gehören zur Plattform: Farbe und Sprache. Sie werden von jeder Seite
gelesen und geschrieben, ein `storage`-Ereignis zieht offene Seiten nach. Wer daran etwas
ändert, muss alle Programme prüfen.

## 6. Paket und Veröffentlichung

- `node tools/paket.mjs` baut `paket/FlowState-FPV-mit-Hub.zip` (nicht im Verlauf, siehe
  `.gitignore`). Der Ordner `FlowState-FPV/` ist die Wurzel, die Programme heißen im Paket
  nach sich selbst, damit nicht vier `index.html` nebeneinanderliegen.
- Der Knopf *Alles herunterladen* baut dasselbe Paket im Browser aus denselben Dateien; beide
  Wege lesen das Register.
- `.github/workflows/paket.yml` baut das ZIP nach jeder Änderung an `index.html`, `assets/**`,
  `*/index.html`, `*/assets/**`, `README.md` oder `LICENSE` und hängt es an alle Releases.
- `.github/workflows/aufraeumen.yml` hält Pages-Builds und Deployments kurz.
- GitHub Pages liefert `main` direkt aus. Relative Pfade, kein Server, kein Build.
- Releases: eine Reihe je Programm, Gesamt-ZIP als Asset. Die drei älteren Reihen nutzen
  `v<version>`, die beiden neuen `presets-v<version>` und `osd-v<version>` (Begründung in
  Abschnitt 2).

## 7. Farbe und Sprache

Jedes Werkzeug liest die Wahl in dieser Reihenfolge: `?theme=`/`?lang=` aus der Adresse, dann
`flowstate-theme` und `flowstate-lang`, dann `flowstate.prefs` (JSON mit `theme`, `lang`),
dann die eigene Ablage, zuletzt die Browsersprache. Ändert jemand etwas im Kopf, schreibt das
Werkzeug alle drei Stellen und die anderen Fenster ziehen über das `storage`-Ereignis nach.
Ein neues Werkzeug muss dieselben vier Stellen lesen und schreiben, sonst steht es allein da.

## 8. Fallstricke

- **`file://`**: kein `fetch`, kein geteilter Speicher zwischen Dateien. Deshalb `versions.js`
  neben `versions.json`, deshalb Programme im eigenen Tab statt im Rahmen.
- **Rahmen**: Der Hub setzt `?lang=` und `?theme=` an jede Programm-URL. Jedes Programm muss
  beides lesen, sonst startet es in seiner eigenen Vorgabe.
- **Kopfzeile im Paket**: `paket.mjs` schreibt `data-app-*` ins `<html>`; `hub.js` liest sie,
  um im Paket auf `hangar/FlowState-Hangar-Deck.html` statt `hangar/` zu verweisen.
- **Kein `reveal` in generierten Abschnitten**: Die Einblendung wird beim Start verdrahtet;
  nachträglich eingefügte Elemente mit `.reveal` blieben unsichtbar.
- **i18n**: Texte der Programme stehen dreisprachig im Register, Texte der Plattform in `UI` in
  `hub.js` (rund 200 Schlüssel je Sprache, Fallback Englisch). Ein fehlender Schlüssel zeigt
  den Schlüsselnamen an, das fällt beim Durchsehen auf.
- **Keine externen Ressourcen**: keine CDNs, keine Schriften, keine Bibliotheken. Das Paket
  muss ohne Netz laufen.
