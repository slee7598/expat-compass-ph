#!/usr/bin/env bash
# Contrast check: catches low-opacity text colors that cause invisible/unreadable
# text on dark navy (#0B1F3A) backgrounds. Run before committing any CSS/TSX changes.
#
# Thresholds:
#   Dark-bg cream text (rgba(248,246,241,*)):
#     < 0.70 → always a violation
#     0.60–0.69 → acceptable ONLY for fine-print/footer/captions
#   Light-bg navy text (rgba(11,31,58,*)):
#     < 0.30 → violation (too muted on cream background)
#   Gold text (rgba(201,168,76,*)) → always exempt (inherent contrast)

set -euo pipefail

VIOLATIONS=0
SRC="src/"

echo "=== Expat Compass PH — Contrast Check ==="
echo ""

# ── 1. Cream text below 0.60 (below absolute fine-print floor — always wrong) ──
echo "[1] Cream text below absolute floor (rgba(248,246,241, < 0.60))"
MATCHES=$(grep -rn "color.*rgba(248,246,241,0\.[0-5][0-9]" --include="*.tsx" --include="*.jsx" --include="*.css" "$SRC" \
  | grep -v "background\|border\|box-shadow" || true)
if [ -n "$MATCHES" ]; then
  echo "VIOLATION:"
  echo "$MATCHES"
  VIOLATIONS=$((VIOLATIONS + 1))
else
  echo "  OK — none found"
fi
echo ""

# ── 2. Cream text between 0.60 and 0.69 (fine-print floor — flag for review) ──
echo "[2] Cream text at fine-print floor (rgba(248,246,241, 0.60–0.69)) — verify it's fine-print/caption"
MATCHES=$(grep -rn "color.*rgba(248,246,241,0\.6[0-9]" --include="*.tsx" --include="*.jsx" --include="*.css" "$SRC" \
  | grep -v "background\|border\|box-shadow" || true)
if [ -n "$MATCHES" ]; then
  echo "  REVIEW (acceptable for fine-print/footer/caption ONLY):"
  echo "$MATCHES" | sed 's/^/    /'
else
  echo "  OK — none found"
fi
echo ""

# ── 3. Cream text below 0.78 but above 0.69 (paragraph minimum — flag for review) ──
echo "[3] Cream text below paragraph minimum (rgba(248,246,241, 0.70–0.77)) — verify it's a caption/fine-print"
MATCHES=$(grep -rn "color.*rgba(248,246,241,0\.7[0-7]" --include="*.tsx" --include="*.jsx" --include="*.css" "$SRC" \
  | grep -v "background\|border\|box-shadow" || true)
if [ -n "$MATCHES" ]; then
  echo "  REVIEW (below paragraph minimum — must be caption/fine-print or fix to #F8F6F1):"
  echo "$MATCHES" | sed 's/^/    /'
else
  echo "  OK — none found"
fi
echo ""

# ── 4. Light-background navy text at very low opacity (< 0.30) ──
echo "[4] Low-opacity navy text on light backgrounds (rgba(11,31,58, < 0.30))"
MATCHES=$(grep -rn "color.*rgba(11,31,58,0\.[0-2][0-9]" --include="*.tsx" --include="*.jsx" --include="*.css" "$SRC" \
  | grep -v "background\|border\|box-shadow" || true)
if [ -n "$MATCHES" ]; then
  echo "VIOLATION:"
  echo "$MATCHES"
  VIOLATIONS=$((VIOLATIONS + 1))
else
  echo "  OK — none found"
fi
echo ""

# ── 5. Tailwind low-contrast text classes ──
echo "[5] Tailwind low-contrast text classes"
MATCHES=$(grep -rn "text-gray-[34]\|text-slate-[34]\|text-muted-foreground\|text-white/[3-6]" \
  --include="*.tsx" --include="*.jsx" "$SRC" || true)
if [ -n "$MATCHES" ]; then
  echo "VIOLATION:"
  echo "$MATCHES"
  VIOLATIONS=$((VIOLATIONS + 1))
else
  echo "  OK — none found"
fi
echo ""

# ── Result ──
if [ "$VIOLATIONS" -gt 0 ]; then
  echo "=== FAILED: $VIOLATIONS category/categories need attention ==="
  exit 1
else
  echo "=== PASSED — no violations found ==="
  exit 0
fi
