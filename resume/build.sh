#!/usr/bin/env bash
# Regenerate the resume PDF from resume.html.
# Usage: ./resume/build.sh   (run from the repo root)
set -euo pipefail
cd "$(dirname "$0")/.."
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw \
  --print-to-pdf="pdfs/riley-gramlich-resume.pdf" \
  "file://$PWD/resume/resume.html"
echo "built -> pdfs/riley-gramlich-resume.pdf"
