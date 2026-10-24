# FlowState FPV

Zwei HTML-Programme für Betaflight-Tuning. Jedes ist **eine einzelne Datei**, die im
Browser läuft — ohne Installation, ohne Konto, ohne Internetverbindung.

| Programm | Datei | Größe | Aufgabe |
|---|---|---|---|
| **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** | [`tuner/index.html`](tuner/index.html) | 477 KB | Logs messen, Werte ableiten, CLI-Plan schreiben |
| **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** | [`guide/index.html`](guide/index.html) | 7,6 MB | Erklären, nachschlagen, Ablauf begleiten |

Größen in KB und MB zur Basis 1000; die genauen Byte-Werte stehen unter *Versionen*.

Der Einstieg liegt in [`index.html`](index.html): Programmübersicht, Versionen mit
Prüfsummen und Antworten auf die häufigsten Fragen. Diese Seite ist zweisprachig
(Deutsch/Englisch), hell, dunkel und creme. Beide Programme gibt es auf Deutsch,
Englisch und Spanisch.

---

## [FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)

Der Tuner liest Blackbox- und Dataflash-Logs, leitet daraus Filter- und PID-Werte ab
und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial —
nur nach vollständiger Sicherung und deiner Bestätigung.

**Alpha:** Der Schreibpfad ist an echter Hardware noch nicht erprobt. Der Plan lässt
sich vollständig lesen und prüfen, ohne dass etwas geschrieben wird — das ist der
sichere Weg für den ersten Durchlauf.

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

Der Guide beantwortet das Warum, der Tuner liefert das Was.

```
Guide, Profil wählen        welches Setup, welche Erwartung
Guide, Build-Guide prüfen   ist die Mechanik tuning-fähig?
Tuner, Setup                verbinden, auslesen, sichern, Profil schützen
Tuner, Filter → P/D → Master → FF/I
Tuner, Archiv               Plan, Manifest und Logs sichern
Guide, Technik & Referenz   Werte nachlesen und dokumentieren
```

---

## Öffnen

Beide Programme laufen direkt im Browser. Entweder über die veröffentlichte Adresse
oder als heruntergeladene Datei per Doppelklick — beides zeigt dieselbe Anwendung.

Veröffentlicht: [FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/) und
[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/). Die Übersicht liegt in [index.html](https://yngwierfpv.github.io/flowstate-fpv-tuner/).

| | Guide | Tuner ohne FC | Tuner mit FC |
|---|---|---|---|
| Chrome, Edge, Opera (Desktop) | ✓ | ✓ | ✓ |
| Firefox, Safari | ✓ | ✓ | — |
| Mobil | ✓ | ✓ | — |

Für die Verbindung zum Flight Controller braucht der Tuner Web Serial. Das bringen
Chrome, Edge und Opera auf dem Desktop mit. Brave hat es abgeschaltet und braucht
`brave://flags/#brave-web-serial-api`; Firefox und Safari haben es nicht.

Chrome für Android kann Web Serial seit Version 148 für einen Teil der Geräte — als
verlässlicher Weg ist das nicht erprobt, deshalb steht Mobil in der Tabelle auf „—".
Die Log-Analyse funktioniert in jedem Browser, dafür braucht es kein Web Serial.

---

## Sprachen

| Sprache | Stand | Geprüft | FlowState Tuner | FPV Guide |
|---|---|---|---|---|
| **Deutsch** | vollständig integriert | ja | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=de) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=de) |
| **English** | vollständig integriert | ja | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=en) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=en) |
| **Español** | Vorschau, nicht geprüft | nein | [Tuner öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/?lang=es) | [Guide öffnen](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/?lang=es) |

Deutsch und Englisch sind in beiden Programmen vollständig: Oberfläche, Meldungen,
Glossar und Kapitel. Spanisch ist übersetzt und auswählbar, aber in keinem Bereich
geprüft — das Programm zeigt deshalb einen dauerhaften Hinweis, und nicht überprüfte
Stellen fallen auf Englisch zurück.

Die Sprache steht in der Adresse: `?lang=de`, `?lang=en` oder `?lang=es`. Ohne Angabe
übernimmt das Programm die Browsersprache, wenn sie eine dieser drei ist — bei jeder
anderen Sprache startet es auf Deutsch.

Davon unabhängig gilt innerhalb einer Sprache: Fehlt ein einzelner Text, erscheint er
auf Englisch. Kurz gesagt: Deutsch ist der Startwert für unbekannte Browsersprachen,
Englisch füllt Lücken innerhalb einer vorhandenen Übersetzung.

---

## Versionen

| | Tuner | Guide |
|---|---|---|
| Version | `v4.8-alpha.1` | `v1.0.1-beta.4-es` |
| Kanal | Alpha | Beta |
| Datum | 24.10.2026 | 24.10.2026 |
| Größe (Bytes) | 477.125 | 7.643.939 |
| SHA-256 | `089c6a6c0e90dd90a65608386c4a4da33587d77921a97b44a7152ea6973620d6` | `ebbc959c823695fc3584186a390e927570682bf892bf491db7a3e4ef17c3c84f` |

Beide Dateien laden keine externen Skripte, Schriften oder Bilder. Verweise im Guide
führen absichtlich nach außen: Sie öffnen sich nur mit Internetverbindung, der Inhalt
selbst braucht sie nicht.

Zum Nachrechnen: Befehl, darunter der erwartete Wert.

```
sha256sum tuner/index.html
089c6a6c0e90dd90a65608386c4a4da33587d77921a97b44a7152ea6973620d6

sha256sum guide/index.html
ebbc959c823695fc3584186a390e927570682bf892bf491db7a3e4ef17c3c84f
```

---

## English

Two single-file HTML programs for Betaflight tuning, running entirely in the browser.

- **[FlowState Tuner](https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/)** — reads Blackbox and Dataflash logs, derives
  filter and PID values, shows every step as a readable CLI plan and writes it over
  Web Serial after a backup and explicit confirmation. Six phases: setup, filter,
  neutral P/D, master, FF/I/D-Max, archive.
- **[FPV Guide](https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/)** — explains the workflow from the first build to fine
  tuning, with 95 glossary terms and reference tables.

Both ship in German, English and Spanish: ?lang=de, ?lang=en or ?lang=es. Spanish is
translated but verified in no area — the program shows a permanent notice and falls
back to English where text is unrevised.

Two separate mechanisms: an unknown browser language starts the program in German,
while a missing individual string inside a translation appears in English.

Neither needs an install, an account or an internet connection. Neither file loads
external scripts, fonts or images; the guide's links point outward on purpose and only
open with a connection.

The tuner is an alpha: its write path has not been tried on real hardware yet. The plan
can be read and checked in full without writing anything. For the flight-controller
connection it needs Web Serial, which Chrome, Edge and Opera bring on desktop. Brave
ships it disabled (`brave://flags/#brave-web-serial-api`); Firefox and Safari lack it.
Chrome for Android has partial support since version 148, not verified here.

Tuning does not replace mechanical inspection — remove props for bench work and stop on
hot motors, desyncs or unclear mechanics. The licence is source-available, not
open source: modifications are not permitted.

---

## Lizenz

Die Programme dürfen unverändert weitergegeben werden: vollständig, mit Lizenz und
mit Verweis auf die Originalquelle. Bearbeitungen, Kürzungen, Übersetzungen und
eigene Fassungen sind nicht erlaubt.

Der Quelltext ist öffentlich einsehbar, das macht die Lizenz aber nicht zu einer
Open-Source-Lizenz: Die Open Source Definition verlangt, dass Bearbeitungen erlaubt
sind, und das ist hier ausdrücklich nicht der Fall. Es handelt sich um eine
„Source-available“-Lizenz ohne Bearbeitungsrecht.

Der vollständige Text steht in [`LICENSE`](LICENSE), auf Deutsch und Englisch.
