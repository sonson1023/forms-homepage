---
name: design
description: Apply DESIGN.md tokens to CSS — audit for stale values, refactor hardcoded colors/spacing/typography/font-family to CSS variables, enforce design-system consistency, and handle font migrations. Use when modifying stylesheets, adding new components, or changing fonts.
allowedTools:
  - read_file
  - write_file
  - edit
  - grep_search
  - glob
---

# Design Skill — DESIGN.md Token Enforcement

Audits CSS files against `DESIGN.md` tokens and refactors any stale or hardcoded values into CSS custom properties. Also handles font migrations (changing the typeface across the entire project).

## When to invoke

- Adding new sections/components to `style.css`
- After receiving feedback about inconsistent colors, spacing, or typography
- Before finalizing any CSS change that introduces literal hex codes, `px` spacing, or `rem` font sizes
- When the user requests a **font change** (swap the project's typeface)
- When integrating a new design system or updating DESIGN.md tokens

## Workflow

### 1. Load the design tokens

Read `DESIGN.md` (project root) to extract the full token catalog:

- **colors** → all color tokens under the `colors:` key
- **spacing** → all spacing tokens under the `spacing:` key
- **typography** → all font families, sizes, weights, line-heights, letter-spacing under the `typography:` key
- **rounded** → all border-radius tokens under the `rounded:` key
- **components** → composite token references under the `components:` key

Do NOT hardcode token names — derive them from whatever `DESIGN.md` contains in the current project.

### 2. Audit the CSS file

Run grep searches on the target CSS file (usually `css/style.css`) for:

| Pattern | What it finds | Replace with |
|---------|---------------|--------------|
| `#[0-9a-fA-F]{3,8}` (excluding inside rgba/hsla) | Hardcoded hex colors | matching color token from DESIGN.md |
| `padding:\s*\d+px` / `margin:\s*\d+px` / `gap:\s*\d+px` | Hardcoded spacing | matching `--spacing-*` token |
| `font-size:\s*\d+\.?\d*rem` | Hardcoded font sizes | matching `--*-font-size` token |
| `font-family:\s*` | Hardcoded font stacks | `var(--font-main)` (or whatever DESIGN.md defines) |
| `border-radius:\s*\d+px` | Hardcoded border radius | matching `--radius-*` token |
| `--[a-z]+-[a-z]+` (old variable names not in DESIGN.md) | Stale custom properties | current DESIGN.md token names |

### 3. Build the replacement map

Parse `DESIGN.md` to construct a **dynamic** value→token map:

**Colors:** For every entry under `colors:` in DESIGN.md:
- Map the hex value → `var(--{token-name})`
- Example: if DESIGN.md has `accent-teal: "#00C9B1"`, map `#00C9B1` → `var(--accent-teal)`

**Spacing:** For every entry under `spacing:`:
- Map the pixel value → `var(--spacing-{key})`

**Typography:** For every entry under `typography:`:
- Map the `fontSize` value → `var(--{key}-font-size)`
- Map the `fontFamily` value → `var(--font-main)` (or the variable name defined in `:root`)

**Rounded:** For every entry under `rounded:`:
- Map the pixel value → `var(--radius-{key})`

If a hardcoded value doesn't exist in DESIGN.md, choose the semantically closest token and flag it in the final report.

### 4. Apply replacements

Use the `edit` tool to replace stale values. Group edits by CSS section (e.g., Hero, About, Services) to minimize tool calls and preserve context.

Always include **at least 3 lines of context before and after** in the `old_string` to uniquely identify each replacement.

### 5. Verify

After all edits, run grep searches again to confirm zero stale values remain outside the `:root` block:

```
grep for #[0-9a-fA-F]{6} → should only appear in :root or inside rgba()/hsla()
grep for old variable names not in DESIGN.md → should be 0 matches
grep for font-size with raw rem values → should only be in :root
```

### 6. Report

Summarize what was replaced:
- Number of color replacements
- Number of spacing replacements
- Number of typography replacements
- Number of font-family replacements
- Any values that had no exact token match (and what you chose instead)

---

## Font Migration Workflow

When the user requests a font change, follow these steps:

### 1. Determine the new font

If the user hasn't specified a font, suggest options based on context:

| Use case | Recommendation |
|----------|---------------|
| Korean + English corporate | **Pretendard** (default), **SUIT**, **Jua**, **Black Han Sans** |
| English-only modern | **Inter**, **DM Sans**, **Plus Jakarta Sans** |
| English-only geometric | **Space Grotesk**, **Clash Display**, **General Sans** |
| Korean-friendly Google Fonts | **Noto Sans KR**, **Noto Serif KR** |
| Premium/designer feel | **Sony**, **Gmarket Sans**, **BM JUA** |

All recommended fonts are free/open-source and available via CDN or Google Fonts.

### 2. Update DESIGN.md

Modify the `typography:` section — change `fontFamily` on **every** typography entry to the new font:

```yaml
typography:
  h1:
    fontFamily: "NewFont, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    # ... other properties unchanged
```

### 3. Update the CSS `:root` variable

Change `--font-main` in `css/style.css` to reference the new font stack:

```css
--font-main: 'NewFont', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 4. Add the font import

Determine the best loading method:

| Font source | How to load |
|-------------|-------------|
| Google Fonts | `@import` or `<link>` in `index.html` |
| CDN (e.g. cdn.jsdelivr.net for Pretendard/SUIT) | `<link>` in `index.html` |
| Self-hosted | `@font-face` in CSS |

Add the font loading to `index.html` `<head>` (or CSS `@import` at the top of `style.css`).

### 5. Audit for hardcoded font-family declarations

Search `style.css` for any `font-family:` that does **not** use `var(--font-main)`:

```
grep_search: font-family:
```

Replace any hardcoded font stacks with `var(--font-main)`.

### 6. Verify font rendering considerations

When switching fonts, check:

- **Korean glyph support:** If the site has Korean text, the new font MUST support Hangul. If not, add `Noto Sans KR` as a fallback in the font stack.
- **Weight availability:** Verify the weights used in DESIGN.md (`fontWeight: 800`, `700`, etc.) are available in the new font. If a weight is missing, pick the nearest available weight and note it.
- **Line-height adjustment:** Different fonts have different x-heights. After the swap, if text feels cramped, suggest adjusting `lineHeight` in DESIGN.md typography entries.
- **Letter-spacing:** Condensed fonts may need looser tracking; wide fonts may need tighter. Flag if the current `letterSpacing` values look off with the new font.

### 7. Report the font change

Summarize:
- Old font → New font
- Loading method (Google Fonts / CDN / self-hosted)
- Weight mapping (any weights that changed)
- Files modified (`DESIGN.md`, `css/style.css`, `index.html`)
- Fallback strategy for Korean glyphs (if applicable)

---

## Rules

- **DESIGN.md is the source of truth** — never change hex values or token definitions unless explicitly asked
- **Dynamic over hardcoded** — always derive the replacement map from the actual DESIGN.md in the current project, never from memorized values
- **Semantic matching** — pick the semantically closest token, not just the visually closest one (e.g., a card background → `--white`, not `--neutral-50` unless it's intentionally alternate)
- **`rgba()` / `hsla()`** — keep functional notation when alpha is needed, but derive the base color from the token (e.g., `rgba(0, 201, 177, 0.1)` is fine because it derives from `--accent-cyan`)
- **Preserve structure** — never remove CSS comments, section dividers, or media query organization
- **Font changes are project-wide** — when changing fonts, update DESIGN.md, `:root`, all hardcoded `font-family`, and the HTML `<head>` import in one pass
