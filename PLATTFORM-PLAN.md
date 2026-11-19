# FPV Toolbox: Bestandsaufnahme und Integrationsplan

Stand der Analyse: 03.11.2026, Commit `f8ebcd7` (main). Dieses Dokument beschreibt, was da war,
wo die Plattform an genau drei Programme gebunden war und mit welchen Änderungen ein viertes
Werkzeug ohne Eingriff in die Plattformlogik dazukommt. Es ist bewusst als Bestandsaufnahme
stehen geblieben; umgesetzt ist inzwischen Etappe 1 bis 3 und 5, die Referenz steht in
[`PLATTFORM.md`](PLATTFORM.md).

---

## 1. Bestandsaufnahme

### 1.1 Dateien

24 Dateien, zusammen rund 8,5 MB. Davon 8,3 MB die drei Programme.

| Datei | Größe | Rolle |
|---|---|---|
| `index.html` | 32.358 B | Startseite, alle Abschnitte im Markup |
| `assets/js/hub.js` | 100.941 B | gesamte Logik der Startseite, 182 Funktionen |
| `assets/css/style.css` | 44.564 B | Gestaltung der Startseite |
| `assets/js/markdown.js` | 7.093 B | setzt `README.md` in HTML um, für `README.html` im Paket |
| `assets/data/versions.json` | 24 KB | Programme, Releases, Größen, Hashes, alle Texte in DE/EN/ES |
| `assets/data/versions.js` | 24 KB | dasselbe als Skript, damit die Seite auch über `file://` Daten hat |
| `assets/images/*` | 7 Dateien | Logo, Zeichen, Favicon, Vorschauen |
| `hangar/index.html` | 131.966 B | FlowState Hangar Deck 0.9.5-beta.1 |
| `hangar/data/flowstate-hangar.json` | 1.538 B | Startbestand, wird nur im Paket mitgeliefert (hieß bis 0.9.6 `hangardeck.json`) |
| `tuner/index.html` | 496.882 B | FlowState Tuner 4.8-alpha.4 |
| `guide/index.html` | 7.700.211 B | FPV Guide 1.0.2-beta.20-es |
| `guide/assets/*` | 2 PNG | Wortmarke und Fußzeile des Guides |
| `tools/paket.mjs` | 12 KB | baut das Gesamt-ZIP, 23 Dateien |
| `.github/workflows/paket.yml` | 1.489 B | baut das ZIP und hängt es an die Releases |
| `.github/workflows/aufraeumen.yml` | 5.511 B | hält Pages-Builds und Deployments kurz |
| `README.md` | 11.396 B | Projektbeschreibung DE/EN |
| `LICENSE`, `.gitignore`, `.nojekyll` | klein | Lizenz und Hosting |

### 1.2 Die drei Programme

Alle drei sind einzelne HTML-Dateien mit Inline-CSS und Inline-JS. Kein Build, kein CDN, kein
externes Skript. Der Guide ist mit 7,7 MB die Ausnahme bei der Größe, nicht beim Aufbau.

| | Hangar | Tuner | Guide |
|---|---|---|---|
| Version | 0.9.5-beta.1 | 4.8-alpha.4 | 1.0.2-beta.20-es |
| Speicher | `flowstate.hangar.v1`, `flowstate.hangar.prefs` | `flowstate-v48-alpha1`, `flowstate-disclaimer` | `bf-tuning-guide-alpha-de-v1` |
| Geteilt | `flowstate.prefs`, `flowstate-theme`, `flowstate-lang` | `flowstate-theme` | `flowstate-theme`, `flowstate-lang` |
| Eigene Assets | keine | keine | `guide/assets/*.png` |
| Eigene Seiten | keine | keine | keine |

Damit ist Punkt 8 deiner Vorgabe bereits erfüllt: jedes Werkzeug hat seinen eigenen
Speicherbereich. Geteilt sind nur drei Schlüssel, und die gehören zur Plattform (Farbe, Sprache).
Eine Migration von Speicherformaten ist für die Integration **nicht** nötig.

Das Geteilt-Prinzip ist heute so gelöst, dass jede Seite ihre Wahl selbst schreibt und liest;
ein `storage`-Ereignis zieht offene Seiten nach. Das bleibt, wie es ist.

### 1.3 Die Plattform heute

Die Startseite ist bereits eine Plattform, nur eine mit fester Liste:

| Aufgabe | Wo | Zustand |
|---|---|---|
| Navigation zu den Werkzeugen | Kopfzeile `#app-switch`, Fußzeile, Kacheln | im Markup fest verdrahtet |
| Übersicht mit Versionen | `#overview-list`, aus `versions.json` | datengetrieben |
| Programm im Rahmen | `#app-stage` mit `<iframe>`, `#/hangar`, `#/tuner`, `#/guide` | fest auf drei IDs |
| Farbe und Sprache | `?theme=`, `?lang=`, `flowstate-theme`, `flowstate-lang` | fertig, drei Paletten, drei Sprachen |
| Download des Gesamtpakets | eigener ZIP-Schreiber in `hub.js` plus `tools/paket.mjs` | Liste der Dateien fest verdrahtet |
| Update-Prüfung | `versions.json` von Pages, dann `raw.githubusercontent.com` | datengetrieben |
| Fehler melden | `REPORT_CONFIG`, `REPORT_PROGRAMS` | fest auf vier Einträge (inklusive Startseite) |
| Texte | 197 Schlüssel je Sprache in `hub.js`, Fallback Englisch | vollständig DE/EN, ES ungeprüft |

Der Rahmen ist der einzige Ort, an dem die Startseite in die Programme eingreift. Er lädt die
Seite als eigenes Dokument, teilt keinen Code und keinen Speicher. Über `file://` öffnet sie
stattdessen einen eigenen Tab, weil Browser dort den Rahmen sperren.

**Zur iFrame-Frage:** Der Rahmen ist bei dir seit Wochen gewollt (Programme im Rahmen unter der
Kopfzeile, `#/hangar`). Er ist hier auch technisch die richtige Wahl, weil die drei Dateien
vollständige Dokumente mit eigenem CSS und eigenem Skript sind; ein Einbetten ohne Rahmen würde
bedeuten, 8,3 MB Inline-Code in die Startseite zu ziehen. Für neue Werkzeuge gilt dasselbe.
Ich schlage deshalb **keine Änderung** vor.

### 1.4 Veröffentlichung

- GitHub Pages liefert `main` direkt aus, `index.html` im Wurzelverzeichnis ist die Startseite.
- Drei getrennte Release-Reihen, je Programm eine, jeweils mit dem Gesamt-ZIP als Asset.
- `tools/paket.mjs` und der ZIP-Schreiber im Browser erzeugen dasselbe Paket, einmal auf dem
  Server, einmal auf Klick. Beide enthalten die Programmdateien umbenannt
  (`hangar/FlowState-Hangar-Deck.html` usw.), damit im Ordner keine vier `index.html` liegen.

### 1.5 Was die drei teilen, und was nicht

Gemeinsam: Farbpalette (Ocean, Sand, Drakn), Sprache (DE/EN/ES), Speicherhinweis, Fußzeile,
Versionszeile, die drei Streifen im Kopf, die Adress-Parameter `?theme=` und `?lang=`.

Nicht gemeinsam: Aufbau der Seiten, Bedienlogik, Datenmodell, Dialoge, Tastenkürzel. Das ist
Absicht und bleibt so. Ein gemeinsames Stylesheet für die Programme gibt es nicht und soll es
nicht geben: jede Datei muss allein lauffähig bleiben.

---

## 2. Befund: wo „drei" fest im Code steht

Das ist die eigentliche Arbeit. Ein viertes Werkzeug würde heute an **elf** Stellen scheitern,
davon acht in der Plattform.

| Stelle | Datei | Was dort fest ist |
|---|---|---|
| Umschalter im Kopf | `index.html` 54-68 | drei `<a class="app-switch__item">` |
| Kopfzeile Untertitel | `index.html` 403 | `Hangar · Autotuner · Guide` |
| Paketliste | `index.html` 155-162 | fünf `<li><code>` mit Dateinamen |
| Links „Mehr zu den Programmen" | `index.html` 165-170 | drei Verweise |
| Detailabschnitte | `index.html` 173-283 | drei handgeschriebene Abschnitte mit Prosa |
| Fußzeile Programme | `index.html` 411-417 | drei Verweise, Text „Drei HTML-Programme" |
| Programmpfade | `hub.js` 701 | `APPS = { hangar, tuner, guide }` |
| Verweis-Erkennung | `hub.js` 727 | Regex auf genau diese drei Pfade |
| Adress-Route | `hub.js` 745 | Regex `#/(guide\|tuner\|hangar)` |
| Dateinamen im Paket | `hub.js` 1339 | `PACK_PAGES` mit drei Einträgen |
| ZIP-Inhalt | `hub.js` 1343-1360 | zwei feste Schleifen über drei IDs |
| Melde-Auswahl | `hub.js` 1497 | vier Einträge |
| Paketbau | `tools/paket.mjs` 20-31, 103, 227-229 | dieselben drei Namen nochmal |
| Fließtext | `hub.js` 45, 48, 49, 158 und `versions.json` | „die drei Programme" |

Zwei Nebenbefunde:

- `renderProjects()` in `hub.js` baut bereits Karten aus `versions.json`, wird aber nie
  aufgerufen, weil `#project-grid` im Markup fehlt. Die Funktion ist brauchbar und wird im Plan
  wiederverwendet, statt neuen Code zu schreiben.
- `versions.json` ist die einzige Liste, die schon vollständig datengetrieben ist. Sie ist der
  natürliche Ort für das Register.

---

## 3. Zielbild

**Ein Register, ein Normalisierer, keine neue Schicht.**

```
Repo (bleibt, wie es ist)
├── index.html            Startseite, rendert aus dem Register
├── assets/
│   ├── js/hub.js         liest das Register, baut Kopf, Kacheln, Paket, Meldung
│   ├── css/style.css     unverändert plus zwei Regeln für neue Farbtöne
│   └── data/versions.json   ← das Register
├── hangar/  tuner/  guide/     unverändert
├── presets/  osd/             neue Werkzeuge, eigener Ordner, eigene Datei
├── tools/paket.mjs        liest dasselbe Register
└── README.md, LICENSE
```

Abweichung von deinem Strukturvorschlag, mit Begründung:

- **kein `modules/`-Ordner.** Die drei Werkzeuge liegen in `hangar/`, `tuner/`, `guide/`, diese
  Pfade sind veröffentlicht: Lesezeichen, geteilte Links, `devices.json`-Verweise, das ZIP und
  `README`. Ein Umzug nach `modules/hangar/` würde alle Direktlinks brechen, `paket.mjs`, die
  Verweis-Erkennung und das Paket betreffen und bei einer 7,7-MB-Datei jede Prüfung neu starten,
  ohne einen einzigen Vorteil. Neue Werkzeuge bekommen einen Ordner auf derselben Ebene
  (`presets/`, `osd/`). Damit ist die Struktur erweiterbar, ohne dass etwas wandert.
- **kein `platform/`-Ordner mit `navigation.js` und `modules.js`.** Diese Aufgabe erfüllt heute
  `assets/js/hub.js` (100 KB, 182 Funktionen) vollständig, inklusive ZIP-Bau, Sprachumschaltung
  und Rahmen. Ein Aufteilen wäre ein Umbau der funktionierenden Plattform, also genau das, was
  deine Regel 1 und 4 ausschließen. Bleibt der Wunsch nach Trennung später bestehen, lässt sich
  der Register-Teil in einem Schritt herausziehen, weil er dann schon isoliert ist.
- **kein `shared/`.** Geteilt sind heute drei Speicher-Schlüssel und zwei Adress-Parameter, kein
  Code. Ein gemeinsames Stylesheet für die Programme würde die eigenständige Lauffähigkeit
  gefährden.

### 3.1 Das Register

`assets/data/versions.json` bleibt die einzige Quelle. Sie bekommt `schema: 4` und je Programm
optionale Felder. Alles Neue ist optional, alte Stände bleiben lesbar.

```json
{
  "id": "presets",
  "name": "Preset Loader",
  "accent": "mint",
  "path": "presets/",
  "enabled": true,
  "entry": "index.html",
  "pack": "presets/Preset-Loader.html",
  "detail": false,
  "kind":   { "de": "…", "en": "…", "es": "…" },
  "description": { "de": "…", "en": "…", "es": "…" },
  "highlights":  { "de": ["…"], "en": ["…"], "es": ["…"] },
  "meta":        { "de": ["1 Datei · 84 KB"], "en": ["…"], "es": ["…"] }
}
```

Was daraus automatisch folgt, ohne eine Zeile Plattformcode zu ändern:

1. Eintrag im Umschalter der Kopfzeile, in der Reihenfolge des Registers
2. Kachel in der Startansicht mit Version und Größe aus `releases`
3. Verweis in der Fußzeile
4. eigener Detailabschnitt, generisch aus `description`, `highlights`, `meta`
5. Zeile im Bereich Versionen mit Download-Knopf
6. Eintrag im Gesamt-ZIP an der Stelle `pack`
7. Eintrag in der Paketliste auf der Startseite
8. Auswahl im Fehler-melden-Dialog
9. Route `#/presets` im Rahmen
10. Prüfung auf neuere Fassung

`enabled: false` blendet einen Eintrag überall aus, die Datei selbst bleibt über ihre Adresse
erreichbar. Fehlt der Ordner, überspringt der ZIP-Bau die Datei und meldet das, statt abzubrechen.

### 3.2 Detailabschnitte

Die drei vorhandenen Abschnitte sind handgeschriebene Prosa mit eigenem Aufbau (Bereichsraster,
zwei Spalten, Logos, Beispiele). Sie sind gut und bleiben unverändert. Neue Werkzeuge bekommen
einen generischen Abschnitt aus dem Register, eingefügt nach dem letzten vorhandenen. Wer für ein
neues Werkzeug später einen eigenen Abschnitt will, schreibt ihn ins Markup und setzt
`"detail": true`; das Register bleibt unangetastet.

Damit sind beide Wege offen, ohne dass bestehende Texte in JSON gepresst werden.

---

## 4. Konkrete Änderungen

Sechs Dateien, alle klein. Kein Werkzeug wird angefasst.

| # | Datei | Änderung | Risiko |
|---|---|---|---|
| E1 | `assets/data/versions.json` + `versions.js` | `schema: 4`, optionale Felder, Feld `platform` mit Version der Startseite | niedrig, alte Leser ignorieren die Felder |
| E2 | `index.html` | Umschalter, Fußzeilenliste, Programmlinks und Paketliste bekommen leere Container, die `hub.js` füllt. Das bisherige Markup bleibt als Inhalt stehen und wird beim Rendern ersetzt (kein Aufblitzen, funktioniert ohne JS). Neuer Container `#program-details` nach dem Guide-Abschnitt. | niedrig, gleiche Klassen |
| E3 | `assets/js/hub.js` | ein Normalisierer `modules()`; `APPS`, `appTarget`, `currentAppId`, `PACK_PAGES`, `bundleEntries`, `REPORT_PROGRAMS` lesen daraus; `renderDetails()` für generische Abschnitte; `projectTemplate()` wird für sie verwendet; Texte mit „drei" auf „alle" umgestellt | mittel, betrifft 8 Stellen, jede einzeln prüfbar |
| E4 | `assets/css/style.css` | `.project--hangar`, `.project--<accent>` generisch, ein Fallback für unbekannte Töne | niedrig, additiv |
| E5 | `tools/paket.mjs` | `PAGES`, `packagedHub`, `programLines` und die Eintragsliste aus dem Register, mit den bisherigen Namen als Rückfall | niedrig |
| E6 | `.github/workflows/paket.yml` | Pfadmuster um neue Ordner erweitern (`'presets/**'` oder allgemein `'*/index.html'`) | niedrig |

Nicht geändert: `hangar/`, `tuner/`, `guide/` (byteweise gleich, Hashes bleiben), `README.md`
außer der neuen Struktur- und Anleitung, `LICENSE`, `aufraeumen.yml`, alle Speicher-Schlüssel,
alle Adressen, das Aussehen der Startseite.

Was ich bewusst **nicht** mache:

- keine Aufteilung von `hub.js` in Module (kein Build, keine Ladereihenfolge, kein Nutzen)
- keine Web Components, kein Framework, keine Abhängigkeit
- keine neuen i18n-Schlüssel für Werkzeugtexte: die stehen schon dreisprachig in
  `versions.json`, das ist die vorhandene Konvention
- keine Änderung an `file://`-Verhalten, Rahmen, Download oder Update-Prüfung

---

## 5. Etappen

Jede Etappe einzeln prüfbar und einzeln mergebar. Kein Schritt ändert zwei Werkzeuge.

**Etappe 0 (dieses Dokument).** Nichts am Code. Du liest, wir klären die offenen Punkte aus
Abschnitt 8.

**Etappe 1: Register und Leser.** E1 plus Normalisierer in `hub.js`, noch ohne sichtbare
Änderung. Prüfung: Startseite sieht aus wie vorher, `versions.json` ist gültig, alle drei
Kacheln, Versionen und Downloads wie bisher. Dauer etwa eine Stunde.

**Etappe 2: Kopf, Fuß, Paket, Meldung aus dem Register.** E2 und der Rest von E3, E4. Prüfung:
Umschalter, Fußzeile, Paketliste, Meldedialog unverändert in DE/EN/ES; `#/hangar`, `#/tuner`,
`#/guide` öffnen den Rahmen; ZIP enthält dieselben 23 Dateien in derselben Reihenfolge; alle drei
Programme weiter eigenständig. Dauer etwa drei Stunden.

**Etappe 3: Paketbau und Workflow.** E5, E6. Prüfung: `node tools/paket.mjs` erzeugt dasselbe
Paket (23 Dateien, 5.441.412 B), entpackt über `file://` lauffähig, Workflow läuft durch. Dauer
etwa eine Stunde.

**Etappe 4: Probe mit einem vierten Eintrag.** Ein Werkzeug, das es noch nicht gibt, als Eintrag
mit `enabled: false` und als Testordner, dann durchspielen: Kachel, Umschalter, ZIP, Meldung,
Route. Danach wieder entfernen. Damit ist die Erweiterbarkeit belegt, nicht nur behauptet. Dauer
etwa eine Stunde.

**Etappe 5: Dokumentation.** `PLATTFORM.md` im Wurzelverzeichnis: Aufbau, Register, „neues
Werkzeug in vier Schritten", „ein Werkzeug aktualisieren, ohne andere anzufassen", Prüfliste.
`README.md` bekommt einen kurzen Abschnitt mit Verweis darauf. Dauer etwa eine Stunde.

**Etappe 6: GitHub.** Siehe Abschnitt 7.

---

## 6. Prüfplan

Nach jeder Etappe, nicht erst am Ende:

1. `node --check assets/js/hub.js` und `node --check tools/paket.mjs`
2. `versions.json` gegen die Dateien: Größe und SHA-256 stimmen, drei Programme, gültiges JSON
3. Startseite über einen lokalen Server, DE/EN/ES, drei Paletten, `#/hangar`, `#/tuner`,
   `#/guide`, Konsole leer
4. jedes Programm direkt geöffnet: eigener Tab, eigener Speicher, eigener Export
5. Rahmen: Sprache und Farbe kommen an, Umschalten zieht nach, Zurück-Knopf, `Esc`
6. ZIP: `node tools/paket.mjs`, entpacken, `FlowState-FPV.html` über `file://` öffnen, jedes
   Programm aus dem Ordner öffnen, Speicherverhalten wie dokumentiert
7. 390 px Breite ohne waagerechtes Scrollen, Kontraste unverändert
8. `file://` auf der Startseite: Programme öffnen im Tab, kein Rahmenfehler
9. Hashes der drei Programmdateien vor und nach der Arbeit gleich

---

## 7. GitHub

Nach Etappe 5, in einem eigenen PR:

- **`README.md`**: Abschnitt „Aufbau" mit der tatsächlichen Struktur; Abschnitt „Ein Werkzeug
  hinzufügen" in drei Schritten (Ordner, Datei, Registereintrag); ehrliche Liste, welche
  Werkzeuge im Repo liegen (heute drei) und welche angekündigt sind. Keine Beschreibung von
  Funktionen, die es nicht gibt.
- **`PLATTFORM.md`** neu, für Entwickler und für die nächste KI.
- **Release-Konvention** bleibt: eine Reihe je Werkzeug, Tag `v<version>`, Gesamt-ZIP als Asset.
  Die Startseite selbst bekommt eine eigene, kleine Versionsangabe (`platform` im Register),
  damit man beim Melden eines Fehlers sagen kann, welcher Stand der Plattform lief.
- **Workflows**: `paket.yml` Pfadmuster erweitern, `aufraeumen.yml` unverändert.
- **Repo-Beschreibung und Themen** (`gh repo edit --description`, `--add-topic fpv,betaflight,…`)
  so, dass sie den Stand nach dem Umbau beschreiben.
- **Offene Frage Repo-Name**: `flowstate-fpv-tuner` passt nicht mehr, wenn die Plattform mehr als
  den Tuner führt. Umbenennen ändert die Pages-Adresse und damit alle veröffentlichten Links.
  Meine Empfehlung: Namen lassen, Beschreibung und README anpassen. Entscheidung bei dir.
- **Branches**: 20 alte `arena/*`-Branches liegen noch im Repo. Nach dem Umbau aufräumen, wenn du
  willst (`gh api -X DELETE`). Ich fasse sie nicht ohne dein Wort an.

---

## 8. Offene Punkte

1. **Preset Loader / Preset Creator und OSD Customizer liegen nicht vor.** Weder im Repo noch in
   Drive (Suche über den ganzen Account nach `preset` liefert nichts). Ohne die Dateien kann ich
   sie nicht integrieren, nur den Platz dafür vorbereiten.
2. **Presets gibt es schon, aber im Hangar.** In Drive liegt Hangar Deck **0.9.6-beta.1**
   (154.054 B) mit einem Preset-Knopf für Schalter, Beeper und OSD. Das Repo führt 0.9.5. Bevor
   ein eigenes Preset-Werkzeug gebaut wird, muss klar sein, ob das die Weiterentwicklung dieses
   Knopfs ist oder ein zweites Werkzeug daneben. Doppelte Preset-Verwaltung wäre schlecht.
3. **Hangar 0.9.6 ins Repo holen?** Das ist eine Modul-Aktualisierung, kein Plattformthema, und
   laut Absprache bearbeitest du Programmdateien selbst. Ich kann sie einspielen, wenn du es
   sagst, und danach Version, Größe und Hash im Register nachziehen.
4. **Detailabschnitte für neue Werkzeuge**: generisch aus dem Register (mein Vorschlag) oder
   jedes Mal handgeschrieben.
5. **Reihenfolge im Umschalter** bei mehr als drei Werkzeugen. Heute Hangar, Tuner, Guide. Neue
   hinten anhängen ist die einfachste Regel.

---

## 9. Aufwand

| Etappe | Inhalt | Dauer |
|---|---|---|
| 1 | Register, Leser | ~1 h |
| 2 | Kopf, Fuß, Paket, Meldung aus dem Register | ~3 h |
| 3 | Paketbau, Workflow | ~1 h |
| 4 | Probe mit viertem Eintrag | ~1 h |
| 5 | Dokumentation | ~1 h |
| 6 | GitHub | ~1 h |

Zusammen etwa ein Arbeitstag, ohne die Werkzeuge selbst anzufassen.
