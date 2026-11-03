# [FlowState FPV](https://yngwierfpv.github.io/flowstate-fpv-tuner/)

Drei Programme für deine Copter. Jedes ist eine einzelne HTML-Datei, die im Browser läuft,
ohne Installation und ohne Konto. Einmal geladen arbeiten sie ohne Verbindung.

---

## [HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)

[`hangar/index.html`](hangar/index.html) · 132 KB · Copter mit Bild führen, Flight Controller auslesen

Führt die Copter-Liste, wahlweise als Kacheln oder als Tabelle. Name, Größe, Spannung, KV,
ESC, Props und Status stehen in der Zeile; Flight Controller, Akku, Videosystem, Abfluggewicht
und Notiz liegen unter *Mehr Details* und bleiben leer, wenn sie nicht gebraucht werden.

- Bild je Copter, vor dem Speichern verkleinert und nur lokal gehalten
- Flight Controller über USB auslesen oder CLI-Text einfügen, mit Prüfung des Targets vor der Sicherung
- Betaflight-Backup je Modell, dazu Empfänger, Videosystem, Akku und Abfluggewicht
- Liste als Code oder Link weitergeben, Bilder bleiben auf dem Gerät
- Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup; JSON und HTML lassen sich wieder einlesen
- Daten im localStorage des Browsers, kein Konto, keine Telemetrie
- Deutsch, Englisch und Spanisch

## [FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)

[`tuner/index.html`](tuner/index.html) · 497 KB · Logs auswerten, Filter- und PID-Werte ableiten

Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt
als CLI-Plan. Geschrieben wird über Web Serial, erst nach einer Sicherung und nach
Bestätigung.

- Sechs Phasen: Setup, Filter, P/D neutral, Master, FF/I/D-Max, Archiv
- Gates vor dem Schreiben: Backup, Firmware 4.5 oder neuer, Zielprofil, Filterlog
- Web Serial gibt es in Chrome, Edge und Opera am Desktop. Brave liefert es abgeschaltet,
  Firefox und Safari haben es nicht. Die Log-Analyse läuft in jedem Browser.
- Props ab, bevor etwas am USB-verbundenen Copter gemacht wird
- Alpha: der Schreibpfad ist an echter Hardware und im Flug nicht getestet. Der Plan lässt
  sich vorher vollständig lesen, Schreiben geht auf eigene Gefahr.

## [FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)

[`guide/index.html`](guide/index.html) · 7,7 MB · Ablauf, Filter und Begriffe nachschlagen

Simple Tuning, Advanced Tuning, Build-Guide, 95 Glossarbegriffe und der Sbang-Ablauf in
sechs Schritten. Werte und Tabellen richten sich nach dem eingestellten Copterprofil.

Die Verweise im Text führen absichtlich nach außen und brauchen Internet. Der Inhalt selbst
braucht es nicht. Quellen und Lizenzangaben bleiben im Dokument stehen.

---

## Öffnen und herunterladen

Herunterladen ist freiwillig. Die drei Programme laufen auch direkt auf der Übersichtsseite, im
Rahmen unter der Kopfzeile. Die Seite selbst kommt aus dem Netz, ohne Verbindung laufen die
Programme nur aus dem entpackten Paket.

Was auf der Seite angelegt wird, liegt im Browserspeicher dieser Adresse. Das Paket führt seinen
eigenen Speicher, die Liste aus der Übersicht ist dort nicht drin. Über `file://` kann der
Browser den Speicher sperren; dann gelten Änderungen nur für die laufende Sitzung.

Direkt im Browser: [Übersicht](https://yngwierfpv.github.io/flowstate-fpv-tuner/),
[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/),
[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/),
[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/).

*Alles herunterladen* auf der Startseite packt ein ZIP mit allem in einem Ordner
`FlowState-FPV`: die Startseite, die drei Programme, `README.md`, `README.html`, `LICENSE`
und `LIESMICH.txt`. Dasselbe Paket liegt als `FlowState-FPV-mit-Hub.zip` an jedem
[Release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Mit Hub
herunterladen* in einer Versionszeile packt denselben Inhalt und nennt das Programm im
Dateinamen. Das ZIP entsteht bei jedem Klick neu, `README.html` wird dabei aus `README.md`
erzeugt.

Im Ordner liegt keine Datei namens `index.html`. Die Namen sagen, was läuft:

| Datei | Programm |
|---|---|
| `FlowState-FPV.html` | Übersicht, mit der alle drei starten |
| `hangar/HangarDeck-Lite.html` | HangarDeck Lite |
| `tuner/FlowState-Tuner.html` | FlowState Tuner |
| `guide/FPV-Guide.html` | FPV Guide |

Entpackt die `FlowState-FPV.html` öffnen. Jedes Programm lässt sich auch allein öffnen, ohne
die Übersicht, und als Lesezeichen ablegen. Über `file://` starten die Programme aus der
Übersicht in einem eigenen Tab, weil Browser dort den Rahmen blockieren. Über einen lokalen
Server oder GitHub Pages erscheinen sie im Rahmen unter der Kopfzeile. Die Prüfung auf
neuere Fassungen funktioniert in allen Fällen gleich.

## Aktualisieren

Die Programme brauchen kein Internet, eine Prüfung auf neuere Fassungen schon. Der Knopf mit
dem Pfeilkreis im Kopf der Übersichtsseite holt die veröffentlichte
`assets/data/versions.json` und nennt jede Programmreihe, die weiter ist. Ohne Verbindung
antwortet er mit einem Hinweis und sonst nichts. Die Prüfung läuft nur auf Klick, im
Hintergrund fragt die Seite nichts ab.

Die eigenen Daten bleiben dabei: Copter-Liste und Tuner-Stand liegen im localStorage des
Browsers, nicht in den HTML-Dateien. Wer die neue Fassung im selben Ordner über die alte
legt, behält beides, eine Sicherung ist dafür nicht nötig. Nur wenn der Ordner wandert, vorher
exportieren: in HangarDeck als JSON, im Tuner Plan und Manifest. Über GitHub Pages ist ohnehin immer der letzte
Stand zu sehen, dort gibt es nichts zu ersetzen.

## Sprachen

| Sprache | Stand |
|---|---|
| Deutsch | vollständig integriert, in der Übersicht und in allen drei Programmen |
| Englisch | vollständig integriert, in der Übersicht und in allen drei Programmen |
| Spanisch | überall wählbar, nicht geprüft |

Spanisch ist übersetzt, aber in keinem Bereich durchgesehen; offene Stellen erscheinen
auf Englisch.

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
entscheidet die Browsersprache, sonst Deutsch. Fehlt ein einzelner Text in einer
Übersetzung, erscheint er auf Englisch.

## Versionen

Getrennte Reihen je Programm, jede mit eigenem Release.

| | [HangarDeck Lite](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.9.5-beta.1) | [FlowState Tuner](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4) | [FPV Guide](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.20-es) |
|---|---|---|---|
| Version | `v0.9.5-beta.1` | `v4.8-alpha.4` | `v1.0.2-beta.20-es` |
| Kanal | Beta | Alpha | Beta |
| Datum | 03.11.2026 | 02.11.2026 | 03.11.2026 |
| Größe (Bytes) | 131.966 | 496.882 | 7.700.211 |
| SHA-256 | `603b54b6f1b8354308e8130a0ef85a6e0412566f9a711f56af451e7a9f3a5728` | `ddb1d06a840d99e4c19d823c6d7201017f0ee4da33cebe91a395e9f19fdd5e8a` | `24ea9d33e142c45033e2a21d598ec8b789d2ee5b26234de38b3f725f18d3744e` |

Nachrechnen: `sha256sum hangar/index.html`, `sha256sum tuner/index.html`,
`sha256sum guide/index.html`, jeweils gefolgt vom erwarteten Wert aus der Tabelle.

Gemeinsam geändert: die Farbe reist als `?theme=ocean|sand|drakn` in der Adresse mit, der
Umschalter steht überall in der Reihenfolge HangarDeck, Tuner, Guide, und ein offenes
Programm zieht nach, sobald in der Übersicht eine andere Farbe oder Sprache gewählt wird.

## Lizenz

Unveränderte Weitergabe ist erlaubt: vollständig, mit Lizenz und Verweis auf die
Originalquelle. Bearbeitungen, Kürzungen, Übersetzungen und eigene Fassungen sind nicht
gestattet. Damit ist es keine Open-Source-Lizenz. Der Grund ist der Schreibzugriff des
Tuners: ungeprüfte Abwandlungen sollen nicht als fertige Fassung im Umlauf sein. Volltext
auf Deutsch und Englisch in [`LICENSE`](LICENSE).

---

## English

Three programs for your quads, each a single HTML file that runs in the browser without an
install and without an account. Once loaded they work offline.

| Program | File | Size | Purpose |
|---|---|---|---|
| **[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** | [`hangar/index.html`](hangar/index.html) | 132 KB | Keep the quad list, read the flight controller |
| **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 497 KB | Read logs, derive filter and PID values |
| **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7.7 MB | Look up workflow, filters and terms |

Downloading is optional. The three programs also run right on the overview page, in the frame
below the header. The page itself comes from the network; without a connection the programs
only run from the unpacked package.

What you create on the page lives in the browser storage of that address. The package keeps its
own storage, the list from the overview is not in it. Over `file://` the browser may block
storage; changes then only last for the running session.

*Download everything* on the overview page packs a ZIP with everything in one folder
`FlowState-FPV`: the overview page, the three programs, `README.md`, `README.html`, `LICENSE`
and `LIESMICH.txt`. The same package sits as `FlowState-FPV-mit-Hub.zip` on every
[release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Download with hub* in
a release row packs the same content and names the program in the file name.

No file in the folder is called `index.html`. The names say what runs:

| File | Program |
|---|---|
| `FlowState-FPV.html` | Overview, the way in to all three |
| `hangar/HangarDeck-Lite.html` | HangarDeck Lite |
| `tuner/FlowState-Tuner.html` | FlowState Tuner |
| `guide/FPV-Guide.html` | FPV Guide |

Unzip it and open `FlowState-FPV.html`. Each program also opens on its own, without the
overview, and can be kept as a bookmark. Over `file://` the programs start from the overview
in their own tab, because browsers block the frame there. Over a local server they sit in the
frame below the header. The check for newer builds works the same either way.

Spanish is selectable in all three programs and on the overview page, but reviewed
nowhere. HangarDeck Lite joined later.

Language lives in the address: `?lang=de`, `?lang=en` or `?lang=es`. Without it the browser
language decides, otherwise German. A missing string falls back to English.

To check for a newer release, use the arrow button in the header of the overview page. It
reads the published `assets/data/versions.json` and lists every program row that is ahead.
Without a connection it says so and nothing else. The check runs on click only, nothing is
requested in the background.

Your own data stays: the quad list and the tuner state live in the browser's localStorage,
not in the HTML files. Dropping a new version over the old one in the same folder keeps both,
no backup needed. Only if the folder moves, export first: JSON in HangarDeck, plan and
manifest in the tuner. Over
GitHub Pages you always get the latest state, so there is nothing to replace.

The tuner is an alpha: writing over Web Serial is untested on real hardware and in flight,
and Web Serial exists in Chrome, Edge and Opera on desktop. Read the plan before writing.
The licence allows unmodified redistribution only, see [`LICENSE`](LICENSE).
