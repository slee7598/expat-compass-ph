# Expat Compass PH — Claude Code Instructions

## CRITICAL: Steve's Personal Content Rules

Steve Lee is the founder of Expat Compass PH. He lives in Punta Engaño, Mactan Island, Cebu, Philippines.

### NEVER do any of the following:
- Rewrite, paraphrase, summarize, or "improve" Steve's personal notes
- Add details, facts, costs, locations, or experiences that Steve did not provide
- Fabricate any personal experience, cost, location, date, or recommendation
- Change Steve's voice, tone, or casual writing style
- Add generic expat advice inside a Steve's Note section
- Invent quotes, statistics, or anecdotes attributed to Steve

### ALWAYS do the following:
- Use Steve's exact words when his personal notes are provided
- If content is missing for a section, leave a clear placeholder: [Steve's Note Coming Soon]
- Never fill a missing Steve's Note with invented content
- Treat every word in a Steve's Note as sacred — only Steve can change it

### What Steve's Notes are:
Steve's Notes are first-person accounts of Steve's real, lived experiences in the Philippines. They are the most valuable content on the site. They cannot be improved by AI. They can only be preserved exactly as written or left blank until Steve provides them.

## CRITICAL: Text Legibility on Dark Backgrounds

**THIS RULE HAS BEEN VIOLATED MULTIPLE TIMES DESPITE BEING DOCUMENTED.** Every single future task that touches any CSS, any text color, or any new component MUST run the verification grep before being reported complete — no exceptions, no assumptions that "this file probably doesn't need checking."

Any text rendered on a dark background (navy #0B1F3A, #0D1E30, or any similar dark surface) MUST use color #FFFFFF (white) or #F8F6F1 (cream) ONLY.

### NEVER do the following:
- Use gray, muted, or reduced-contrast text colors on dark backgrounds
- Use low-opacity values below 0.78 for any readable text on a dark background (fine-print floor is 0.60)
- Apply Tailwind classes like `text-gray-400`, `text-gray-500`, `text-slate-400`, `text-muted-foreground` on dark sections
- Use `rgba(248,246,241,0.5)` or lower opacity on dark backgrounds
- Accept component defaults that produce muted text on dark surfaces
- Copy-paste CSS from another page without checking that the values meet the floor

### Acceptable values on dark backgrounds:
- `#F8F6F1` — cream, primary body text (preferred — use this unless you have a reason not to)
- `#FFFFFF` — pure white
- `rgba(248,246,241,0.78)` — warm body text, minimum for paragraph content
- `rgba(248,246,241,0.60)` — absolute minimum for fine-print / footer / captions ONLY
- `#C9A84C` — gold accent, always acceptable
- `rgba(201,168,76,*)` — gold at any opacity, always acceptable

### MANDATORY pre-completion verification — run this every time:

Before reporting any task complete that touches CSS or component text, run:

```bash
npm run check-contrast
```

Or manually grep for violations:

```bash
# Dark-bg cream text below paragraph minimum (must be <= 0.77 to be flagged — below 0.78)
grep -rn "color.*rgba(248,246,241,0\.[0-7][0-7]" --include="*.tsx" --include="*.jsx" --include="*.css" src/ | grep -v "background\|border\|box-shadow"

# Anything below the absolute fine-print floor (0.60)
grep -rn "color.*rgba(248,246,241,0\.[0-5]" --include="*.tsx" --include="*.jsx" --include="*.css" src/ | grep -v "background\|border\|box-shadow"

# Low-opacity navy on light backgrounds
grep -rn "color.*rgba(11,31,58,0\.[0-2]" --include="*.tsx" --include="*.jsx" --include="*.css" src/ | grep -v "background\|border\|box-shadow"
```

Zero violations must be confirmed before any commit. The pre-commit hook at `.git/hooks/pre-commit` will also block commits that introduce violations in staged CSS/TSX files.

## MANDATORY: BodyText Component for All Body Paragraphs

A shared `BodyText` component at `src/components/BodyText.tsx` enforces correct text color for all body paragraphs. It accepts a `variant` prop of `'dark-bg'` or `'light-bg'` and applies the correct brand color via inline style — always overriding any CSS class color.

**ALL new body text MUST use `<BodyText variant="...">`. Raw `<p>` tags with manually-specified text colors are NOT permitted anywhere in this codebase. This applies to every future edit, every new page, every new callout box — no exceptions, no overrides, checked before ANY commit.**

- `variant="dark-bg"` → applies `#F8F6F1` (cream, for dark navy sections)
- `variant="light-bg"` → applies `#1A1A1A` (near-black, for white/cream sections)
- The `style` prop on BodyText cannot accept `color` — TypeScript blocks this at compile time
- Heading text, gold label overlines, and accent text are exempt (these are not body text)
- Import: `import BodyText from '@/components/BodyText';`

## General Content Rules
- Do not rewrite page content unless explicitly asked
- Do not add new sections without being asked
- Do not change existing copy without being asked
- When in doubt, ask before changing anything personal

## Site Identity
- Site name: Expat Compass PH
- Owner: Steve Lee
- Location: Punta Engaño, Mactan Island, Cebu, Philippines
- Brand voice: Honest, direct, personal, premium
- Color palette: Navy #0B1F3A, Gold #C9A84C, Off-white #F8F6F1
