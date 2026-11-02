# [FlowState FPV](https://yngwierfpv.github.io/flowstate-fpv-tuner/)

Drei HTML-Programme für Betaflight. Jedes ist **eine einzelne Datei**, die im Browser
läuft und weder Installation noch Konto noch Internetverbindung braucht.

| Programm | Datei | Größe | Aufgabe |
|---|---|---|---|
| **[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** | [`hangar/index.html`](hangar/index.html) | 65 KB | Copter-Liste führen und als Tabelle ausgeben |
| **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 497 KB | Logs messen, Werte ableiten, CLI-Plan schreiben |
| **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7,7 MB | Erklären, nachschlagen, Ablauf begleiten |

Größen in KB und MB zur Basis 1000; die genauen Byte-Werte stehen unter *Versionen*.

Der Einstieg liegt in [`index.html`](index.html): Programmübersicht, Versionen mit
Prüfsummen und Antworten auf die häufigsten Fragen. Diese Seite ist zweisprachig
(Deutsch/Englisch), und im Kopf der Seite schaltet ein Streifen zwischen HangarDeck, Tuner
und Guide um, in dieser Reihenfolge. Die gewählte App öffnet sich direkt darunter im
Rahmen, ohne Seitenwechsel; darüber liegen zwei Schaltflächen für die Rückkehr zur
Übersicht und für ein eigenes Browserfenster. Die Adressen `#/hangar`, `#/tuner` und
`#/guide` lassen sich direkt aufrufen und weitergeben.

Im Kopf stehen Sprache und Farben als Felder nebeneinander, ohne aufklappende Liste:
DE und EN, daneben die drei Paletten Ozean, Leinen und Dunkelrot als Farbstreifen. Beide
Wahlen gelten auch für das Programm, das du danach öffnest. Sprache und Farbe stehen in
der Adresse (`?lang=`, `?theme=`), die Farbe zusätzlich in `flowstate-theme`. Das trägt
auch dann, wenn ein Browser den Speicher zwischen zwei Dateien nicht teilt, etwa bei
`file://`. Wechselst du die Farbe oder die Sprache bei offenem Programm, lädt der Rahmen
einmal neu, damit das Programm mitzieht.

In den Programmen selbst stehen dieselben Wahlen als Reihen im Kopf: DE, EN und ES
nebeneinander, daneben die drei Farbstreifen. Kein aufklappendes Feld, damit im Rahmen
unter der Kopfzeile nichts abgeschnitten wird.

Alle drei Programme bringen dieselben drei Paletten mit und lesen sie aus demselben
Eintrag. Wählst du im Programm selbst eine Farbe, schreibt es sie zurück, und die
Übersichtsseite zeigt beim nächsten Aufruf denselben Stand. Läuft neben dem Programm ein
zweites Fenster desselben Browsers, zieht die Farbe auch dort nach.

| Palette | Fünf Töne |
|---|---|
| Ozean | `#093840` `#155b5b` `#1e746b` `#258c71` `#2ca387` |
| Leinen | `#c9e0f0` `#f4f6f5` `#c4b69c` `#f0e6cb` `#ecbda9` |
| Dunkelrot | `#140a25` `#390c2b` `#5a152a` `#8e1e2c` `#d82828` |

Tuner und Guide gibt es auf Deutsch, Englisch und Spanisch, HangarDeck Lite auf Deutsch
und Englisch. Spanisch ist im Tuner und im Guide als ungeprüfte Vorschau gekennzeichnet.

Wer in der Versionsliste auf *Mit Hub herunterladen* klickt, bekommt die Übersichtsseite als
Paket: Hub, Styles, Skripte und alle drei Programme in einem ZIP. Entpackt und per
Doppelklick auf `index.html` geöffnet, arbeitet der Umschalter wie auf der
veröffentlichten Seite.

---

## [HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)

HangarDeck Lite führt eine Copter-Liste. Pro Zeile stehen Name, Größe, Spannung, KV, ESC,
Props und Status; wer mehr festhalten will, öffnet *Mehr Details* und trägt Flight
Controller, Akku, Abfluggewicht und Notiz nach. Name und Größe reichen zum Speichern,
alles andere bleibt leer, bis es gebraucht wird.

### Felder

| Feld | Pflicht | Anmerkung |
|---|---|---|
| Name | ja | frei wählbar |
| Größe | ja | feste Liste von 65 mm Whoop bis 10 Zoll |
| Status | ja | Flugbereit, In Arbeit, Defekt |
| Spannung | nein | 1S bis 12S, mit Volt-Anzeige bei 3,7 V pro Zelle |
| Motor-KV | nein | Zahl |
| ESC | nein | Dauerstrom in Ampere |
| Props | nein | frei, etwa `5.1x4.6x3` |
| Flight Controller | nein | nur unter *Mehr Details* |
| Akku | nein | mAh, nur unter *Mehr Details* |
| Abfluggewicht | nein | Gramm, nur unter *Mehr Details* |
| Notiz | nein | nur unter *Mehr Details* |

### Export und Abgleich

| Ausgabe | Inhalt |
|---|---|
| PDF-Tabelle | A4 quer, Kopfzeile auf jeder Seite, elf Spalten |
| CSV | Semikolon und BOM, öffnet in Excel ohne Import-Dialog |
| Drucken | Papier oder *Als PDF speichern* über den Browser |
| JSON | Sicherung und Import, Grundlage für den Abgleich |

Für den Abgleich trägst du im Kopf unter *GitHub* das eigene Repository ein, dazu Branch,
Pfad und ein Token mit Schreibrecht auf die Inhalte. Gelesen wird auch ohne Token über die
Adressen von GitHub Pages. Zusammengeführt wird pro Copter über den Zeitstempel,
Löschungen wandern als Grabstein mit.

### Grenzen

- **Beta:** Der Abgleich ist eingerichtet, an vielen Coptern und mit mehreren Geräten aber
  nicht durchgespielt.
- Bewusst klein: keine FC-Bibliothek, kein Auslesen über Web Serial, keine Flottenstatistik.
- Die Größe ist eine feste Liste, kein Freitext. Für Sondergrößen die nächste Klasse nehmen
  und die Notiz nutzen.
- Daten liegen im `localStorage` dieses Browsers, mit eingerichtetem Abgleich zusätzlich im
  eigenen Repository. Kein Konto, keine Telemetrie.

---

## [FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)

Der Tuner liest Blackbox- und Dataflash-Logs, leitet daraus Filter- und PID-Werte ab
und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial, und
zwar erst nach einer vollständigen Sicherung und deiner Bestätigung.

**Alpha:** Der Schreibpfad ist an echter Hardware noch nicht erprobt. Der Plan lässt
sich vollständig lesen und prüfen, ohne dass etwas geschrieben wird. Das ist der
sichere Weg für den ersten Durchlauf. Schreiben geschieht auf eigene Gefahr; es gilt
der Haftungsausschluss in [`LICENSE`](LICENSE), Abschnitt 6.

### Der Ablauf in sechs Phasen

| # | Phase | Inhalt |
|---|---|---|
| 1 | Setup | Verbinden, auslesen, Backup sichern, Zielprofil schützen |
| 2 | Filter | Filterlog prüfen, Spektrum auswerten, Filter übernehmen |
| 3 | P/D neutral | Tracking-Log auswerten, neutrale P/D-Basis ohne Charakter-Bias |
| 4 | Master | Fluggefühl über Stufen vergleichen, Thermik beobachten |
| 5 | FF / I / D-Max | Abschluss einstellen, Gesamtplan schreiben |
| 6 | Archiv | Logs, Plan, Manifest und Rohdaten exportieren |

Jede Phase schließt ab, bevor die nächste freigeschaltet wird.

### Sicherheits-Gates

Unabhängige Prüfungen blockieren Schreibvorgänge. Sie bleiben aktiv, auch wenn die
optionale Checkliste ausgeschaltet ist.

- **Backup** — ein vollständiges `diff all` muss vorliegen, sonst springt der Ablauf
  zurück in Phase 1.
- **Firmware** — Schreiben nur mit Betaflight 4.5 oder neuer.
- **Zielprofil** — nur das gewählte PID-Profil wird verändert, die übrigen bleiben
  unangetastet.
- **Filterlog** — das aktive Log muss die Qualitätsprüfung bestehen; ein Override gilt
  nur für genau dieses Log und endet mit der Verbindung.

Übersprungene Sicherungen sind im Ablauf sichtbar, nicht versteckt.

### Logs

Importierte Logs behalten ihre Herkunft. P/D-, Master- und FF/I-Werte stammen nur aus
Metadaten oder benannten Dateien; fehlt ein Wert, steht dort `UNBEKANNT`. Mehrere
Flüge in einer Datei werden als getrennte Segmente mit ihren beobachteten Bereichen
geführt.

### Exporte

| Ausgabe | Inhalt |
|---|---|
| Plan (.txt) | der vollständige CLI-Plan zum Nachlesen |
| Manifest (.json) | Messwerte, Entscheidungen, Zuordnung der Logs |
| Roh-Logs (.zip) | alle importierten Dateien gebündelt |
| Blackbox (.bbl) | Log direkt aus dem Flight Controller |

### Grenzen

- Tuning ersetzt keine mechanische Kontrolle. Es repariert keine verbogenen Wellen,
  Lager, Props, Lötstellen oder ESC-Fehler.
- Props ab für alle Arbeiten am USB-verbundenen Copter.
- Bei heißen Motoren, Desync, unklarer Vibration oder nach einem Crash nicht
  weiter automatisch tunen.
- Verbindungstest mit echtem Flight Controller und Flugtest stehen aus.
- Nutzung auf eigene Gefahr: keine Gewähr für Funktion oder Ergebnis, Haftung
  ausgeschlossen soweit gesetzlich zulässig (siehe [`LICENSE`](LICENSE), Abschnitt 6).

---

## [FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)

Der Guide führt vom ersten Build bis zum Feintuning. Er erklärt Begriffe, zeigt
Tabellen und begleitet den Ablauf Schritt für Schritt.

### Bereiche

| Bereich | Inhalt |
|---|---|
| Simple Tuning | Betaflight vorbereiten, Logs lesen, Profil abstimmen |
| Advanced Tuning | Advanced Tune, Sbang oder einzelne Einstellungen |
| Technik & Referenz | Filterbegriffe, Werte, ELRS- und Crossfire-Funkstrecken |
| Build-Guide | mechanisch und elektrisch saubere Basis vor dem Erstflug |
| Glossar | 95 Begriffe, aufrufbar direkt aus dem Text |
| Quellen & Links | Originalanleitungen, Dokumentation, Werkzeuge |

### Profil

Coptergröße, Frame, Gyro-/PID-Taktrate, Betaflight-Version und ESC-Firmware steuern,
welche Werte und Tabellen erscheinen. Das Profil bleibt im Browser gespeichert und
bestimmt, welche Kapitel und Tabellen der Guide zeigt.

### Grenzen

- Spanisch ist eine ungeprüfte Vorschau, nicht überprüfte Stellen erscheinen englisch.
- Betaflight- und ESC-Werte bleiben firmware- und hardwareabhängig.
- Eine große Datei: der erste Aufruf dauert einen Moment, danach liegt sie im Cache.
- Sbang bleibt inhaltlich und im Ablauf unverändert.
- Quellen- und Lizenzangaben im Dokument bleiben erhalten.

---

## Zusammen

Der Guide erklärt das Tuning, der Tuner rechnet die Werte dafür aus.

```
Guide, Profil wählen        welches Setup, welche Erwartung
Guide, Build-Guide prüfen   ist die Mechanik tuning-fähig?
Tuner, Setup                verbinden, auslesen, sichern, Profil schützen
Tuner, Filter → P/D → Master → FF/I
Tuner, Archiv               Plan, Manifest und Logs sichern
Guide, Technik & Referenz   Werte nachlesen und dokumentieren
HangarDeck Lite, Liste      festhalten, was verbaut ist und wann gewartet wurde
```

---

## Öffnen

Alle drei Programme laufen direkt im Browser. Entweder über die veröffentlichte Adresse,
über den Rahmen der Übersichtsseite oder als heruntergeladene Datei per Doppelklick.
Alle Wege zeigen dieselbe Anwendung.

Veröffentlicht: [HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/),
[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/) und
[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/). Die Übersicht liegt in [index.html](https://yngwierfpv.github.io/flowstate-fpv-tuner/index.html).

### Herunterladen: Programm plus Hub

Der Knopf *Mit Hub herunterladen* in der Versionsliste packt im Browser ein ZIP mit der
Übersichtsseite, ihren Styles und Skripten sowie allen drei Programmen. Der Dateiname
nennt das Programm, für das geklickt wurde, und seine Version, zum Beispiel
`FlowState-Tuner-v4.8-alpha.4-mit-Hub.zip`. Der Inhalt ist in jedem Fall derselbe.

Entpackt liegt der Hub als `index.html` daneben, die Programme in `guide/`, `tuner/` und
`hangar/`. Ein Doppelklick auf die `index.html` öffnet die Übersicht mit Umschalter. Über
`file://` öffnen die Programme in einem eigenen Tab, weil Browser dort den Rahmen
blockieren; über einen lokalen Server oder GitHub Pages erscheinen sie im Rahmen.

Das ZIP wird bei jedem Klick neu gebaut, damit im Repository keine zweite Kopie derselben
Bytes liegt. Es ist rund 8,6 MB groß, der größte Teil davon ist der Guide.

### Warum die Dateien `index.html` heißen

Die Adressen `/tuner/`, `/guide/` und `/hangar/` funktionieren nur, weil im jeweiligen
Ordner eine `index.html` liegt. Genau diese Datei liefert ein Webserver für ein
Verzeichnis aus. Ein Name mit Versionsnummer würde die Adresse brechen: `/tuner/` wäre
leer, erreichbar wäre nur noch ein langer Pfad wie
`/tuner/FlowState-Tuner-v4.8-alpha.4.html`.

Damit beim Speichern trotzdem ein sprechender Name entsteht, trägt ihn das ZIP: Programm
und Version stehen im Dateinamen, die Ordner darin bleiben technisch benannt. Wer direkt
über die Rohadresse des Repositories lädt, bekommt `index.html` und benennt die Datei beim
Speichern selbst um. Der Inhalt ist identisch, die Prüfsumme bleibt dieselbe.

| | Guide | HangarDeck Lite | Tuner ohne FC | Tuner mit FC |
|---|---|---|---|---|
| Chrome, Edge, Opera (Desktop) | ✓ | ✓ | ✓ | ✓ |
| Firefox, Safari | ✓ | ✓ | ✓ | — |
| Mobil | ✓ | ✓ | ✓ | — |

Für die Verbindung zum Flight Controller braucht der Tuner Web Serial. Das bringen
Chrome, Edge und Opera auf dem Desktop mit. Andere Chromium-Browser sind möglich, aber
nicht erprobt: Brave hat es abgeschaltet und braucht
`brave://flags/#brave-web-serial-api`, Vivaldi hatte Versionen ohne Unterstützung.
Firefox und Safari haben es nicht.

Chrome für Android kann Web Serial seit Version 148 für einen Teil der Geräte. Als
verlässlicher Weg ist das nicht erprobt, deshalb steht Mobil in der Tabelle auf „—".
Die Log-Analyse funktioniert in jedem Browser, dafür braucht es kein Web Serial.

---

## Sprachen

| Sprache | Stand | Geprüft | HangarDeck Lite | FlowState Tuner | FPV Guide |
|---|---|---|---|---|---|
| **Deutsch** | vollständig integriert | ja | [HangarDeck öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/) | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=de) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=de) |
| **English** | vollständig integriert | ja | [HangarDeck öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/?lang=en) | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=en) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=en) |
| **Español** | Vorschau, nicht geprüft | nein | nicht angelegt | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=es) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=es) |

Deutsch und Englisch sind in Tuner und Guide vollständig: Oberfläche, Meldungen, Glossar
und Kapitel. Spanisch ist dort übersetzt und auswählbar, aber in keinem Bereich geprüft.
Das Programm zeigt deshalb einen dauerhaften Hinweis; nicht überprüfte Stellen fallen auf
Englisch zurück. HangarDeck Lite liegt auf Deutsch und Englisch vor; Spanisch ist dort
nicht angelegt.

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
übernimmt das Programm die Browsersprache, wenn sie eine dieser drei ist. Bei jeder
anderen Sprache startet es auf Deutsch.

Unabhängig davon gilt innerhalb einer Sprache: Fehlt ein einzelner Text, erscheint er
auf Englisch. Deutsch ist also der Startwert für unbekannte Browsersprachen, Englisch
füllt die Lücken in einer vorhandenen Übersetzung.

---

## Versionen

**Drei Programme, drei Versionsreihen.** HangarDeck, Tuner und Guide werden getrennt
nummeriert und getrennt veröffentlicht. Jede Reihe hat ihr eigenes Release. Die Zahlen
sagen nichts übereinander aus: Der Tuner steht bei `4.8`, der Guide bei `1.0.2`,
HangarDeck Lite bei `0.4.0`, weil sie verschieden weit sind, nicht weil eines neuer wäre. Ein
neuer Guide-Stand lässt die anderen unberührt, und umgekehrt.

| | [HangarDeck Lite](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.4.0-beta.3) | [FlowState Tuner](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4) | [FPV Guide](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.12-es) |
|---|---|---|---|
| Version | [`v0.4.0-beta.3`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.4.0-beta.3) | [`v4.8-alpha.4`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4) | [`v1.0.2-beta.12-es`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.12-es) |
| Kanal | Beta | Alpha | Beta |
| Datum | 02.11.2026 | 02.11.2026 | 02.11.2026 |
| Größe (Bytes) | 65.431 | 496.882 | 7.682.974 |
| SHA-256 | `42ba97d2deeeb868c3765fd33c081ae418154fbd9608ab0b822141dbe48f8241` | `ddb1d06a840d99e4c19d823c6d7201017f0ee4da33cebe91a395e9f19fdd5e8a` | `42c84cfaa3af61248e4e91434d6c43f35be040fd330caa3ba8576673731ff178` |

Die Dateien laden keine externen Skripte, Schriften oder Bilder. Verweise im Guide
führen absichtlich nach außen: Sie öffnen sich nur mit Internetverbindung, der Inhalt
selbst braucht sie nicht.

Zum Nachrechnen: Befehl, darunter der erwartete Wert.

```
sha256sum hangar/index.html
42ba97d2deeeb868c3765fd33c081ae418154fbd9608ab0b822141dbe48f8241

sha256sum tuner/index.html
ddb1d06a840d99e4c19d823c6d7201017f0ee4da33cebe91a395e9f19fdd5e8a

sha256sum guide/index.html
42c84cfaa3af61248e4e91434d6c43f35be040fd330caa3ba8576673731ff178
```

Eigene Release-Seite je Programm:
[HangarDeck Lite `v0.4.0-beta.3`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.4.0-beta.3) ·
[Tuner `v4.8-alpha.4`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.4) ·
[Guide `v1.0.2-beta.12-es`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.12-es)

### Was diese drei Stände geändert haben

Die Reihenfolge ist überall dieselbe: HangarDeck Lite, Tuner, Guide. Sie steht so im
Umschalter der Übersichtsseite, in den Programmkarten, in den Abschnitten dieser Datei und
in der Versionsliste.

Die Farbe reist jetzt auf zwei Wegen: als Eintrag `flowstate-theme` und als `?theme=` in
der Adresse. Der zweite Weg greift auch dort, wo ein Browser den Speicher zwischen zwei
Dateien nicht teilt, etwa bei `file://`. Ältere Werte `dark`, `light` und `cream` werden
weiter gelesen.

- **HangarDeck Lite:** liest die Palette aus Adresse und Speicher, folgt einer Farbwahl in
  einem anderen Fenster und steht in der Übersicht an erster Stelle. Liste, Exporte und
  Abgleich sind unverändert.
- **Tuner:** übernimmt dieselbe Farbquelle und folgt einem Wechsel im zweiten Fenster,
  ohne neu zu laden. Die sechs Phasen und der CLI-Plan sind unverändert, an echter
  Hardware weiterhin nicht getestet.
- **Guide:** übernimmt dieselbe Farbquelle. Inhalt, Werte, Quellen und der Sbang-Ablauf
  sind unverändert, Spanisch bleibt ungeprüfte Vorschau.

---

## English

Three single-file HTML programs for Betaflight, running entirely in the browser.

- **[HangarDeck Lite](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** — keeps one quad list with size,
  cells, KV, ESC, props and status, exports it as a PDF table, CSV, print or JSON, and
  syncs it with your own repository.
- **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** — reads Blackbox and Dataflash logs, derives
  filter and PID values, shows every step as a readable CLI plan and writes it over
  Web Serial after a backup and explicit confirmation. Six phases: setup, filter,
  neutral P/D, master, FF/I/D-Max, archive.
- **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** — explains the workflow from the first build to fine
  tuning, with 95 glossary terms and reference tables.

Tuner and guide ship in German, English and Spanish: ?lang=de, ?lang=en or ?lang=es.
Spanish is translated but verified in no area. The program shows a permanent notice and
falls back to English where text is unrevised. HangarDeck Lite ships in German and
English; Spanish is not built there.

Two separate mechanisms: an unknown browser language starts the program in German,
while a missing individual string inside a translation appears in English.

None needs an install, an account or an internet connection. No file loads external
scripts, fonts or images; the guide's links point outward on purpose and only open with
a connection.

The overview page embeds the programs below its header and keeps the address in the form
of `#/hangar`, `#/tuner` or `#/guide`, in that order. *Download with hub* builds a ZIP in
the browser that contains the overview page plus all three programs; unzip it and open
`index.html`.

Language and colour sit side by side in the header, without a drop-down: DE and EN plus
three palette strips. Both choices carry into the program you open next. The language
rides in the address (`?lang=`) and the colour in `?theme=`, the colour is also stored in
`flowstate-theme`; older values `dark`, `light` and `cream` are still read. Passing the
colour in the address keeps it working where a browser does not share storage between two
files, as with `file://`. Inside the programs the same choices sit side by side: DE, EN
and ES, plus the three colour strips, without a drop-down that the frame could cut off.

All three programs ship the same three palettes and read the same entry. A choice made
inside a program is written back, so the overview page shows it on the next visit. A
second window of the same browser follows a colour change without a reload.

| Palette | Five tones |
|---|---|
| Ocean | `#093840` `#155b5b` `#1e746b` `#258c71` `#2ca387` |
| Sand | `#c9e0f0` `#f4f6f5` `#c4b69c` `#f0e6cb` `#ecbda9` |
| Drakn | `#140a25` `#390c2b` `#5a152a` `#8e1e2c` `#d82828` |

The tuner is an alpha: its write path has not been tested on real hardware yet. The plan
can be read and checked in full without writing anything. Writing is at your own risk;
the disclaimer and limitation of liability in [`LICENSE`](LICENSE), section 6, apply.

For the flight-controller connection it needs Web Serial, which Chrome, Edge and Opera
bring on desktop. Brave ships it disabled (`brave://flags/#brave-web-serial-api`);
Firefox and Safari lack it.
Chrome for Android has partial support since version 148, not verified here.

Tuning does not replace mechanical inspection: remove props for bench work and stop on
hot motors, desyncs or unclear mechanics.

The licence is source-available, not open source: unmodified redistribution with the
licence and a link to the source is allowed, modifications are not. The reason is the
write path: the tuner talks to the flight controller over Web Serial, so the
restriction protects the version history from unchecked forks carrying potentially
dangerous changes.

---

## Lizenz

Die Programme dürfen unverändert weitergegeben werden: vollständig, inklusive Lizenz und
unter Verweis auf die Originalquelle. Bearbeitungen, Kürzungen, Übersetzungen und
eigene Fassungen sind nicht gestattet.

Der Quelltext ist öffentlich einsehbar. Das macht die Lizenz aber nicht zu einer
Open-Source-Lizenz: Die Open Source Definition verlangt, dass Bearbeitungen erlaubt
sind; hier sind sie es ausdrücklich nicht.

Der Grund liegt im Schreibzugriff: Der Tuner greift über Web Serial direkt auf den
Flight Controller zu. Die Einschränkung schützt den Versionsverlauf: Ungeprüfte Forks
oder eigenmächtige Änderungen sollen nicht als fertige Fassung gelten, die niemand
getestet hat. Es handelt sich um eine „Source-available“-Lizenz ohne
Bearbeitungsrecht.

Der vollständige Text steht in [`LICENSE`](LICENSE), auf Deutsch und Englisch.
