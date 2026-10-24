# FlowState FPV — Anwendung & Bedienung

Zwei eigenständige HTML-Anwendungen für Betaflight-Tuning. Beide sind **einzelne
Dateien ohne Build, ohne npm, ohne Backend, ohne externe Ressourcen** und laufen
vollständig offline auf deinem Rechner.

| Anwendung | Datei | Größe | Rolle |
|---|---|---|---|
| FlowState Tuner | [`tuner/index.html`](tuner/) | 451.790 B | Messen, rechnen, CLI-Plan schreiben |
| FPV Guide DE | [`guide/index.html`](guide/) | 7.292.320 B | Erklären, nachschlagen, nachbauen |

Beide sind Vorabversionen: Tuner **Early Alpha**, Guide **GitHub-Beta**.
Bestandene Quellprüfungen sind kein Nachweis für Flugverhalten.

Der Release-Hub (`index.html`) ist **zweisprachig Deutsch/Englisch** — Umschalter
oben rechts, Auswahl wird im Browser gespeichert. Fehlt eine Übersetzung, greift
Englisch. Die Anwendungen selbst haben ihre eigene Sprachumschaltung.

> **Offline verifiziert:** 0 geladene externe Ressourcen, 0 `fetch`, 0
> `XMLHttpRequest`, 0 CDN-Skripte, 0 externe Fonts. WLAN abschalten und beide
> Anwendungen laufen weiter.

---

## 1. Inbetriebnahme

### Variante A — direkt im Browser (empfohlen)

GitHub Pages ist aktiv (Modus *Deploy from a branch*, `main` / root). Jeder Push
auf `main` baut die Seite automatisch neu — kein Workflow, kein Klick. Die
Anwendungen liegen unter:

```
https://yngwierfpv.github.io/flowstate-fpv-tuner/tuner/
https://yngwierfpv.github.io/flowstate-fpv-tuner/guide/
```

Nichts zu installieren. Antippen, läuft. Der Hub unter
`https://yngwierfpv.github.io/flowstate-fpv-tuner/` führt beide zusammen.

### Variante B — Doppelklick (komplett offline)

Beide Dateien lassen sich direkt im Browser öffnen (`file://`). Alles
funktioniert, **auch die Log-Analyse im Tuner**. Nur die FC-Verbindung über
Web Serial ist über `file://` je nach Browser-Laune unzuverlässig.

Das ist der Weg für „kein Internet, trotzdem tunen": Datei auf dem Laptop,
Doppelklick, fertig.

### Variante C — lokaler Server (für Web Serial)

```bash
cd flowstate-fpv-tuner
python3 -m http.server 8080
# → http://localhost:8080/tuner/   bzw.   /guide/
```

`localhost` gilt als sicherer Kontext — Web Serial verhält sich dort
reproduzierbar. Kein Internet nötig, der Server liefert nur lokale Dateien.

### Browser

| Browser | Guide | Tuner ohne FC | Tuner mit Web Serial |
|---|---|---|---|
| Chrome (Desktop) | ✓ | ✓ | ✓ |
| Edge (Desktop) | ✓ | ✓ | ✓ |
| Firefox / Safari | ✓ | ✓ | ✗ nicht unterstützt |

Der Tuner sagt es selbst: *„Web Serial ist nur in Chrome/Edge verfügbar.
Datei-Analyse funktioniert dennoch."* Auf iOS/Android funktioniert Web Serial
nicht — der Guide läuft dort aber vollständig.

**Kein Internet nötig.** Nach dem Laden kannst du WLAN abschalten; es gibt
keine Netzwerkaufrufe.

---

## 2. FlowState Tuner — Bedienung

### Was er tut

Er liest Blackbox-/Dataflash-Logs, vergleicht sie mit deinem Flugprofil,
erzeugt daraus einen **sichtbaren CLI-Plan** und schreibt diesen — nach
Bestätigung — über Web Serial in den Flight Controller. Nichts wird
automatisch geschrieben, was du nicht vorher als Plan gesehen hast.

### Voraussetzungen

- Betaflight **4.5 oder neuer** (ältere Versionen: Schreiben blockiert)
- Chrome oder Edge auf Desktop, USB-Kabel zum FC
- Ein **frisches `diff all`-Backup**, bevor irgendetwas geschrieben wird
- Sauberer mechanischer Zustand: **Props ab** für alle Bench-Arbeiten
- Für RPM-Filter: bidirektionales DShot, RPM-Telemetrie, verwertbare Blackbox

### Der Ablauf in sechs Phasen

Die Navigation führt strikt von 1 nach 6. Jede Phase hat ihr eigenes Gate und
schaltet erst weiter, wenn die Phase sauber abgeschlossen ist.

| # | Phase | Inhalt |
|---|---|---|
| 1 | **Setup** | FC · Hardware · Profil — verbinden, auslesen, Backup, Zielprofil schützen |
| 2 | **Filter** | Log · Spektrum · Auto — Gyro/D-Term-Filter aus dem Log ableiten |
| 3 | **P/D neutral** | Tracking · Pitch:Roll — neutrale P/D-Basis ohne Charakter-Bias |
| 4 | **Master ζ** | Stufen · Thermik — Fluggefühl über Master-Stufen vergleichen |
| 5 | **FF / I / D-Max** | Finish · CLI — Abschluss und Gesamtplan |
| 6 | **Archiv** | Logs · Download · Reset — alles sichern und exportieren |

### Erste Schritte

1. **`🔌 Verbinden`** — Port wählen. Die Baudrate (115200 / 230400 / 460800 /
   921600) gilt nur für den Verbindungsaufbau; änderst du sie, musst du neu
   verbinden.
2. **`↻ Auslesen`** — liest Firmware, Board, Profile, aktuelle Werte.
   Ohne Auslesen ist Schreiben blockiert.
3. **`🛡️ FC-Diff sichern`** — das Backup-Gate. Es verlangt eine ausreichend
   lange `diff all`-Ausgabe, die mit einem CLI-Prompt endet, und keine
   abgeschnittene Seriell-Ausgabe. Kurze oder abgebrochene Captures werden
   abgelehnt. **Überspringst du das Backup, springt jede weitere Aktion
   zurück in Phase 1.**
4. **Zielprofil wählen** (Profil 1–4). Der Tuner schreibt nur in dieses
   PID-Profil — die anderen bleiben unangetastet. Das ist der Profil-Schutz.
5. **`📁 Log(s) laden`** — Blackbox-`.bbl`/`.bfl`, Dataflash-Exporte.
   Mehrflug-Logs werden als einzelne Segmente mit ihren beobachteten
   Wertebereichen geführt, nicht zu einem Mittelwert verrechnet.

### Logs und Labels

Importierte Logs bekommen **nur belegte** Labels: P/D-, Master- oder
FF/I-Werte stammen ausschließlich aus Metadaten oder dokumentierten
Dateinamen. Fehlt ein Wert, steht dort `UNBEKANNT` — es wird nichts geraten
und nichts aus dem Flugverhalten zurückgerechnet.

### Sicherheits-Gates

Mehrere unabhängige Prüfungen blockieren Schreibvorgänge. Sie sind bewusst
nicht abschaltbar, auch wenn die optionale Checkliste aus ist:

- **Backup-Gate:** gültiges `diff all` vorhanden
- **Firmware-Gate:** BF 4.5+
- **Zielprofil-Gate:** Profil gewählt und geschützt
- **Filter-Quality-Gate:** das aktive Filterlog muss die Qualitätsprüfung
  bestehen. Ein Override ist möglich, gilt aber **nur für genau dieses Log**
  und wird beim Wiederverbinden zurückgesetzt.

Zusätzlich gibt es die **Pre-Flight-Checkliste** (🛡️): pro Phase bestätigst du
Punkte wie „Props ab", „Mechanik geprüft", „sichere Flugumgebung". Du kannst
sie abschalten — die technischen Gates oben bleiben trotzdem aktiv. Der
Unterschied ist Ehrlichkeit, nicht Sicherheit.

### Exporte (Phase 6 / Archiv)

| Ausgabe | Zweck |
|---|---|
| `📋 Plan kopieren` | CLI-Plan in die Zwischenablage |
| `💾 Plan .txt` | Plan als Textdatei zum Archivieren |
| `📋 Manifest .json` | Messwerte, Entscheidungen, Herkunft maschinenlesbar |
| `🗜️ Roh-Logs ZIP` | alle importierten Logs gebündelt |
| `⬇ Blackbox als .bbl` | Log aus dem FC ziehen, ohne Karte |
| `🗑 Dataflash löschen` | Speicher leeren — **destruktiv, nur nach Sicherung** |

### Einstellungen & Zustand

- **DE/EN** vollständig umschaltbar, inklusive Logs, Fehlermeldungen, Dialoge
- **Hell/Dunkel** über `☀️ Hell`
- Zoom über `🔍+` / `🔍−`
- Der Zustand (Profil, Session, Einstellungen) liegt in `localStorage` deines
  Browsers — **nicht** in einer Cloud. Ein anderer Browser oder ein gelöschter
  Cache bedeutet: Zustand weg. Deshalb: Session/Manifest exportieren.
- `↺ HTML / App zurücksetzen` setzt die Oberfläche zurück, ohne deine
  exportierten Dateien anzufassen.

### Grenzen (bitte ernst nehmen)

- Tuning repariert **keine** Vibrationen, verbogenen Wellen, Lager, Props,
  Lötstellen oder ESC-Fehler. Es macht schlechte Mechanik nur schwerer
  diagnostizierbar.
- Ein späteres `simplified_tuning apply` kann manuelle Ausnahmen überschreiben —
  **den finalen Gesamtplan immer selbst lesen**, bevor du ihn schreibst.
- Der Yaw Shake Fix ist standardmäßig aus, bestätigungspflichtig und nur im
  finalen Plan wirksam.
- Echte FC-, Web-Serial- und Flugvalidierung steht aus. Erste Flüge mit
  Sicherheitshöhe, weichem Untergrund und Bereitschaft zum Sofort-Landen.

---

## 3. FPV Guide DE — Bedienung

### Was er ist

Der fachliche Unterbau zum Tuner: ein deutschsprachiger Leitfaden mit acht
Bereichen, 95 Glossarbegriffen samt Quellen und einem Workspace, in dem du
dein Setup ablegst.

### Die acht Bereiche

| Bereich | Inhalt |
|---|---|
| **Startseite** | Einstieg und Übersicht |
| **Simple Tuning** | Betaflight vorbereiten, Logs lesen, Copterprofil abstimmen |
| **Advanced Tuning** | Advanced Tune, Blackbird Sbang oder einzelne Einstellungen |
| **Technik & Referenz** | Filterbegriffe, Einstellwerte, Tabellen zum Nachschlagen |
| **Build-Guide** | mechanisch und elektrisch saubere Basis: planen, bauen, Fehler vor dem Erstflug finden |
| **Glossar** | 95 Begriffe, DE/EN, mit Quellenverweisen |
| **Quellen & Shoutouts** | Originalanleitungen, Dokumentation, Autoren |
| **Links** | FPV-Websites und Werkzeuge |

### Typische Bedienung

1. **Profil wählen** — Tiny Whoop, 3", 5" usw. Der Guide filtert Werte und
   Tabellen danach; dieselbe Auswahl nutzt der Tuner als Zielprofil.
2. **Simple Tuning durchgehen** — der lineare Pfad für den Einstieg.
3. **Bei Bedarf Advanced Tuning** — dort liegen Advanced Tune, **Blackbird
   Sbang** und Einzeleinstellungen. Sbang ist ein geführter Ablauf in Schritten;
   arbeite ihn von Anfang bis Ende durch, nicht selektiv.
4. **Glossar** — unterstrichene Fachwörter im Text öffnen die Erklärung direkt
   an der Stelle, ohne den Absatz zu verlassen. `Zum Glossar` springt in die
   vollständige Liste.
5. **Workspace** — `Workspace herunterladen` bzw. `Workspace-Datei speichern`
   legt dein Setup als Datei ab; `Andere Workspace-Variante` lädt sie wieder.
   `Log importieren & benennen` ordnet ein Blackbox-Log deinem Profil zu.
   `Profil ändern` wechselt die Copter-Klasse, `Profil-Checklisten
   zurücksetzen` leert die Häkchen.

### Wichtig für Bearbeitungen

- **Sbang nicht inhaltlich, im Ablauf oder in der Implementierung verändern.**
- Betaflight-/ESC-Werte sind firmware- und hardwareabhängig. Historische
  Wiki-Werte sind keine aktuellen Defaults.
- Der Guide ist absichtlich **eine** ~7-MB-Datei. Nicht auf CDN, Remote-Skripte
  oder eine Build-Pipeline umstellen, ohne die Offline-Nutzbarkeit neu zu testen.
- Quellen- und Lizenzangaben im Dokument nicht entfernen.

---

## 4. Beide zusammen — der sinnvolle Ablauf

```
1. Guide, Profil wählen        → welches Setup, welche Erwartung
2. Guide, Build-Guide prüfen   → ist die Mechanik überhaupt tuning-fähig?
3. Tuner, Setup                → verbinden, auslesen, Backup, Profil schützen
4. Tuner, Filter → P/D → Master → FF/I
5. Tuner, Archiv               → Plan, Manifest, Roh-Logs sichern
6. Guide, Technik & Referenz   → Werte nachlesen, verstehen, dokumentieren
7. Fliegen, bewerten, wieder bei 4.
```

Der Guide beantwortet *warum*, der Tuner *was genau*. Wer nur den Tuner nutzt,
schreibt Werte, die er nicht erklären kann; wer nur den Guide nutzt, hat keine
Messgrundlage. Deshalb liegen beide im selben Repository.

---

## 5. Fehlerbehebung

| Symptom | Ursache | Lösung |
|---|---|---|
| „Web Serial nicht verfügbar" | Firefox/Safari, oder `file://` | Chrome/Edge, über `localhost` oder HTTPS öffnen |
| Verbinden findet keinen Port | Kabel, Treiber, anderer Port belegt | anderes Kabel/Port, Betaflight Configurator schließen |
| Verbindung bricht bei hoher Baudrate ab | Adapter/Chip zu langsam | 115200 wählen, neu verbinden |
| „Filter flash blocked" | Filterlog besteht das Quality-Gate nicht | besseres Log fliegen, Checkliste prüfen — Override nur bewusst |
| Schreiben grau/nicht möglich | Backup fehlt, BF zu alt, Profil ungeschützt | Phase 1 vollständig abschließen |
| Alles nach Reload weg | `localStorage` geleert / anderer Browser | Manifest + Session exportieren und wieder laden |
| Guide lädt sehr lange | 7,3 MB Einzeldatei | einmal laden, danach aus dem Cache; Hard-Reload nur bei Updates |
| Seite zeigt alte Version | Browser-/Pages-Cache | `Strg/Cmd + Shift + R` |

---

## 6. Versionen und Prüfsummen

| | Tuner | Guide |
|---|---|---|
| Version | `v4.8-alpha.1` | `v1.0.1-beta.1` |
| Kanal | Alpha (Pre-Release) | Beta |
| Datum | 24.10.2026 | 24.10.2026 |
| Größe im Repo | 451.790 B | 7.292.320 B |
| SHA-256 im Repo | `f86deeeab262ec1df6afd2aea65d46884299454713b787b5a8d7d6866e977b9f` | `d80c5d0b8aed6824ed45f7317c838ea6b63672e93799b7bd691d6f5b5e2d56ff` |

Maßgeblich ist der Hash der Datei in diesem Repository, weil genau diese Datei
ausgeliefert wird. Prüfen lässt sich das jederzeit:

```bash
shasum -a 256 tuner/index.html guide/index.html
```

### Offline-Garantie

Beim Einspielen wurde an beiden Dateien ein angehängter externer Script-Tag
entfernt (142 B, absoluter Pfad auf einen fremden Server), der die
Offline-Nutzung gebrochen und die Prüfsumme verändert hätte. Danach verifiziert:

| Prüfung | Tuner | Guide |
|---|---|---|
| Externe Skripte, Styles, Fonts | 0 | 0 |
| `fetch` / `XMLHttpRequest` | 0 | 0 |
| `@import` auf fremde Hosts | 0 | 0 |

### Lizenz

Für dieses Repository ist noch keine Lizenz gewählt. Bis dahin gilt die
Standard-Copyright-Position von GitHub — Rechte zur Weiterverwendung sind nicht
eingeräumt.
