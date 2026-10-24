# GitHub Pages einrichten

Der Hub ist komplett statisch: HTML, CSS, etwas JavaScript, zwei SVG-Dateien.
Kein Build, kein npm, keine Serverlogik.

## 1. Voraussetzungen im Repository

```
index.html          ← Hub
.nojekyll           ← schaltet Jekyll ab
assets/             ← CSS, JS, Bilder, versions.json
tuner/index.html    ← Anwendung 1 (feste URL)
guide/index.html    ← Anwendung 2 (feste URL)
```

`.nojekyll` ist wichtig: Ohne die Datei filtert Jekyll bestimmte Ordner und
Dateinamen weg und bricht so unter anderem die Ordner-URLs.

## 2. Variante A — Deploy über GitHub Actions (empfohlen)

Der Workflow `.github/workflows/pages.yml` ist enthalten.

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push auf `main` (oder *Run workflow* im Actions-Tab).
3. Der Job `Validate & stage` prüft zuerst `versions.json` und die Hashes.
   Schlägt die Prüfung fehl, wird **nicht** deployt.
4. Danach steht die Seite unter
   `https://<user>.github.io/<repo>/` bereit.

Vorteil gegenüber Branch-Deploy: Die Validierung ist ein Gate. Eine kaputte
Version erreicht die Live-Seite nicht.

## 3. Variante B — Deploy aus dem Branch

1. **Settings → Pages → Source: Deploy from a branch**
2. Branch `main`, Ordner `/ (root)`
3. Speichern, ein bis zwei Minuten warten.

Beide Varianten vertragen sich nicht gleichzeitig — es gilt immer die zuletzt
gewählte Quelle.

## 4. Eigene Domain (optional)

1. Im Repository-Root eine Datei `CNAME` mit genau einer Zeile anlegen:
   ```
   tuner.example.com
   ```
2. Beim DNS-Anbieter einen `CNAME`-Record auf `<user>.github.io` setzen.
3. In **Settings → Pages → Custom domain** eintragen und *Enforce HTTPS* aktivieren.

Für die Apex-Domain (ohne Subdomain) sind A-Records auf die GitHub-Pages-IPs
nötig; ein `CNAME` funktioniert dort nicht.

## 5. Die große Datei (FPV Guide, ~7 MB)

Der Guide ist bewusst eine Einzeldatei. Das ist für Pages unproblematisch, hat
aber drei praktische Konsequenzen:

- **Erster Aufruf:** Die Datei wird vollständig geladen. Auf Mobilfunk kann das
  einige Sekunden dauern; danach ist die Seite offline nutzbar.
- **Caching:** GitHub Pages liefert standardmäßig `Cache-Control: max-age=600`.
  Nach einem Deployment kann bis zu zehn Minuten die alte Version im Cache
  liegen. Für Tests einen Hard-Reload (`Strg/Cmd + Shift + R`) verwenden.
- **Kein CDN-Umbau:** Nicht „aus Performance-Gründen“ auf externe Skripte oder
  Fonts umstellen. Genau das würde die Offline-Zusage brechen.

**Limits von GitHub Pages (Stand 2026):** 1 GB veröffentlichte Seite,
100 GB Traffic pro Monat, 10 Builds pro Stunde bei Branch-Deploys.
Für dieses Repository ist beides weit entfernt von kritisch.

## 6. Typische Fehler

| Symptom | Ursache | Lösung |
|---|---|---|
| 404 auf `/tuner/` | Datei heißt nicht `index.html` | Datei umbenennen |
| Assets laden nicht | Pfade sind absolut (`/assets/...`) und die Seite liegt unter einem Repo-Unterpfad | relative Pfade verwenden (`assets/...`, `../assets/...`) |
| `.md`-Dateien werden roh angezeigt | Markdown wird von Pages nicht gerendert | erwartet; Markdown auf github.com lesen |
| Alte Version sichtbar | Browser-/Pages-Cache | Hard-Reload, bis zu 10 Minuten warten |
| Deploy bricht ab | `node scripts/validate.mjs` findet Fehler | Log im Actions-Tab lesen, lokal reproduzieren |

## 7. Lokal testen

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Ein Doppelklick auf `index.html` (`file://`) funktioniert **nicht** vollständig:
Der Browser blockiert dann das Laden von `versions.json`. Der Hub weist darauf
mit einem Hinweis hin. Die beiden Anwendungen selbst sind davon nicht betroffen
und laufen auch per Doppelklick.
