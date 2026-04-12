# Typography Design System
### Instrument Serif · Funnel Display · Funnel Sans

---

## Overview

This document defines the complete typography system for use across design and development. Three fonts are assigned distinct roles to create a clear hierarchy — an elegant editorial serif for display, a modern geometric sans for UI chrome, and a clean workhorse sans for body copy.

| Font | Role | Source |
|------|------|--------|
| **Instrument Serif** | Headings & Hero text | Google Fonts |
| **Funnel Display** | Subheadings, Labels & Nav | Google Fonts |
| **Funnel Sans** | Body Copy & UI text | Google Fonts |

---

## Font Loading

Add to `<head>` before your stylesheet:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Funnel+Display:wght@300..800&family=Funnel+Sans:wght@300..800&display=swap" rel="stylesheet">
```

### CSS Font Variables

```css
--font-serif:   'Instrument Serif', Georgia, serif;
--font-display: 'Funnel Display', 'Helvetica Neue', sans-serif;
--font-body:    'Funnel Sans', 'Helvetica Neue', sans-serif;
```

---

## Fluid Type Scale

All sizes use `clamp()` for fluid scaling across viewport widths. **12px is the absolute floor — no text should render below this.**

```css
--text-xs:    clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);  /* 12–14px  */
--text-sm:    clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);       /* 14–16px  */
--text-base:  clamp(1rem,     0.95rem + 0.25vw, 1.125rem);   /* 16–18px  */
--text-lg:    clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);     /* 18–24px  */
--text-xl:    clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);    /* 24–36px  ← H3 minimum */
--text-2xl:   clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);     /* 32–56px  ← H2 */
--text-3xl:   clamp(2.5rem,   1rem    + 4vw,    5rem);        /* 40–80px  ← H1 */
--text-hero:  clamp(3rem,     0.5rem  + 7vw,    8rem);        /* 48–128px ← Display */
```

---

## Complete Type Styles

### Instrument Serif — Headings & Hero

**Display territory only. Never use below 24px.**

| Figma Name | Size | Weight | Line Height | Letter Spacing | Use Cases |
|---|---|---|---|---|---|
| `Heading/Display` | 72–88px (fluid) | 400 | 1.03 | −0.025em | Hero, landing splash |
| `Heading/H1` | 48–56px (fluid) | 400 | 1.06 | −0.02em | Page title, article heading |
| `Heading/H2` | 32–42px (fluid) | 400 | 1.10 | −0.015em | Section heading, feature title |
| `Heading/H3` | 24–30px (fluid) | 400 | 1.18 | −0.01em | Card heading, sidebar block |
| `Heading/H3 Italic` | 24–30px (fluid) | 400 italic | 1.18 | −0.01em | Pull quotes, stylistic emphasis |

**Notes:**
- Only one weight is available (400) — hierarchy comes entirely from size, spacing, and italic
- Negative tracking is essential at large sizes; reduce as size decreases
- Lean into italic for emotional or stylistic moments — it's one of the font's strongest features
- Pairs best with generous surrounding whitespace

---

### Funnel Display — Subheadings, Nav & Labels

| Figma Name | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|
| `Subheading/H4` | 20px | 500 | 1.25 | −0.005em | Component headers, modal titles |
| `Subheading/H5` | 16px | 500 | 1.30 | 0em | Card titles, tight subheads |
| `UI/Nav` | 14px | 400 | 1.20 | +0.01em | Navigation links, menu items |
| `UI/Label` | 12px | 600 | 1.0 | +0.08em | Tags, badges — **always UPPERCASE** |
| `UI/Overline` | 11px | 600 | 1.0 | +0.12em | Eyebrows, section categories — **always UPPERCASE** |

**Notes:**
- The font's distinctive shifted stems become most expressive at 20px+ — embrace this at H4 and above
- Weight 300 (Light) works beautifully for large decorative numbers or stat callouts
- Always pair uppercase Label and Overline styles with increased letter spacing — never sentence case at 12px
- Avoid weight 700+ in running text; save heavy weights for UI accents

---

### Funnel Sans — Body Copy & UI

| Figma Name | Size | Weight | Line Height | Letter Spacing | Use Cases |
|---|---|---|---|---|---|
| `Body/Large` | 18px | 400 | 1.70 | 0em | Intro paragraphs, feature descriptions |
| `Body/Default` | 16px | 400 | 1.65 | 0em | Standard paragraphs, descriptions |
| `Body/Bold` | 16px | 600 | 1.50 | 0em | Inline emphasis, callouts, key terms |
| `Body/Small` | 14px | 400 | 1.60 | 0em | Metadata, helper text, secondary info |
| `Body/Caption` | 12px ⚠️ min | 400 | 1.50 | +0.01em | Image captions, timestamps, fine print |
| `UI/Button` | 14px | 600 | 1.0 | +0.01em | Buttons, CTAs |
| `UI/Input` | 16px | 400 | 1.40 | 0em | Form fields, search inputs |

**Notes:**
- 16px is the minimum for paragraph body copy — never go below for readable text
- Max line length: **65–72ch** for optimal readability (`max-width: 65ch` on the paragraph container)
- Use weight 400 for body, 600 for inline bold — avoid 700+ in body text contexts
- 12px (Caption) is the absolute minimum and should only be used for truly tertiary content

---

## CSS Class Reference

```css
/* === INSTRUMENT SERIF — Headings === */
.display { font-family: var(--font-serif); font-size: var(--text-hero); font-weight: 400; line-height: 1.03; letter-spacing: -0.025em; }
h1       { font-family: var(--font-serif); font-size: var(--text-3xl);  font-weight: 400; line-height: 1.06; letter-spacing: -0.02em; }
h2       { font-family: var(--font-serif); font-size: var(--text-2xl);  font-weight: 400; line-height: 1.10; letter-spacing: -0.015em; }
h3       { font-family: var(--font-serif); font-size: var(--text-xl);   font-weight: 400; line-height: 1.18; letter-spacing: -0.01em; }

/* === FUNNEL DISPLAY — Subheadings, Nav, Labels === */
h4         { font-family: var(--font-display); font-size: 20px; font-weight: 500; line-height: 1.25; }
h5         { font-family: var(--font-display); font-size: 16px; font-weight: 500; line-height: 1.30; }
.nav-link  { font-family: var(--font-display); font-size: 14px; font-weight: 400; letter-spacing: 0.01em; }
.label     { font-family: var(--font-display); font-size: 12px; font-weight: 600; letter-spacing: 0.08em;  text-transform: uppercase; }
.overline  { font-family: var(--font-display); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }

/* === FUNNEL SANS — Body === */
body       { font-family: var(--font-body); font-size: var(--text-base); line-height: 1.65; }
.body-lg   { font-size: 18px; line-height: 1.70; }
.body-sm   { font-size: 14px; line-height: 1.60; color: var(--color-text-muted); }
.caption   { font-size: 12px; line-height: 1.50; letter-spacing: 0.01em; }
.body-bold { font-size: 16px; font-weight: 600; line-height: 1.50; }
.btn-text  { font-size: 14px; font-weight: 600; letter-spacing: 0.01em; line-height: 1; }
```

---

## Figma Workflow

### Text Style Naming Convention

Use the `/` separator in Figma text style names to auto-create nested folders in the styles panel.

```
Heading/
  Display
  H1
  H2
  H3
  H3 Italic

Subheading/
  H4
  H5

UI/
  Nav
  Label
  Overline
  Button
  Input

Body/
  Large
  Default
  Bold
  Small
  Caption
```

### Figma-Specific Rules

- Set **line height as a percentage multiplier**, not a fixed px value (e.g., `106%` not `56px`) so it scales when you adjust size
- Funnel Display and Funnel Sans are both **variable fonts** — set any weight between 300–800 directly in the font weight field
- Instrument Serif has one weight (400) — use size, spacing, and italic to create hierarchy within serif headings
- Use `text-wrap: balance` equivalent in Figma by enabling **"Truncate Text → None"** and setting frames to **hug content**
- Never set body text frames to a fixed width smaller than ~520px — preserve the 65ch line length rule

---

## Typography Hierarchy Rules

### The Three Zones

```
ZONE 1 — DISPLAY (Instrument Serif)
  Sizes: 24px → 128px
  Rule: Serif only. Never in UI chrome or body copy.
  
ZONE 2 — UI CHROME (Funnel Display)
  Sizes: 11px → 20px
  Rule: Navigation, labels, subheadings. Never in paragraphs.

ZONE 3 — CONTENT (Funnel Sans)
  Sizes: 12px → 18px
  Rule: All paragraph text, helper text, UI form elements.
```

### Cross-Zone Rules

1. **Never use Instrument Serif and Funnel Display at the same rendered size** — keep them in visually distinct zones
2. **Max 4–5 distinct type styles visible per page section** — ruthlessly audit for style creep
3. A strong hero formula: **Instrument Serif italic H1 + Funnel Display Overline (uppercase)** above it
4. **Funnel Display H4 → Funnel Sans Body/Default** is the most common component pattern — subheading then description
5. When in doubt, go one weight lighter — the pairing works best when Funnel Display feels light relative to Instrument Serif

### Size Boundary Quick Reference

| Territory | Font | Min Size | Max Size |
|---|---|---|---|
| Hero / Display | Instrument Serif | 48px | 128px |
| Page Headings | Instrument Serif | 32px | 56px |
| Section / Card Headings | Instrument Serif | 24px | 30px |
| Subheadings | Funnel Display | 16px | 20px |
| UI (Nav, Labels) | Funnel Display | 11px | 14px |
| Body Copy | Funnel Sans | 16px | 18px |
| UI / Utility | Funnel Sans | 12px | 14px |

---

## Accessibility Notes

- **WCAG AA minimum:** 4.5:1 contrast ratio for body text (16px), 3:1 for large text (24px+)
- **12px is the absolute floor** — do not use `Body/Caption` for anything a user must read to understand the interface
- All uppercase text (`UI/Label`, `UI/Overline`) relies on letter spacing to remain legible — never reduce the `letter-spacing` values below what is specified
- Instrument Serif at small sizes loses legibility quickly — respect the 24px floor strictly
- Test Funnel Sans at 12px in both light and dark mode before using Caption style in production
