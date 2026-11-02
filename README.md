# [FlowState FPV](https://yngwierfpv.github.io/flowstate-fpv-tuner/)

Drei Programme für Betaflight. Jedes ist eine einzelne HTML-Datei, die im Browser läuft,
ohne Installation, Konto oder Internetverbindung.

Größen zur Basis 1000. Byte-Werte und Prüfsummen stehen unter [Versionen](#versionen).

---

## [HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)

[`hangar/index.html`](hangar/index.html) · 65 KB · Copter-Liste führen, als Tabelle ausgeben

Führt die Copter-Liste. Pro Zeile stehen Name, Größe, Spannung, KV, ESC, Props und Status;
Flight Controller, Akku, Abfluggewicht und Notiz liegen unter *Mehr Details* und bleiben
leer, wenn sie nicht gebraucht werden.

- Export als PDF-Tabelle, CSV, Druck oder JSON
- Abgleich mit dem eigenen Repository, Lesen ohne Token
- Daten im localStorage des Browsers, kein Konto, keine Telemetrie
- Deutsch und Englisch

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

Herunterladen ist freiwillig. Alle drei Programme laufen auch direkt auf der Übersichtsseite,
im Rahmen unter der Kopfzeile, ohne Server und ohne Internet.

Direkt im Browser: [Übersicht](https://yngwierfpv.github.io/flowstate-fpv-tuner/),
[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/),
[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/),
[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/).

*Alles herunterladen* auf der Startseite packt ein ZIP mit der Übersichtsseite, den drei
Programmen, `README.md`, `README.html`, `LICENSE` und `LIESMICH.txt`. Dasselbe Paket liegt
als `FlowState-FPV-mit-Hub.zip` an jedem [Release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Mit Hub
herunterladen* in einer Versionszeile packt denselben Inhalt und nennt das Programm im
Dateinamen. Das ZIP entsteht bei jedem Klick neu, `README.html` wird dabei aus `README.md`
erzeugt.

Entpackt die `index.html` öffnen. Über `file://` starten die Programme in einem eigenen
Tab, weil Browser dort den Rahmen blockieren. Über einen lokalen Server oder GitHub Pages
erscheinen sie im Rahmen unter der Kopfzeile.

## Aktualisieren

Die Programme brauchen kein Internet, eine Prüfung auf neuere Fassungen schon. Der Knopf mit
dem Pfeilkreis im Kopf der Übersichtsseite holt die veröffentlichte
`assets/data/versions.json` und nennt jede Programmreihe, die weiter ist. Ohne Verbindung
antwortet er mit einem Hinweis und sonst nichts. Die Prüfung läuft nur auf Klick, im
Hintergrund fragt die Seite nichts ab.

Die eigenen Daten bleiben dabei: Copter-Liste und Tuner-Stand liegen im localStorage des
Browsers, nicht in den HTML-Dateien. Wer die neue Fassung im selben Ordner über die alte
legt, behält beides. Vorher sichern schadet trotzdem nicht: in HangarDeck als JSON
exportieren, im Tuner Plan und Manifest. Über GitHub Pages ist ohnehin immer der letzte
Stand zu sehen, dort gibt es nichts zu ersetzen.

## Sprachen

| Sprache | Übersicht | HangarDeck Lite | FlowState Tuner | FPV Guide |
|---|---|---|---|---|
| Deutsch | vollständig integriert | vollständig integriert | vollständig integriert | vollständig integriert |
| Englisch | vollständig integriert | vollständig integriert | vollständig integriert | vollständig integriert |
| Spanisch | nicht geprüft | nicht angelegt | nicht geprüft | nicht geprüft |

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
entscheidet die Browsersprache, sonst Deutsch. Fehlt ein einzelner Text in einer
Übersetzung, erscheint er auf Englisch.

## Versionen

Getrennte Reihen je Programm, jede mit eigenem Release.

| | [HangarDeck Lite](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.4.0-beta.3) | [FlowState Tuner](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4) | [FPV Guide](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.13-es) |
|---|---|---|---|
| Version | `v0.4.0-beta.3` | `v4.8-alpha.4` | `v1.0.2-beta.13-es` |
| Kanal | Beta | Alpha | Beta |
| Datum | 02.11.2026 | 02.11.2026 | 02.11.2026 |
| Größe (Bytes) | 65.431 | 496.882 | 7.687.988 |
| SHA-256 | `c0651cba657ffe27398aa01b7518f56c6234508c81f3d4c3703c51aaa5f5b75e` | `ddb1d06a840d99e4c19d823c6d7201017f0ee4da33cebe91a395e9f19fdd5e8a` | `09293f03b5ae0da0409c8169e67706fa67b11ba70aed4f7b9fd7e25ffd3d1342` |

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

Three programs for Betaflight, each a single HTML file that runs in the browser without an
install, an account or an internet connection.

| Program | File | Size | Purpose |
|---|---|---|---|
| **[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** | [`hangar/index.html`](hangar/index.html) | 65 KB | Keep the quad list, export it as a table |
| **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 497 KB | Read logs, derive filter and PID values |
| **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7.7 MB | Look up workflow, filters and terms |

Downloading is optional. All three programs also run right on the overview page, in the frame
below the header, without a server and without internet.

*Download everything* on the overview page packs a ZIP with the overview page, the three
programs, `README.md`, `README.html`, `LICENSE` and `LIESMICH.txt`. The same package sits as
`FlowState-FPV-mit-Hub.zip` on every [release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Download with hub* in a
release row packs the same content and names the program in the file name. Unzip it and open
`index.html`. Over `file://` the programs open in their own tab, over a server they sit in
the frame below the header.

Language lives in the address: `?lang=de`, `?lang=en` or `?lang=es`. Without it the browser
language decides, otherwise German. A missing string falls back to English. Spanish is
selectable on the overview page, in the tuner and in the guide, but verified nowhere;
HangarDeck Lite ships in German and English only.

To check for a newer release, use the arrow button in the header of the overview page. It
reads the published `assets/data/versions.json` and lists every program row that is ahead.
Without a connection it says so and nothing else. The check runs on click only, nothing is
requested in the background.

Your own data stays: the quad list and the tuner state live in the browser's localStorage,
not in the HTML files. Dropping a new version over the old one in the same folder keeps
both. A backup still helps: export JSON in HangarDeck, plan and manifest in the tuner. Over
GitHub Pages you always get the latest state, so there is nothing to replace.

The tuner is an alpha: writing over Web Serial is untested on real hardware and in flight,
and Web Serial exists in Chrome, Edge and Opera on desktop. Read the plan before writing.
The licence allows unmodified redistribution only, see [`LICENSE`](LICENSE).
