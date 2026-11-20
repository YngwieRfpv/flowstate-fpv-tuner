# [FlowState FPV](https://yngwierfpv.github.io/flowstate-fpv-tuner/)

Copter-Liste führen, Blackbox-Logs auswerten, Werte nachschlagen, Presets bauen, OSD-Fonts
bearbeiten. Das läuft im Browser, ohne Installation und ohne Konto, und einmal geladen ohne
Verbindung.

---

## [Hangar](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)

[`hangar/index.html`](hangar/index.html) · 155 KB · Copter mit Bild führen, Preset-Dateien lesen, Flight Controller auslesen, UART-Belegung zeigen

Führt die Copter-Liste, wahlweise als Kacheln oder als Tabelle. Name, Größe, Spannung, KV,
ESC, Props und Status stehen in der Zeile; Flight Controller, Akku, Videosystem, Abfluggewicht
und Notiz liegen unter *Mehr Details* und bleiben leer, wenn sie nicht gebraucht werden.

- Bild je Copter, vor dem Speichern verkleinert und nur lokal gehalten
- Preset-Dateien im Ordner: einzeln wählen, ziehen oder den ganzen Ordner öffnen; jede Zeile kommt so in den CLI-Diff, wie sie geschrieben ist
- Flight Controller über USB auslesen oder CLI-Text einfügen, mit Prüfung des Targets vor der Sicherung
- Betaflight-Backup je Modell, dazu Empfänger, Videosystem, Akku und Abfluggewicht
- Liste als Code oder Link weitergeben, Bilder bleiben auf dem Gerät
- Export als PDF-Tabelle, CSV, Druck, JSON und HTML-Backup; JSON und HTML lassen sich wieder einlesen
- Daten im Browser-Speicher, Bilder in IndexedDB, kein Konto, keine Telemetrie
- Deutsch, Englisch und Spanisch

## [Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)

[`tuner/index.html`](tuner/index.html) · 502 KB · Logs auswerten, Filter- und PID-Werte ableiten

Liest Blackbox- und Dataflash-Logs, leitet Filter- und PID-Werte ab und zeigt jeden Schritt
als CLI-Plan. Geschrieben wird über Web Serial, erst nach einer Sicherung und nach
Bestätigung.

- Geladene Logs bleiben im Browser und sind beim nächsten Start wieder da
- Sechs Phasen: Setup, Filter, P/D neutral, Master, FF/I/D-Max, Archiv
- Gates vor dem Schreiben: Backup, Firmware 4.5 oder neuer, Zielprofil, Filterlog
- Web Serial gibt es in Chrome, Edge und Opera am Desktop. Brave liefert es abgeschaltet,
  Firefox und Safari haben es nicht. Die Log-Analyse läuft in jedem Browser.
- Props ab, bevor etwas am USB-verbundenen Copter gemacht wird
- Alpha: der Schreibpfad ist an echter Hardware und im Flug nicht getestet. Der Plan lässt
  sich vorher vollständig lesen, Schreiben geht auf eigene Gefahr.

## [Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)

[`guide/index.html`](guide/index.html) · 7,7 MB · Ablauf, Filter und Begriffe nachschlagen

Simple Tuning, Advanced Tuning, Build-Guide, 95 Glossarbegriffe und der Sbang-Ablauf in
sechs Schritten. Werte und Tabellen richten sich nach dem eingestellten Copterprofil.

Die Verweise im Text führen absichtlich nach außen und brauchen Internet. Der Inhalt selbst
braucht es nicht. Quellen und Lizenzangaben bleiben im Dokument stehen.

## [Presets](https://yngwierfpv.github.io/flowstate-fpv-tuner/presets/)

[`presets/index.html`](presets/index.html) · 234 KB · Schalter, Beeper, OSD, Raten und Anpassungen als CLI

Sammelt die Bereiche, die man gefahrlos weitergeben kann: Schalterbelegung, Beeper,
OSD-Profile, Anpassungen und Raten. Am Ende steht ein CLI-Block mit `save`.

- Prüfung vor dem Schreiben, offene oder widersprüchliche Angaben werden einzeln genannt
- Kopieren, als Datei sichern oder über Web Serial in die Konsole schreiben
- Mehrere Modelle getrennt, jedes mit eigenem Stand
- Copter aus dem Hangar übernehmen: Name, Größe und Flight Controller kommen von dort
- PID, Filter und Motoren kommen nicht vor; dafür ist der Tuner da
- Deutsch, Englisch und Spanisch

## [OSD](https://yngwierfpv.github.io/flowstate-fpv-tuner/osd/)

[`osd/index.html`](osd/index.html) · 4,6 MB · Fonts, Startlogo und Layout für das Betaflight-OSD

Werkbank für die MAX7456-Zeichensätze des Flight Controllers. Die Arbeitsfläche bleibt
absichtlich hart gepixelt: 12×18 mit zwei Bit, damit die Fonts so aussehen wie im OSD.

- Über 300 Fonts mit Suche und Gruppenfilter, eigene `.mcm` lassen sich einlesen und bleiben im Browser
- Pack aus Basis-Font und einzelnen Bereichen, Startlogo inklusive
- Startlogo zeichnen oder ein Bild umrechnen, Export als BMP und im Font
- OSD-Layout als Raster mit Ziehen, Rasterfang und CLI-Ausgabe
- Deutsch, Englisch und Spanisch

---

## Öffnen und herunterladen

Herunterladen ist freiwillig. Die Programme laufen auch direkt auf der Übersichtsseite, im
Rahmen unter der Kopfzeile. Die Seite selbst kommt aus dem Netz, ohne Verbindung laufen die
Programme nur aus dem entpackten Paket.

Was auf der Seite angelegt wird, liegt im Browserspeicher dieser Adresse. Das Paket führt seinen
eigenen Speicher, die Liste aus der Übersicht ist dort nicht drin. Über `file://` kann der
Browser den Speicher sperren; dann gelten Änderungen nur für die laufende Sitzung.

Direkt im Browser: [Übersicht](https://yngwierfpv.github.io/flowstate-fpv-tuner/),
[Hangar](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/),
[Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/),
[Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/),
[Presets](https://yngwierfpv.github.io/flowstate-fpv-tuner/presets/),
[OSD](https://yngwierfpv.github.io/flowstate-fpv-tuner/osd/).

*Alles herunterladen* auf der Startseite packt ein ZIP mit allem in einem Ordner
`FlowState-FPV`: die Startseite, alle Programme, `README.md`, `README.html`, `LICENSE`
und `LIESMICH.txt`. Dasselbe Paket liegt als `FlowState-FPV-mit-Hub.zip` an jedem
[Release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Mit Hub
herunterladen* in einer Versionszeile packt denselben Inhalt und nennt das Programm im
Dateinamen. Das ZIP entsteht bei jedem Klick neu, `README.html` wird dabei aus `README.md`
erzeugt.

Im Ordner liegt keine Datei namens `index.html`. Die Namen sagen, was läuft:

| Datei | Programm |
|---|---|
| `FlowState-FPV.html` | Übersicht, mit der alle Programme starten |
| `hangar/Hangar.html` | Hangar |
| `tuner/Tuner.html` | Tuner |
| `guide/Guide.html` | Guide |
| `presets/Presets.html` | Presets |
| `osd/OSD.html` | OSD |

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

Die eigenen Daten bleiben dabei: Copter-Liste, Bilder, Logs und Fonts liegen im Speicher des
Browsers, nicht in den HTML-Dateien. Wer die neue Fassung im selben Ordner über die alte
legt, behält beides, eine Sicherung ist dafür nicht nötig. Nur wenn der Ordner wandert, vorher
exportieren: im Hangar als JSON, im Tuner Plan und Manifest. Über GitHub Pages ist ohnehin immer der letzte
Stand zu sehen, dort gibt es nichts zu ersetzen.

## Sprachen

| Sprache | Stand |
|---|---|
| Deutsch | vollständig integriert, in der Übersicht und in allen Programmen |
| Englisch | vollständig integriert, in der Übersicht und in allen Programmen |
| Spanisch | überall wählbar, nicht geprüft |

Spanisch ist übersetzt, aber in keinem Bereich durchgesehen; offene Stellen erscheinen
auf Englisch.

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
entscheidet die Browsersprache, sonst Deutsch. Fehlt ein einzelner Text in einer
Übersetzung, erscheint er auf Englisch.

## Versionen

Getrennte Reihen je Programm, jede mit eigenem Release.

| | [Hangar](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.0-beta.5) | [Tuner](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.8) | [Guide](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.22-es) | [Presets](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/presets-v0.2.0-beta.7) | [OSD](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/osd-v0.1.0-beta.7) |
|---|---|---|---|---|---|
| Version | `v1.0.0-beta.5` | `v4.8-alpha.8` | `v1.0.2-beta.22-es` | `v0.2.0-beta.7` | `v0.1.0-beta.7` |
| Kanal | Beta | Alpha | Beta | Beta | Beta |
| Datum | 20.11.2026 | 20.11.2026 | 20.11.2026 | 20.11.2026 | 20.11.2026 |
| Größe (Bytes) | 155.601 | 501.695 | 7.700.364 | 233.778 | 4.551.744 |
| SHA-256 | `3ad9bec80430da0308da2539ee88507e794e83e4724526ddd8235437c16a29f5` | `898e8d39cd31ffcf615c761c769932ee076ee6ddd6b829f0c8b1fb929cd98fbc` | `a9052b9bd280b919cdc1d7abe64d698a69dc4ddbaad8705c6ee731a924b1278a` | `a9061a066d33f6c94794cd951d9dac513c2d4b67188411628b00b260f4e40035` | `f5380a8fec95527820e818b2fac791573e0b52c7aad8b61a5c490cbbe27ee5f0` |

Nachrechnen: `sha256sum hangar/index.html`, `sha256sum tuner/index.html`,
`sha256sum guide/index.html`, `sha256sum presets/index.html`, `sha256sum osd/index.html`,
jeweils gefolgt vom erwarteten Wert aus der Tabelle.

Presets und OSD führen den Programmnamen im Tag (`presets-v0.2.0-beta.7`,
`osd-v0.1.0-beta.7`), weil `v0.1.0-beta.1` schon von einem früheren Hangar-Stand belegt ist.
Der Hangar trägt sein Release ohne Vorsatz: `v1.0.0-beta.5`. Die alten Tags bleiben,
wie sie sind.

Gemeinsam geändert: die Farbe reist als `?theme=ocean|sand|drakn` in der Adresse mit, der
Umschalter steht überall in der Reihenfolge Hangar, Tuner, Guide, Presets, OSD,
und ein offenes Programm zieht nach, sobald in der Übersicht eine andere Farbe oder Sprache
gewählt wird.

Hangar und Presets greifen auf dieselben Daten zu. Im Preset-Bauer steht die Copter-Liste des
Hangars zur Auswahl; ein übernommener Copter gibt Name, Größe und Flight Controller weiter und
lässt seine Kennung am Modell, damit die Zuordnung erhalten bleibt. In die andere Richtung
geht es über die Datei: der Preset-Bauer schreibt `flowstate-preset-<name>.txt`, der Hangar
liest Preset-Dateien aus seinem Ordner und hängt ihre Zeilen an den CLI-Diff des Modells.
Kommentare und Leerzeilen fallen dabei weg, doppelte Zeilen bleiben draußen. Der Hangar
führt Sicherungen, er schreibt keine Werte.

Der Farbstreifen links am Kopf ist in Hangar, Presets und OSD eine Hintergrundlage des Kopfs
statt eines eigenen Elements. Die Eckrundung schneidet ihn damit exakt ab, in allen drei
Farbschemata.

## Lizenz

Unveränderte Weitergabe ist erlaubt: vollständig, mit Lizenz und Verweis auf die
Originalquelle. Bearbeitungen, Kürzungen, Übersetzungen und eigene Fassungen sind nicht
gestattet. Damit ist es keine Open-Source-Lizenz. Der Grund ist der Schreibzugriff des
Tuners: ungeprüfte Abwandlungen sollen nicht als fertige Fassung im Umlauf sein. Volltext
auf Deutsch und Englisch in [`LICENSE`](LICENSE).

---

## English

Keep the quad list, read blackbox logs, look up values, build presets, edit OSD fonts. It runs
in the browser, without an install and without an account, and once loaded it works offline.

| Program | File | Size | Purpose |
|---|---|---|---|
| **[Hangar](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** | [`hangar/index.html`](hangar/index.html) | 155 KB | Keep the quad list, read preset files, read the flight controller, show the UART map |
| **[Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 502 KB | Read logs, derive filter and PID values |
| **[Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7.7 MB | Look up workflow, filters and terms |
| **[Presets](https://yngwierfpv.github.io/flowstate-fpv-tuner/presets/)** | [`presets/index.html`](presets/index.html) | 234 KB | Switches, beeper, OSD, rates and adjustments as CLI |
| **[OSD](https://yngwierfpv.github.io/flowstate-fpv-tuner/osd/)** | [`osd/index.html`](osd/index.html) | 4.6 MB | Fonts, startup logo and layout for the Betaflight OSD |

Hangar and Presets share their data. The preset builder lists the hangar's copters and takes
name, size and flight controller from one; the id stays on the model so the link is kept. Back
the other way it goes through the file: the preset builder writes
`flowstate-preset-<name>.txt`, the hangar reads preset files from its folder and appends their
lines to the model's CLI diff. Comments and empty lines are dropped, duplicates stay out. The
hangar keeps backups, it does not write values. In every tool the colour stripe on the left edge of the
header is a background layer of the header itself, so the rounded corner cuts it exactly.

Both new tools end in a file you hand to the flight controller, not in a screen you read.
Presets builds a CLI block that ends with `save`; the OSD writes `.mcm` fonts and BMP
logos. Neither touches PID, filters or motors.

Downloading is optional. The programs also run right on the overview page, in the frame
below the header. The page itself comes from the network; without a connection the programs
only run from the unpacked package.

What you create on the page lives in the browser storage of that address. The package keeps its
own storage, the list from the overview is not in it. Over `file://` the browser may block
storage; changes then only last for the running session.

*Download everything* on the overview page packs a ZIP with everything in one folder
`FlowState-FPV`: the overview page, every program, `README.md`, `README.html`, `LICENSE`
and `LIESMICH.txt`. The same package sits as `FlowState-FPV-mit-Hub.zip` on every
[release](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases). *Download with hub* in
a release row packs the same content and names the program in the file name.

No file in the folder is called `index.html`. The names say what runs:

| File | Program |
|---|---|
| `FlowState-FPV.html` | Overview, the way in to every program |
| `hangar/Hangar.html` | Hangar |
| `tuner/Tuner.html` | Tuner |
| `guide/Guide.html` | Guide |
| `presets/Presets.html` | Presets |
| `osd/OSD.html` | OSD |

Unzip it and open `FlowState-FPV.html`. Each program also opens on its own, without the
overview, and can be kept as a bookmark. Over `file://` the programs start from the overview
in their own tab, because browsers block the frame there. Over a local server they sit in the
frame below the header. The check for newer builds works the same either way.

Spanish is selectable in all programs and on the overview page, but reviewed nowhere.

Language lives in the address: `?lang=de`, `?lang=en` or `?lang=es`. Without it the browser
language decides, otherwise German. A missing string falls back to English.

To check for a newer release, use the arrow button in the header of the overview page. It
reads the published `assets/data/versions.json` and lists every program row that is ahead.
Without a connection it says so and nothing else. The check runs on click only, nothing is
requested in the background.

Your own data stays: the quad list, pictures, logs and fonts live in the browser's storage,
not in the HTML files. Dropping a new version over the old one in the same folder keeps both,
no backup needed. Only if the folder moves, export first: JSON in the Hangar, plan and
manifest in the tuner. Over
GitHub Pages you always get the latest state, so there is nothing to replace.

The tuner is an alpha: writing over Web Serial is untested on real hardware and in flight,
and Web Serial exists in Chrome, Edge and Opera on desktop. Read the plan before writing.
The licence allows unmodified redistribution only, see [`LICENSE`](LICENSE).
