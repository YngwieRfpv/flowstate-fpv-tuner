#!/usr/bin/env bash
#
# Spielt die Anwendungs-Einzeldateien an ihren festen Platz im Repository
# und trägt SHA-256 + Größe in assets/data/versions.json ein.
#
#   ./scripts/install-versions.sh --tuner <datei> --guide <datei>
#   ./scripts/install-versions.sh --tuner <datei>            # nur der Tuner
#   ./scripts/install-versions.sh --tuner <datei> --no-validate
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TUNER=""
GUIDE=""
VALIDATE=1

usage() {
  cat <<'USAGE'

  FlowState FPV — Versionen einspielen

  Aufruf:
    ./scripts/install-versions.sh --tuner <pfad> [--guide <pfad>] [--no-validate]

  Optionen:
    --tuner <pfad>    FlowState Tuner Einzeldatei → tuner/index.html
    --guide <pfad>    FPV Guide Einzeldatei       → guide/index.html
    --no-validate     Prüfung am Ende überspringen
    -h, --help        Diese Hilfe

  Beispiel:
    ./scripts/install-versions.sh \
      --tuner ~/Downloads/FlowState-Tuner-v4.8-alpha.1.html \
      --guide ~/Downloads/index.html

USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --tuner)  TUNER="${2:-}"; shift 2 ;;
    --guide)  GUIDE="${2:-}"; shift 2 ;;
    --no-validate) VALIDATE=0; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unbekannte Option: $1" >&2; usage; exit 1 ;;
  esac
done

if [[ -z "$TUNER" && -z "$GUIDE" ]]; then
  usage
  exit 1
fi

install_one() {
  local project="$1" source="$2" target="$3"

  if [[ ! -f "$source" ]]; then
    echo "  ✗ Datei nicht gefunden: $source" >&2
    return 1
  fi

  if grep -q "PLATZHALTER" "$source" 2>/dev/null; then
    echo "  ✗ Das ist ein Platzhalter, nicht die Anwendung: $source" >&2
    return 1
  fi

  local size
  size=$(wc -c < "$source" | tr -d ' ')
  echo "  → $project: $(basename "$source") (${size} B) → $target"
  cp "$source" "$ROOT/$target"
  echo "    kopiert."
}

echo ""
echo "  FlowState FPV — Versionen einspielen"
echo "  ──────────────────────────────────────────────"

if [[ -n "$TUNER" ]]; then
  install_one "Tuner" "$TUNER" "tuner/index.html"
fi

if [[ -n "$GUIDE" ]]; then
  install_one "Guide" "$GUIDE" "guide/index.html"
fi

# Metadaten aktualisieren
if [[ -n "$TUNER" ]]; then
  node "$ROOT/scripts/update-manifest.mjs" --project tuner --file tuner/index.html
fi

if [[ -n "$GUIDE" ]]; then
  node "$ROOT/scripts/update-manifest.mjs" --project guide --file guide/index.html
fi

chmod 644 "$ROOT/tuner/index.html" 2>/dev/null || true
chmod 644 "$ROOT/guide/index.html" 2>/dev/null || true

if [[ "$VALIDATE" -eq 1 ]]; then
  node "$ROOT/scripts/validate.mjs"
fi

cat <<'NEXT'

  Nächste Schritte:
    git add -A
    git commit -m "release: Versionen eingespielt"
    git push
    # GitHub Pages deployt danach automatisch über .github/workflows/pages.yml

NEXT
