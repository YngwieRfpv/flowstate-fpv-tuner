# FlowState FPV

Zwei HTML-Programme für Betaflight-Tuning. Jedes ist **eine einzelne Datei**, die im
Browser läuft — ohne Installation, ohne Konto, ohne Internetverbindung.

| Programm | Datei | Größe | Aufgabe |
|---|---|---|---|
| **FlowState Tuner** | [`tuner/index.html`](tuner/index.html) | 452 KB | Logs messen, Werte ableiten, CLI-Plan schreiben |
| **FPV Guide** | [`guide/index.html`](guide/index.html) | 7,3 MB | Erklären, nachschlagen, Ablauf begleiten |

Der Einstieg liegt in [`index.html`](index.html): Programmübersicht, Versionen mit
Prüfsummen und Antworten auf die häufigsten Fragen. Diese Seite ist zweisprachig
(Deutsch/Englisch), hell, dunkel und creme.

---

## FlowState Tuner

Der Tuner liest Blackbox- und Dataflash-Logs, leitet daraus Filter- und PID-Werte ab
und zeigt jeden Schritt als lesbaren CLI-Plan. Geschrieben wird über Web Serial —
nur nach vollständiger Sicherung und deiner Bestätigung.

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

- Tuning ersetzt keine mechanische Kontrolle: keine verbogenen Wellen, Lager, Props,
  Lötstellen oder ESC-Fehler reparieren.
- Props ab für alle Arbeiten am USB-verbundenen Copter.
- Bei heißen Motoren, Desync, unklarer Vibration oder nach einem Crash nicht
  weiter automatisch tunen.
- Verbindungstest mit echtem Flight Controller und Flugtest stehen aus.

---

## FPV Guide

Der Guide führt vom ersten Build bis zum Feintuning. Er erklärt Begriffe, zeigt
Tabellen und begleitet den Ablauf Schritt für Schritt.

### Bereiche

| Bereich | Inhalt |
|---|---|
| Simple Tuning | Betaflight vorbereiten, Logs lesen, Profil abstimmen |
| Advanced Tuning | Advanced Tune, Sbang oder einzelne Einstellungen |
| Technik & Referenz | Filterbegriffe, Werte und Tabellen zum Nachschlagen |
| Build-Guide | mechanisch und elektrisch saubere Basis vor dem Erstflug |
| Glossar | 95 Begriffe, aufrufbar direkt aus dem Text |
| Quellen & Links | Originalanleitungen, Dokumentation, Werkzeuge |

### Profil und Workspace

Coptergröße, Frame, Gyro-/PID-Taktrate, Betaflight-Version und ESC-Firmware steuern,
welche Werte und Tabellen erscheinen. Das Setup lässt sich als Datei speichern und
später wieder laden; Logs werden dem Profil zugeordnet und benannt.

### Grenzen

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

| | Guide | Tuner ohne FC | Tuner mit FC |
|---|---|---|---|
| Chrome, Edge (Desktop) | ✓ | ✓ | ✓ |
| Firefox, Safari | ✓ | ✓ | — |
| Mobil | ✓ | ✓ | — |

Der Tuner braucht für die Verbindung zum Flight Controller Chrome oder Edge auf dem
Desktop, weil nur diese Web Serial unterstützen. Die Log-Analyse funktioniert in jedem
Browser.

---

## Versionen

| | Tuner | Guide |
|---|---|---|
| Version | `v4.8-alpha.1` | `v1.0.1-beta.1` |
| Kanal | Alpha | Beta |
| Datum | 24.10.2026 | 24.10.2026 |
| Größe | 451.790 B | 7.292.320 B |
| SHA-256 | `f86deeeab262ec1df6afd2aea65d46884299454713b787b5a8d7d6866e977b9f` | `d80c5d0b8aed6824ed45f7317c838ea6b63672e93799b7bd691d6f5b5e2d56ff` |

Beide Dateien laden keine externen Skripte, Schriften oder Bilder.

---

## English

Two single-file HTML programs for Betaflight tuning, running entirely in the browser.

- **FlowState Tuner** — reads Blackbox and Dataflash logs, derives filter and PID
  values, shows every step as a readable CLI plan and writes it over Web Serial after
  a backup and explicit confirmation. Six phases: setup, filter, neutral P/D, master,
  FF/I/D-Max, archive.
- **FPV Guide** — explains the workflow from the first build to fine tuning, with 95
  glossary terms, reference tables and a workspace you can save as a file.

Neither needs an install, an account or an internet connection. The tuner requires
Chrome or Edge on desktop for the flight-controller connection; everything else works
in any modern browser. Tuning does not replace mechanical inspection — remove props
for bench work and stop on hot motors, desyncs or unclear mechanics.

---

## Lizenz

Die Programme dürfen unverändert weitergegeben werden: vollständig, mit Lizenz und
mit Verweis auf die Originalquelle. Bearbeitungen, Kürzungen, Übersetzungen und
eigene Fassungen sind nicht erlaubt.

Der vollständige Text steht in [`LICENSE`](LICENSE), auf Deutsch und Englisch.
