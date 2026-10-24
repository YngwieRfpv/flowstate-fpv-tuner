# FlowState FPV — Release Hub

Zentraler Einstiegspunkt für **FlowState Tuner** und den **FPV Guide DE**.
Ein Repository, zwei Anwendungen, ein versionierter Index — statisch, offline-fähig
und bereit für GitHub Pages.

| Projekt | Aktuelle Version | Kanal | Zielpfad |
|---|---|---|---|
| FlowState Tuner | `v4.8-alpha.1` | Alpha (Pre-Release) | [`tuner/`](tuner/) |
| FPV Guide DE | `v1.0.1-beta.1` | Beta | [`guide/`](guide/) |

> Beide Ausgaben sind vorab. Bestandene Quellprüfungen sind **kein** Nachweis für
> Browser-, Web-Serial-, FC- oder Flugverhalten. Der Tuner schreibt nur nach
> Backup-Gate und ausdrücklicher Bestätigung. Props ab für Bench-Arbeit.

## Was dieses Repository ist

- **Ein Hub**, der jede Version einordnet: Projekt, Kanal, Datum, Größe, SHA-256,
  Herkunft (Drive-Ordner) und Reifegrad pro Prüfstufe.
- **Zwei feste URLs** für die Anwendungen — neue Versionen ersetzen genau eine Datei.
- **Ein maschinenlesbarer Index** in [`assets/data/versions.json`](assets/data/versions.json),
  aus dem der Hub seine Liste rendert.
- **Ein Gate**: `scripts/validate.mjs` prüft Index, Pfade, Hashes und Links — lokal
  und in der CI, bevor deployt wird.

Was dieses Repository **nicht** ist: keine Build-Pipeline, kein Backend, keine
Analytics, keine externen Fonts oder CDNs.

## Struktur

```
flowstate-fpv-tuner/
├── index.html              # der Hub (statisch, kein Framework)
├── README.md
├── .nojekyll               # Jekyll aus – wichtig für Ordner-URLs
├── .gitignore
├── .github/workflows/
│   ├── pages.yml           # validieren → stagen → deployen
│   └── validate.yml        # Prüfung bei jedem Push/PR
├── guide/
│   └── index.html          # FPV Guide DE
├── tuner/
│   └── index.html          # FlowState Tuner
├── assets/
│   ├── css/style.css       # Design-System (Tokens, Dark/Light)
│   ├── js/hub.js           # Rendering, Filter, Suche, Theme
│   ├── data/versions.json  # ← Quelle der Wahrheit
│   └── images/             # mark.svg, favicon.svg
├── docs/
│   ├── GITHUB_PAGES_SETUP.md
│   ├── RELEASE_PROCESS.md
│   └── releases/           # Notes je Version
└── scripts/
    ├── install-versions.sh # Anwendungsdateien einspielen
    ├── update-manifest.mjs # Hash + Größe in den Index schreiben
    └── validate.mjs        # Index, Pfade, Hashes, Links prüfen
```

## Lokal starten

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Ein `file://`-Aufruf per Doppelklick reicht für den Hub nicht, weil der Browser
dann `versions.json` blockiert. Die beiden Anwendungen selbst laufen auch direkt
aus der Datei.

## Eine Version einspielen

```bash
./scripts/install-versions.sh \
  --tuner ~/Downloads/FlowState-Tuner-v4.8-alpha.1.html \
  --guide ~/Downloads/FPV_Guide_index.html

node scripts/validate.mjs

git add -A
git commit -m "release: tuner v4.8-alpha.1, guide v1.0.1-beta.1"
git push origin main
```

Das Skript kopiert die Einzeldateien nach `tuner/index.html` bzw.
`guide/index.html`, berechnet SHA-256 und Größe und setzt `available: true`.
Solange eine Datei fehlt, zeigt der Hub den Slot als *noch nicht eingespielt* —
die Seite bleibt also nie kaputt, nur unvollständig.

Details: [`docs/RELEASE_PROCESS.md`](docs/RELEASE_PROCESS.md).

## Deployment

**Settings → Pages → Source: GitHub Actions.** Der Workflow validiert zuerst und
deployt erst danach. Die Alternative *Deploy from a branch → main / (root)*
funktioniert ebenfalls, weil `.nojekyll` vorhanden ist.

Vollständige Anleitung inklusive eigener Domain, Cache-Verhalten der 7-MB-Datei
und Fehlerbildern: [`docs/GITHUB_PAGES_SETUP.md`](docs/GITHUB_PAGES_SETUP.md).

## Herkunft der Versionen

Die Ausgangsdateien liegen in Google Drive unter
`FPVGuide/Tuner/GitHub Versionen/` — je Ausgabe ein Unterordner:

- `FlowState_Tuner_GitHub_Alpha_v4.8-alpha.1`
- `FPV_Guide_GitHub_Beta_v1.0.1-beta.1`

Der Ordner ist keine dauerhafte Ablage für den Betrieb: Sobald eine Version im
Repository liegt, ist **das Repository** die Referenz. Drive bleibt Quelle und
Archiv, nicht Auslieferungsweg.

## Reifegrad

| Prüfstufe | Tuner | Guide |
|---|---|---|
| Quell-/Syntaxprüfung | bestanden | bestanden |
| Render-/Runtime-Pfad | bestanden | bestanden (Simple → Advanced → Sbang) |
| Echte Browser-URL | offen | offen (Beta-Review) |
| Hardware / Web Serial | offen | nicht anwendbar |
| Flugtest | offen | nicht anwendbar |

## Lizenz

Für dieses Repository ist noch **keine Lizenz** gewählt. Bis eine Lizenz
ergänzt ist, gilt die Standard-Copyright-Position von GitHub: Rechte zur
Weiterverwendung sind nicht eingeräumt. Vor einer öffentlichen Freigabe bewusst
eine Lizenz auswählen und hinzufügen.

## Credits

FlowState FPV · YngwierFPV. Die Inhalte des Guides beruhen auf dem
Betaflight-Wiki und den dort dokumentierten Quellen; Versions- und
Hardwareabhängigkeiten sind im Dokument selbst ausgewiesen.
