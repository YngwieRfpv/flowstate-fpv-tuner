# FlowState Tuner v4.8-alpha.1 — Early Alpha

| Feld | Wert |
|---|---|
| Projekt | FlowState Tuner |
| Version | `v4.8-alpha.1` |
| Kanal | Alpha (Pre-Release) |
| Datum | 24.10.2026 |
| Zielpfad | `tuner/index.html` |
| Paketname (Quelle) | `FlowState-Tuner-v4.8-alpha.1.html` |
| Größe | 451.742 B |
| SHA-256 | `55397f568c6de4f72bb10cf2df967dac680e0fbe22eadc6b5cac3ee5e21e15f8` |

**Status:** Early Alpha — echte Browser-, Web-Serial-, FC-, Dataflash- und Flugvalidierung steht aus.

## Alpha-Highlights

- RPY ist die Standard-Yaw-Basis je Zielprofil; Preserve RP bleibt manueller Opt-out.
- Der Yaw Shake Fix ist standardmäßig aus, bestätigungspflichtig und nur im finalen Plan wirksam. Er bietet ausschließlich `80 / 80 / 0 / 0 / 125` oder `100 / 100 / 0 / 0 / 125` und trifft keine automatische Größenentscheidung.
- Master-Charakter bleibt auf **TUNED OVER / BALANCED (Standard) / TUNED UNDER** begrenzt.
- Importierte Blackbox-Namen sind reine Evidenz. P/D, Master und FF/I stammen nur aus Metadaten oder dokumentierten Dateinamen; fehlende Werte bleiben `UNBEKANNT`.
- Mehrflug-BBL-Importe behalten einzelne Segmente und hängen beobachtete P/D-, Master- bzw. FF/I-Bereiche an; Filter bleibt singular.
- Archiv-, Raw-Log-ZIP-Namen und Manifeste behalten Einzel-Label, Quellname, Bereich und Evidenz-Herkunft.
- Das P0-Backup-Gate verlangt ausreichend `diff all`-Ausgabe, die mit einem finalen CLI-Prompt endet, bevor Schreibvorgänge freigegeben werden.

## Validierungsgrenze

Quellcode und Paket haben die mitgelieferten automatisierten Source-Level-Regressionen bestanden. Das ist **kein** Nachweis für physische FC-, Web-Serial-, Dataflash- oder Flugvalidierung. Das Release ist bewusst als **Alpha-Pre-Release** markiert.

## Wichtige Hinweise

- Für FC-Schreibvorgänge ist Betaflight 4.5+ erforderlich.
- Ein späteres `simplified_tuning apply` kann die direkte Yaw-Shake-Fix-Ausnahme überschreiben — den finalen Plan prüfen.
- Unbekannte Slider-Werte werden nicht aus Flugverhalten oder Browserstatus geraten.
- Den HTML-Download gegen die obige SHA-256 prüfen.

## Scope-Auszug (Release-Manifest)

Single-File-Alpha für den lokalen Browser. Das ausgewählte FlowState-Produktzeichen sitzt im Header mit versionsnahen Metadaten; das YngwierFPV-Bild bleibt in der unteren Credit-Zeile. Dark-/Light-/Cream-Themes, neutrale Master-Labels, BMI270-3.2-kHz-/DSHOT300-Erzwingung, zielprofilgebundenes Yaw, optionaler Filter-Preflight auf HF-Motornoise (Blockade bei unvollständiger Evidenz oder > 55 % Anteil im schlechtesten Fenster), wählbare Web-Serial-Baudrate (115200/230400/460800/921600 nur beim Verbinden), zwei lokale Backup-Importe zum Vergleich ohne Schreibvorgang, diagnostische Cross-Checks ohne Automatik sowie vollständiges bidirektionales DE/EN für statische und generierte UI, Logs, Fehler, Dialoge und Accessibility-Text.

