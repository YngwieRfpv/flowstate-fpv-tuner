# [FlowState FPV](https://yngwierfpv.github.io/flowstate-fpv-tuner/)

Drei HTML-Programme für Betaflight. Jedes ist **eine einzelne Datei**, die im Browser
läuft und weder Installation noch Konto noch Internetverbindung braucht.

| Programm | Datei | Größe | Aufgabe |
|---|---|---|---|
| **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 497 KB | Logs messen, Werte ableiten, CLI-Plan schreiben |
| **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7,7 MB | Erklären, nachschlagen, Ablauf begleiten |
| **[HangarDeck](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** | [`hangar/index.html`](hangar/index.html) | 112 KB | Flotte und Flight Controller verwalten |

Größen in KB und MB zur Basis 1000; die genauen Byte-Werte stehen unter *Versionen*.

Der Einstieg liegt in [`index.html`](index.html): Programmübersicht, Versionen mit
Prüfsummen und Antworten auf die häufigsten Fragen. Diese Seite ist zweisprachig
(Deutsch/Englisch), und im Kopf der Seite schaltet ein Streifen zwischen Guide, Autotuner
und Hangar um. Die gewählte App öffnet sich direkt darunter im Rahmen, ohne Seitenwechsel;
darüber liegen zwei Schaltflächen für die Rückkehr zur Übersicht und für ein eigenes
Browserfenster. Die Adressen `#/guide`, `#/tuner` und `#/hangar` lassen sich direkt
aufrufen und weitergeben.

Im Kopf stehen Sprache und Farben als Felder nebeneinander, ohne aufklappende Liste:
DE und EN, daneben die drei Paletten Ozean, Leinen und Dunkelrot als Farbstreifen. Beide
Wahlen gelten auch für das Programm, das du danach öffnest. Die Sprache steht in der
Adresse (`?lang=`), die Farbe in `flowstate-theme`. Wechselst du die Farbe bei offenem
Programm, lädt der Rahmen einmal neu, damit das Programm mitzieht.

Wie weit die Farbe im Programm ankommt, hängt an dessen Paletten:

| Programm | Ozean | Leinen | Dunkelrot |
|---|---|---|---|
| FlowState Tuner | Ozean | Leinen | Dunkelrot |
| FPV Guide | Dunkel | Hell | Dunkel, weil der Guide kein Dunkelrot hat |
| HangarDeck | Akzent Cyan | Akzent Amber | Akzent Violett, die Palette bleibt dunkel |

Der Tuner schreibt seine eigene Farbwahl in denselben Eintrag zurück. Änderst du dort die
Farbe, steht sie beim nächsten Aufruf der Übersichtsseite auch dort.

Tuner und Guide gibt es auf Deutsch, Englisch und Spanisch, HangarDeck in dieser Fassung
auf Deutsch.

Wer in der Versionsliste auf *Mit Hub herunterladen* klickt, bekommt die Übersichtsseite als
Paket: Hub, Styles, Skripte und alle drei Programme in einem ZIP. Entpackt und per
Doppelklick auf `index.html` geöffnet, arbeitet der Umschalter wie auf der
veröffentlichten Seite.

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

## [HangarDeck](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)

HangarDeck führt die Flotte und die Stammdaten der Flight Controller: ein Datensatz pro
Copter mit Größe, Frame, FC, Firmware, Antrieb, Video- und Funkstrecke, dazu die
Zuletzt-Stände von Flug und Wartung. Die FC-Bibliothek hält Target, MCU, Gyro, UARTs und
Stromversorgung der Boards.

### Bereiche

| Bereich | Inhalt |
|---|---|
| Übersicht | Klassenverteilung, offene Hinweise, letzte Änderungen |
| Flotte | Copterkarten und Bestandsliste, Filter, Suche, Sortierung |
| FC-Bibliothek | Boards als Stammdaten, Startbestand mit Quelle |
| FC auslesen | Web Serial und MSP v1, oder Simulation als Probelauf |
| Import | `diff all`, `status` und `version` aus Betaflight oder INAV |
| Daten | JSON und CSV, Markdown-Bericht, Speicherübersicht |

### Grenzen

- **Beta:** Auslese an echter Hardware steht aus, der Ablauf ist mit Beispieldaten prüfbar.
- Die Oberfläche ist in dieser Fassung deutsch; Englisch ist noch nicht übersetzt.
- MSP v1 liefert Identität, Sensormaske und Motorkonfiguration, aber keinen Gyro-Chip.
  Dafür ist der CLI-Import vorgesehen.
- Alle Daten liegen im `localStorage` dieses Browsers und dieses Profils. Kein Sync,
  keine Konten, keine Telemetrie. Vor Browserwechsel oder Reinigung den JSON-Export nehmen.
- Der FC darf nicht gleichzeitig im Betaflight Configurator geöffnet sein, der COM-Port
  ist exklusiv.

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
HangarDeck, Flotte          festhalten, was verbaut ist und wann gewartet wurde
```

---

## Öffnen

Alle drei Programme laufen direkt im Browser. Entweder über die veröffentlichte Adresse,
über den Rahmen der Übersichtsseite oder als heruntergeladene Datei per Doppelklick.
Alle Wege zeigen dieselbe Anwendung.

Veröffentlicht: [FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/),
[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/) und
[HangarDeck](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/). Die Übersicht liegt in [index.html](https://yngwierfpv.github.io/flowstate-fpv-tuner/index.html).

### Herunterladen: Programm plus Hub

Der Knopf *Mit Hub herunterladen* in der Versionsliste packt im Browser ein ZIP mit der
Übersichtsseite, ihren Styles und Skripten sowie allen drei Programmen. Der Dateiname
nennt das Programm, für das geklickt wurde, und seine Version, zum Beispiel
`FlowState-Tuner-v4.8-alpha.2-mit-Hub.zip`. Der Inhalt ist in jedem Fall derselbe.

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
`/tuner/FlowState-Tuner-v4.8-alpha.2.html`.

Damit beim Speichern trotzdem ein sprechender Name entsteht, trägt ihn das ZIP: Programm
und Version stehen im Dateinamen, die Ordner darin bleiben technisch benannt. Wer direkt
über die Rohadresse des Repositories lädt, bekommt `index.html` und benennt die Datei beim
Speichern selbst um. Der Inhalt ist identisch, die Prüfsumme bleibt dieselbe.

| | Guide | HangarDeck | Tuner ohne FC | Tuner mit FC |
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

| Sprache | Stand | Geprüft | FlowState Tuner | FPV Guide | HangarDeck |
|---|---|---|---|---|---|
| **Deutsch** | vollständig integriert | ja | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=de) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=de) | [HangarDeck öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/) |
| **English** | vollständig integriert | ja | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=en) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=en) | noch nicht |
| **Español** | Vorschau, nicht geprüft | nein | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=es) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=es) | noch nicht |

Deutsch und Englisch sind in Tuner und Guide vollständig: Oberfläche, Meldungen, Glossar
und Kapitel. Spanisch ist dort übersetzt und auswählbar, aber in keinem Bereich geprüft.
Das Programm zeigt deshalb einen dauerhaften Hinweis; nicht überprüfte Stellen fallen auf
Englisch zurück. HangarDeck ist in dieser Fassung nur auf Deutsch; die Oberfläche ist
vollständig, eine Übersetzung ist noch nicht angelegt.

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
übernimmt das Programm die Browsersprache, wenn sie eine dieser drei ist. Bei jeder
anderen Sprache startet es auf Deutsch.

Unabhängig davon gilt innerhalb einer Sprache: Fehlt ein einzelner Text, erscheint er
auf Englisch. Deutsch ist also der Startwert für unbekannte Browsersprachen, Englisch
füllt die Lücken in einer vorhandenen Übersetzung.

---

## Versionen

**Drei Programme, drei Versionsreihen.** Tuner, Guide und HangarDeck werden getrennt
nummeriert und getrennt veröffentlicht. Jede Reihe hat ihr eigenes Release. Die Zahlen
sagen nichts übereinander aus: Der Tuner steht bei `4.8`, der Guide bei `1.0.2`,
HangarDeck bei `0.1.0`, weil sie verschieden weit sind, nicht weil eines neuer wäre. Ein
neuer Guide-Stand lässt die anderen unberührt, und umgekehrt.

| | [FlowState Tuner](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.2) | [FPV Guide](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.1-es) | [HangarDeck](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.1.0-beta.2) |
|---|---|---|---|
| Version | [`v4.8-alpha.2`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.2) | [`v1.0.2-beta.1-es`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.1-es) | [`v0.1.0-beta.2`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.1.0-beta.2) |
| Kanal | Alpha | Beta | Beta |
| Datum | 02.11.2026 | 02.11.2026 | 02.11.2026 |
| Größe (Bytes) | 496.561 | 7.663.821 | 112.090 |
| SHA-256 | `38cfae5db2dd3f460bd0116d40ca3298dae51b2c89fb3ca1b8306c77e96bd418` | `796ec978e462857667f25cb61fff0912379ae6ffbd1712b0223002ac14665674` | `500cda43df1c14e05fd5af3c260074f1173d0cf6ae696722635bd3fee880d406` |

Die Dateien laden keine externen Skripte, Schriften oder Bilder. Verweise im Guide
führen absichtlich nach außen: Sie öffnen sich nur mit Internetverbindung, der Inhalt
selbst braucht sie nicht.

Zum Nachrechnen: Befehl, darunter der erwartete Wert.

```
sha256sum tuner/index.html
38cfae5db2dd3f460bd0116d40ca3298dae51b2c89fb3ca1b8306c77e96bd418

sha256sum guide/index.html
796ec978e462857667f25cb61fff0912379ae6ffbd1712b0223002ac14665674

sha256sum hangar/index.html
500cda43df1c14e05fd5af3c260074f1173d0cf6ae696722635bd3fee880d406
```

Eigene Release-Seite je Programm:
[Tuner `v4.8-alpha.2`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v4.8-alpha.2) ·
[Guide `v1.0.2-beta.1-es`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v1.0.2-beta.1-es) ·
[HangarDeck `v0.1.0-beta.2`](https://github.com/YngwieRfpv/flowstate-fpv-tuner/releases/tag/v0.1.0-beta.2)

### Was diese drei Stände geändert haben

Alle drei übernehmen jetzt die Farbwahl der Übersichtsseite. Ein Eintrag, ein Name:
`flowstate-theme` trägt `ocean`, `sand` oder `drakn`. Ältere Stände haben `dark`, `light`
und `cream` gespeichert, die werden weiter gelesen.

- **Tuner:** liest die Palette beim Start, schreibt eine Änderung im Kopf zurück, damit
  die Übersichtsseite mitzieht. Fußzeile und CLI-Kommentar nennen `v4.8-alpha.2`.
- **Guide:** liest die Palette beim Start. Er kennt Hell, Dunkel und Sand; Ozean öffnet
  dunkel, Leinen hell, Dunkelrot bleibt dunkel. Inhalt und Werte sind unverändert.
- **HangarDeck:** hat eine dunkle Palette mit wählbarer Akzentfarbe und nimmt aus der
  Wahl den passenden Ton. Ohne Wahl im Hub bleibt Grün.

---

## English

Three single-file HTML programs for Betaflight, running entirely in the browser.

- **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** — reads Blackbox and Dataflash logs, derives
  filter and PID values, shows every step as a readable CLI plan and writes it over
  Web Serial after a backup and explicit confirmation. Six phases: setup, filter,
  neutral P/D, master, FF/I/D-Max, archive.
- **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** — explains the workflow from the first build to fine
  tuning, with 95 glossary terms and reference tables.
- **[HangarDeck](https://yngwierfpv.github.io/flowstate-fpv-tuner/hangar/)** — keeps the fleet and the flight-controller
  library, reads Betaflight or INAV controllers over Web Serial or imports a CLI dump,
  and exports the data as JSON, CSV or a Markdown report.

Tuner and guide ship in German, English and Spanish: ?lang=de, ?lang=en or ?lang=es.
Spanish is translated but verified in no area. The program shows a permanent notice and
falls back to English where text is unrevised. HangarDeck is German only in this
version.

Two separate mechanisms: an unknown browser language starts the program in German,
while a missing individual string inside a translation appears in English.

None needs an install, an account or an internet connection. No file loads external
scripts, fonts or images; the guide's links point outward on purpose and only open with
a connection.

The overview page embeds the programs below its header and keeps the address in the form
of `#/guide`, `#/tuner` or `#/hangar`. *Download with hub* builds a ZIP in the browser
that contains the overview page plus all three programs; unzip it and open `index.html`.

Language and colour sit side by side in the header, without a drop-down: DE and EN plus
three palette strips. Both choices carry into the program you open next. `flowstate-theme`
holds `ocean`, `sand` or `drakn`; older values `dark`, `light` and `cream` are still read.
The tuner has all three palettes. The guide knows light, dark and sand, so ocean opens
dark, sand light and drakn stays dark there. HangarDeck keeps one dark palette and takes
the matching accent instead.

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
