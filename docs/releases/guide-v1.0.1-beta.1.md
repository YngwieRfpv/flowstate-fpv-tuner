# FPV Guide DE v1.0.1-beta.1 — GitHub Beta

| Feld | Wert |
|---|---|
| Projekt | FPV Guide DE |
| Version | `v1.0.1-beta.1` |
| Kanal | Beta |
| Datum | 24.10.2026 |
| Zielpfad | `guide/index.html` |
| Paketname (Quelle) | `index.html` |
| Größe | 7.292.272 B |
| SHA-256 | wird beim Einspielen berechnet |
| Basis | FPV Guide DE v1.0.0 (fachlich geprüfte Vollversion) |
| Herkunft | Google Drive · `FPVGuide/Tuner/GitHub Versionen/FPV_Guide_GitHub_Beta_v1.0.1-beta.1` |

## Zweck

Diese Ausgabe ist eine eigenständig auslieferbare **GitHub-Beta** für Review und Deployment mit GitHub Pages. Sie ist keine inhaltliche Rückstufung der Vollversion: Der gesamte geprüfte v1.0.0-Stand bleibt enthalten.

## Delta zur Vollversion

Ausschließlich öffentliche Beta-Metadaten wurden angepasst:

- sichtbare Kennzeichnung: `GitHub Beta · v1.0.1-beta.1 · 24.10.2026`;
- portables Manifest: `1.0.1-beta.1`;
- Status-Badges für Startseite, Simple-, Advanced- und Build-Bereich: GitHub-Beta/Beta-Review;
- dynamischer DE/EN-Footer: GitHub-Beta.

Die interne `guide-data`-Versionsnummer `0.3` bleibt ein Workspace-/Migrationsschlüssel und wurde nicht als öffentliche Release-Nummer verwendet.

## Unverändert

- alle 95 Glossarbegriffe und die abgeschlossene Betaflight-Wiki-Prüfung;
- alle Inhalte, Checklisten, Wege und Einstellungsdarstellungen;
- vollständiges FlowState-Visual-System;
- Sbang-Inhalt, -Ablauf und direkte Implementierung.

Direkter Sbang-Fingerprint:

`9cc9db843d7b67c60acfb32516673780293972cb9ae5073ef802214042391d55`

## Prüfergebnis

- HTML-Validierung: 0 Befunde
- extrahiertes JavaScript: Syntax bestanden
- Simple → Advanced → Sbang-Renderpfad: 0 Fehler
- Sbang-Schritte 1–6: gerendert ohne Laufzeitfehler
- Glossar: 95/95 DE/EN-Definitionen und Quellen vorhanden

## Review-Fokus auf GitHub Pages

1. Seite über die echte GitHub-Pages-URL öffnen, nicht nur über die Dateivorschau.
2. Deutsch/Englisch, Hell/Dunkel und Desktop/Mobilansicht kurz prüfen.
3. Simple-, Advanced- und Sbang-Einstieg öffnen; keine Sbang-Verhaltensänderung akzeptieren.
4. Einen Glossarbegriff und einen Quellenlink testen.
5. Export/Import nur mit einer Testdatei prüfen; vorhandene lokale Workspace-Daten nicht überschreiben.

## Bearbeitungsgrenzen

- **Sbang nicht inhaltlich, im Ablauf oder in der Implementierung verändern.**
- Betaflight-/ESC-Werte bleiben firmware- und hardwareabhängig. Keine historischen Wiki-Werte pauschal als aktuelle Defaults umformulieren.
- Das HTML ist absichtlich eine einzelne, etwa 7 MB große Datei. Nicht auf ein externes CDN, ungesicherte Remote-Skripte oder eine Build-Pipeline umstellen, ohne die Offline-Nutzbarkeit ausdrücklich neu zu testen.
- Quellen- und Lizenzangaben im Dokument nicht entfernen.

> Quelle: `RELEASE_NOTES.md` und `README.md` aus dem Drive-Paket.
