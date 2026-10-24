# Release-Prozess

Eine Version ist erst „veröffentlicht“, wenn sie drei Orte kennt: den Index,
das Git-Tag und die Release-Seite. Alles andere ist ein Zwischenstand.

## Kanäle

| Kanal | Bedeutung | Erwartung |
|---|---|---|
| `alpha` | früher Stand, bewusst unfertig | Quellprüfungen laufen, echte Umgebung ungetestet |
| `beta` | inhaltlich vollständig, Review offen | Funktionen stehen, Review auf echter URL fehlt |
| `rc` | Release Candidate | nur noch Bugfixes |
| `stable` | freigegeben | dokumentierte Abnahme vorhanden |

Der Kanal steht in `assets/data/versions.json` und wird im Hub als Badge
angezeigt. Er ist eine Aussage über Reife — nicht über Aktualität.

## Ablauf

### 1. Version im Drive ablegen

Im Ordner `FPVGuide/Tuner/GitHub Versionen` einen Unterordner pro Ausgabe
anlegen, z. B. `FlowState_Tuner_GitHub_Alpha_v4.8-alpha.1`. Enthalten:
Anwendungsdatei, `README.md`, `RELEASE_NOTES.md`, `.nojekyll`.

### 2. Eintrag im Index ergänzen

In `assets/data/versions.json` unter `releases` einen Block hinzufügen:

```json
{
  "id": "tuner-4.9-alpha.1",
  "project": "tuner",
  "version": "v4.9-alpha.1",
  "channel": "alpha",
  "released": "2026-11-02",
  "title": "Kurze Einordnung in einem Satz",
  "summary": "Was diese Ausgabe leistet und was sie nicht leistet.",
  "file": "tuner/index.html",
  "size_bytes": 0,
  "sha256": null,
  "available": false,
  "source": { "folder": "…", "folder_url": "https://drive.google.com/…" },
  "signals": [{ "label": "Quellprüfung", "state": "ok" }],
  "notes": ["…"],
  "limits": ["…"]
}
```

`available: false` und `sha256: null` sind korrekt, solange die Datei noch
nicht im Repository liegt — der Hub zeigt dann „Datei noch nicht eingespielt“.

### 3. Datei einspielen

```bash
./scripts/install-versions.sh --tuner ~/Downloads/FlowState-Tuner-v4.9-alpha.1.html
```

Das Skript kopiert nach `tuner/index.html`, berechnet SHA-256 und Größe und
setzt `available: true`. Es lehnt Platzhalter ab.

### 4. Prüfen

```bash
node scripts/validate.mjs
```

Der Validator prüft Pflichtdateien, Schema, IDs, Kanäle, Existenz der
Zielpfade, Hashes, Größen und alle internen Links. Exit-Code ≠ 0 bedeutet:
nicht committen.

### 5. Committen, taggen, veröffentlichen

```bash
git add -A
git commit -m "release: tuner v4.9-alpha.1"
git tag -a v4.9-alpha.1 -m "FlowState Tuner v4.9-alpha.1"
git push origin main --tags
```

Danach auf GitHub:

1. **Releases → Draft a new release**
2. Tag `v4.9-alpha.1` wählen
3. Titel und Notes aus `docs/releases/<projekt>-<version>.md` übernehmen
4. Bei Alpha/Beta: **Set as a pre-release** aktivieren
5. Die Anwendungsdatei als Asset anhängen

### 6. Live prüfen

- `https://<user>.github.io/<repo>/` — Hub, Version erscheint mit Badge
- `https://<user>.github.io/<repo>/tuner/` — Anwendung lädt
- Hash der Live-Datei gegen `versions.json` prüfen:
  ```bash
  curl -sL https://<user>.github.io/<repo>/tuner/ | shasum -a 256
  ```

## Regeln

- **Nie eine Version rückwirkend überschreiben.** Eine neue Version bekommt
  einen neuen Eintrag; alte Einträge bleiben mit ihrem Hash stehen.
- **Hash ist Pflicht, sobald `available: true` gesetzt ist.** Der Validator
  erzwingt das.
- **Reifegrad nicht schönreden.** Eine bestandene Quellprüfung ist kein
  Hardware-Test. Der `signals`-Block macht die Lücke sichtbar, statt sie zu
  verstecken.
- **Release-Notes gehören ins Repository**, nicht in einen Chat. Sie sind die
  einzige Begründung, die in einem Jahr noch lesbar ist.
- **Keine personenbezogenen Daten** (FC-Dumps, Blackbox-Logs, Seriennummern,
  Screenshots mit Kontodaten) in Releases hochladen.

## Rollback

Ein fehlerhaftes Release lässt sich zurücknehmen, ohne Geschichte zu
umschreiben:

```bash
# Datei auf den vorherigen Stand bringen
git checkout <vorheriger-tag> -- tuner/index.html
node scripts/validate.mjs
git commit -am "revert: tuner auf <vorheriger-tag>"
```

Anschließend im Index `available` und `sha256` des alten Releases wieder
eintragen und das fehlerhafte Release auf GitHub als *pre-release* belassen
oder die Notes um einen Hinweis ergänzen — nicht löschen.
