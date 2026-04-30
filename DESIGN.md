---
name: FORMS Corporate
version: beta
description: (주)폼즈 — AI Software · HW Quality · IoT Control. Production-grade corporate identity for AI, hardware, and IoT technology company.
design_source: "Claude Code Frontend Aesthetics Cookbook (claude-cookbooks/coding/prompting_for_frontend_aesthetics)"
role_tokens:
  Primary: "{colors.accent-cyan} (#00C9B1) — Main brand/action color for interactive elements"
  Secondary: "{colors.primary-800} (#1E3A5F) — Supporting navy for dark surfaces"
  CTA: "{colors.accent-warm} (#FF6B35) — High-contrast call-to-action (shifted from Primary per cookbook)"
  Background: "{colors.white} (#FFFFFF) — Light canvas; {colors.primary-900} for dark sections"
  Text: "{colors.neutral-900} (#1A1A2E) — Primary reading color on light; rgba(255,255,255,0.85) on dark"
colors:
  primary-900: "#0A1628"
  primary-800: "#1E3A5F"
  primary-700: "#2D5A8E"
  accent-cyan: "#00C9B1"
  accent-cyan-dark: "#00A38F"
  accent-blue: "#0099FF"
  accent-warm: "#FF6B35"
  accent-warm-light: "#FF8C42"
  accent-purple: "#6C5CE7"
  accent-purple-light: "#A29BFE"
  neutral-50: "#F8F9FA"
  neutral-100: "#E5E7EB"
  neutral-200: "#D1D5DB"
  neutral-400: "#9CA3AF"
  neutral-500: "#6B7280"
  neutral-700: "#374151"
  neutral-900: "#1A1A2E"
  white: "#FFFFFF"
  black: "#060E1A"
  success: "#059669"
  success-bg: "#ECFDF5"
  error: "#DC2626"
  error-bg: "#FEF2F2"
  tech-grid: "rgba(0, 201, 177, 0.04)"
  tech-grid-strong: "rgba(0, 201, 177, 0.08)"
typography:
  h1:
    fontFamily: "SUIT"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: "900"
    lineHeight: "1.15"
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "SUIT"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: "800"
    lineHeight: "1.3"
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "SUIT"
    fontSize: "1.5rem"
    fontWeight: "800"
    lineHeight: "1.35"
  h4:
    fontFamily: "SUIT"
    fontSize: "1.125rem"
    fontWeight: "700"
    lineHeight: "1.4"
  body-lg:
    fontFamily: "SUIT"
    fontSize: "1.125rem"
    fontWeight: "400"
    lineHeight: "1.8"
  body:
    fontFamily: "SUIT"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.75"
  body-sm:
    fontFamily: "SUIT"
    fontSize: "0.9375rem"
    fontWeight: "400"
    lineHeight: "1.65"
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: "600"
    lineHeight: "1.5"
    letterSpacing: "0.08em"
  caption:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: "0.12em"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.8125rem"
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0.02em"
rounded:
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
  '3xl': "96px"
  section: "140px 0"
shadows:
  card-base: "0 4px 24px rgba(0, 0, 0, 0.06)"
  card-hover: "0 20px 60px rgba(0, 0, 0, 0.12)"
  glow-cyan: "0 8px 32px rgba(0, 201, 177, 0.25)"
  glow-warm: "0 8px 32px rgba(255, 107, 53, 0.25)"
  glow-purple: "0 8px 32px rgba(108, 92, 231, 0.25)"
  hero-mockup: "0 30px 80px rgba(0, 0, 0, 0.2)"
components:
  button-primary:
    backgroundColor: "{colors.accent-warm}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
    typography: "body"
    fontWeight: "700"
    shadow: "{shadows.glow-warm}"
    hoverGlow: true
  button-outline:
    borderColor: "rgba(255, 255, 255, 0.2)"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
    typography: "body"
    fontWeight: "700"
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.8)"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    shadow: "{shadows.card-base}"
    hoverLift: "translateY(-8px)"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxxl}"
    shadow: "{shadows.card-base}"
    hoverLift: "translateY(-8px)"
    gradientBorder: true
  widget-card:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xxl}"
    border: "1px solid rgba(0, 201, 177, 0.12)"
    gridOverlay: true
    shadow: "{shadows.card-base}"
    hoverLift: "translateY(-6px)"
  tech-tag:
    backgroundColor: "rgba(0, 201, 177, 0.1)"
    textColor: "{colors.accent-cyan}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    typography: "mono"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.md}"
    height: "56px"
    padding: "16px 20px"
    borderColor: "{colors.neutral-200}"

## Overview

FORMS corporate identity presents a **modern IT engineering company** aesthetic. The design language blends technical precision with visual clarity: subtle grid backgrounds (circuit-board inspired), monospace typography for code-like labels and tags, dark-themed hero sections with data-visualization elements, and dashboard-style widget cards. The palette anchors in a deep navy base (trust, enterprise-grade) with electric cyan (AI/software innovation) and warm orange (hardware precision) as accent colors. JetBrains Mono adds a terminal/code aesthetic to labels, tags, and stats. The overall feel is professional, technical, and data-driven — an IT company that communicates expertise through structured, systematic design.

**Design Source:** [Claude Code Frontend Aesthetics Cookbook](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb) — production-grade, context-aware aesthetic guidelines for distinctive interfaces.

## Colors

- **Primary (#0A1628 → #1E3A5F):** Deep navy gradient — conveys trust, technical depth, and enterprise-grade reliability. Used as background for dark/tech sections.
- **Accent Cyan (#00C9B1):** Vibrant teal — represents AI/software innovation, clean energy, and digital transformation. Primary interactive color.
- **Accent Blue (#0099FF):** Added for IT/aesthetic data visualization elements.
- **Accent Warm (#FF6B35):** Energetic orange — signals hardware expertise, precision engineering, and actionable energy. **Primary CTA color per cookbook.**
- **Accent Purple (#6C5CE7):** Used for IoT section — represents connectivity, intelligence, and smart ecosystems.
- **Neutral (#F8F9FA → #1A1A2E):** Warm-to-cool gray scale — backgrounds, text hierarchy, and subtle borders.
- **Tech Grid (rgba cyan 0.04/0.08):** Subtle grid overlay pattern for dark sections, evoking circuit-board aesthetics.

## Typography (Cookbook: weight extremes)

All text uses **SUIT** (Korean-optimized font) with a clear hierarchy. Technical labels and tags use **JetBrains Mono** for a terminal/code aesthetic:

- **H1:** ExtraBold (900), clamp(2.5rem, 6vw, 4.5rem), tight letter-spacing — hero headlines
- **H2:** ExtraBold (800), responsive clamp — section titles
- **H3:** ExtraBold (800), 1.5rem — card headings
- **Body Large:** Regular (400), 1.125rem, generous line-height — narrative text
- **Body:** Regular (400), 1rem — standard content
- **Label:** Semi-bold (600) JetBrains Mono with wide letter-spacing — uppercase tags, metadata
- **Caption:** Medium (500) JetBrains Mono, tight tracking — UI micro-copy
- **Mono (JetBrains Mono):** Used for tech tags, code-like labels, stat numbers, and terminal elements

## Layout (Cookbook: generous vertical spacing)

- **Mobile-first responsive:** Breakpoints at 480px (small mobile), 768px (mobile), 1024px (tablet), 1200px (desktop max-width)
- **Container:** Max 1200px with 24px horizontal padding
- **Section padding:** 140px vertical on desktop, 96px tablet, 72px mobile
- **Grid:** CSS Grid for cards, stats, and two-column layouts
- **Flexbox:** Navigation, inline components, and alignment utilities
- **Tech Grid Background:** `background-image` with `linear-gradient` creating subtle circuit-board inspired grid on dark sections
- **Widget Cards:** Dark background cards with thin cyan borders, monospace tags, and grid overlay — dashboard-style presentation

## Components (Cookbook: soft corners 20-24px)

- **Buttons:** Pill-shaped (`border-radius: 9999px`), bold weight (700), primary uses accent warm with colored glow shadow. Radial expand effect on hover via `::before`.
- **Glass Cards:** Semi-transparent white, 1px border, backdrop blur (16px), rounded corners (24px), lift on hover (`translateY(-8px)`).
- **Widget Cards:** Dark navy (`--primary-900`) background, thin cyan border, grid overlay, monospace tags — dashboard-style cards for services and stats. 24px rounded corners.
- **Tech Tags:** Monospace font, cyan text on semi-transparent cyan background — used for labels like `AI`, `IoT`, `QUALITY`. Pill-shaped (`border-radius: 9999px`).
- **Input Fields:** 56px height, 20px rounded corners, clean borders, focus ring with accent cyan glow, error state in red.
- **Navigation:** Fixed header, transparent over hero, dark glass on scroll. Monospace nav links. Hamburger menu on mobile with full-screen overlay.
- **Hero Terminal:** Code-like decorative element showing tech stack or system info in monospace font. 24px rounded corners, multi-layered shadow.
- **Stats Counter:** Monospace large numbers with accent suffix (+, %), labels below, displayed as dashboard metrics. Lift on hover.

## Shadows (Cookbook: depth-focused multi-layered)

- **Card Base:** `0 4px 24px rgba(0, 0, 0, 0.06)` — subtle depth for base cards
- **Card Hover:** `0 20px 60px rgba(0, 0, 0, 0.12)` — pronounced lift effect
- **Hero Mockup:** `0 30px 80px rgba(0, 0, 0, 0.15)` — heavy floating simulation
- **Colored Glow:** `0 8px 32px rgba(color, 0.25)` — brand accent elevation (cyan/warm/purple)

## Borders & Gradients (Cookbook: transparent base with hover accents)

- Cards use `border: 1px solid transparent` as base that activates on hover
- Gradient top accents via `::before` pseudo-element, scaling on hover (`scaleX(0) → 1`)
- Consistent border-radius across interactive surfaces (20-24px standard, 9999px for buttons/tags)

## Animations (Cookbook: high-impact orchestrated sequences)

- **Staggered reveals:** Staggered `animation-delay` classes for page-load reveals
- **Scroll fade-ins:** Intersection Observer / GSAP ScrollTrigger driven (opacity + `translateY`)
- **Smooth curves:** `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion feel
- Hover transitions: 250ms with smooth transform and box-shadow changes

## Patterns & Decorations

- **Tech Grid:** `background-image: linear-gradient(rgba(0,201,177,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.04) 1px, transparent 1px)` with `background-size: 60px 60px`
- **Glow Orbs:** Large blurred circles (`filter: blur(80px)`) in accent colors for depth on dark sections
- **Circuit Lines:** Subtle horizontal/vertical lines with cyan dots at intersections

## Do's and Don'ts

✅ **Do:** Use the tech grid pattern consistently on dark sections. Keep monospace accents for labels/tags — it signals "engineering company". Let data/stats be prominent (dashboard-style). Use glow orbs sparingly for depth. Follow cookbook guidelines: bold typography weights, generous spacing, pill-shaped interactive elements, gradient border accents.

❌ **Don't:** Overuse the grid pattern on light sections (it loses contrast). Avoid pure black — always use deep navy (`--primary-900`). Don't make monospace the body text (it reduces Korean readability). Never stack more than 2 accent colors in one component. **Avoid generic AI aesthetics** — no Inter/Roboto fonts, no clichéd purple gradients on white, no mid-range weight pairings (400 vs 600).

## Frontend Aesthetics Cookbook Compliance

Integrated guidelines from [claude-cookbooks/coding/prompting_for_frontend_aesthetics](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb):

### Typography
- **Weight extremes:** Headings use 800-900 (not mid-range 400-600)
- **Size jumps:** H1 uses 3x+ scale from body text via clamp(2.5rem, 6vw, 4.5rem)
- **Contextual pairing:** SUIT (Korean body) + JetBrains Mono (tech labels/terminal/code)

### Colors
- **Dominant base + sharp accents:** Deep navy (#0A1628) paired with high-contrast cyan (#00C9B1), warm orange (#FF6B35)
- **No clichéd schemes:** Avoided purple gradients on white; used purposeful accent colors per section
- **CSS custom properties:** All colors tokenized in `:root` for consistency

### Layout & Spacing
- **Generous vertical padding:** 140px section padding (increased from 120px)
- **Container-based:** Max-width 1200px with centered content, responsive grid columns
- **Soft rounded corners:** Cards use 20-24px (`--radius-md/lg`), buttons/tags are fully pill-shaped

### Components
- **Cards:** Lift on hover (`translateY(-8px)`), depth-focused shadows (multi-layered)
- **Buttons:** Pill-shaped with radial glow effect on hover via `::before` pseudo-element
- **Inputs:** 56px height, soft corners, focus ring with colored shadow

### Borders & Shadows
- **Gradient accents:** Cards use `::before` for top gradient border that scales on hover
- **Multi-layered shadows:** Base + colored glow for elevated components (e.g., `--shadow-lg`, `--shadow-cyan-glow`)

### Animations
- **Smooth easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
- **Orchestrated reveals:** GSAP ScrollTrigger staggered animations
- **CSS-only hovers:** Transform + box-shadow transitions (no JS required)

## UI UX Pro Max Compliance

Integrated guidelines from [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill):

### Accessibility (WCAG AA)
- **Focus states:** `:focus-visible` with 2px cyan outline, 3px offset on all interactive elements
- **Skip link:** Hidden "본문으로 이동" link, appears on focus
- **ARIA landmarks:** `role="banner"` (header), `role="navigation"` (nav), `role="contentinfo"` (footer)
- **ARIA labels:** All sections have `aria-label`, decorative elements have `aria-hidden="true"`
- **Live regions:** Form status uses `role="alert" aria-live="polite"`
- **Menu toggle:** `aria-expanded` and `aria-controls` on hamburger button

### Contrast Ratios (≥ 4.5:1)
- Light mode text: `--neutral-700` (#374151) on white → 9.6:1
- Dark mode text: `rgba(255,255,255,0.78)` on `--primary-900` → ≥ 7:1
- Body text on light sections uses `--neutral-700` (not `--neutral-500`)

### Motion & Animation
- **Transitions:** All within 150-300ms range (`--transition-fast: 150ms`, `--transition-base: 250ms`, `--transition-slow: 300ms`)
- **prefers-reduced-motion:** Full media query disables all animations, particles, cursor blinks, and AOS/GSAP effects
- **Smooth hover states:** All interactive elements use `--transition-fast` or `--transition-base`

### Responsive Breakpoints (UI UX Pro Max standard)
- **375px:** Small mobile (max-width: 480px covers this)
- **768px:** Mobile breakpoint
- **1024px:** Tablet breakpoint
- **1440px:** Desktop max-width is `--container-max: 1200px`

### Interactivity
- **Cursor pointer:** Applied to all clickable elements (`.btn`, `.nav-list a`, `.service-card`, `.stat-widget`, footer links)
- **Hover states:** 150-300ms smooth transitions with `transform: translateY()` and `box-shadow` depth

### Icons
- Font Awesome 6 (SVG-based webfont) — no emojis used anywhere
