# Typography Design System
### Instrument Serif · Funnel Display · Funnel Sans

---

## Overview

| Font | Role | Source |
|------|------|--------|
| **Instrument Serif** | Headings & Hero text | Google Fonts |
| **Funnel Display** | Subheadings, Labels & Nav | Google Fonts |
| **Funnel Sans** | Body Copy & UI text | Google Fonts |

---

## Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Funnel+Display:wght@300..800&family=Funnel+Sans:wght@300..800&display=swap" rel="stylesheet">
```

```css
--font-serif:   'Instrument Serif', Georgia, serif;
--font-display: 'Funnel Display', 'Helvetica Neue', sans-serif;
--font-body:    'Funnel Sans', 'Helvetica Neue', sans-serif;
```

---

## Fluid Type Scale

All sizes use `clamp()`. **12px is the absolute floor — no text should render below this.**

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

## Type Styles

### Instrument Serif — Headings & Hero
**Display territory only. Never use below 24px.**

| Style | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display | 72–88px fluid | 400 | 1.03 | −0.025em |
| H1 | 48–56px fluid | 400 | 1.06 | −0.02em |
| H2 | 32–42px fluid | 400 | 1.10 | −0.015em |
| H3 | 24–30px fluid | 400 | 1.18 | −0.01em |
| H3 Italic | 24–30px fluid | 400 italic | 1.18 | −0.01em |

### Funnel Display — Subheadings, Nav & Labels

| Style | Size | Weight | Letter Spacing | Notes |
|---|---|---|---|---|
| H4 | 20px | 500 | −0.005em | Component headers |
| H5 | 16px | 500 | 0em | Card titles |
| Nav | 14px | 400 | +0.01em | Navigation links |
| Label | 12px | 600 | +0.08em | **Always UPPERCASE** |
| Overline | 11px | 600 | +0.12em | **Always UPPERCASE** |

### Funnel Sans — Body Copy & UI

| Style | Size | Weight | Line Height |
|---|---|---|---|
| Body Large | 18px | 400 | 1.70 |
| Body Default | 16px | 400 | 1.65 |
| Body Bold | 16px | 600 | 1.50 |
| Body Small | 14px | 400 | 1.60 |
| Caption | 12px ⚠️ min | 400 | 1.50 |
| Button | 14px | 600 | 1.0 |

---

## CSS Class Reference

```css
/* Instrument Serif */
.display { font-family: var(--font-serif); font-size: var(--text-hero); font-weight: 400; line-height: 1.03; letter-spacing: -0.025em; }
h1       { font-family: var(--font-serif); font-size: var(--text-3xl);  font-weight: 400; line-height: 1.06; letter-spacing: -0.02em; }
h2       { font-family: var(--font-serif); font-size: var(--text-2xl);  font-weight: 400; line-height: 1.10; letter-spacing: -0.015em; }
h3       { font-family: var(--font-serif); font-size: var(--text-xl);   font-weight: 400; line-height: 1.18; letter-spacing: -0.01em; }

/* Funnel Display */
h4        { font-family: var(--font-display); font-size: 20px; font-weight: 500; line-height: 1.25; }
h5        { font-family: var(--font-display); font-size: 16px; font-weight: 500; line-height: 1.30; }
.nav-link { font-family: var(--font-display); font-size: 14px; font-weight: 400; letter-spacing: 0.01em; }
.label    { font-family: var(--font-display); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
.overline { font-family: var(--font-display); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }

/* Funnel Sans */
body      { font-family: var(--font-body); font-size: var(--text-base); line-height: 1.65; }
.body-lg  { font-size: 18px; line-height: 1.70; }
.body-sm  { font-size: 14px; line-height: 1.60; color: var(--color-text-muted); }
.caption  { font-size: 12px; line-height: 1.50; letter-spacing: 0.01em; }
```

---

## The Three Zones

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

1. Never use Instrument Serif and Funnel Display at the same rendered size
2. Max 4–5 distinct type styles visible per page section
3. Strong hero formula: **Instrument Serif italic H1 + Funnel Display Overline** above it
4. Funnel Display H4 → Funnel Sans Body/Default is the most common component pattern
5. When in doubt, go one weight lighter

### Size Boundary Quick Reference

| Territory | Font | Min | Max |
|---|---|---|---|
| Hero / Display | Instrument Serif | 48px | 128px |
| Page Headings | Instrument Serif | 32px | 56px |
| Section / Card Headings | Instrument Serif | 24px | 30px |
| Subheadings | Funnel Display | 16px | 20px |
| UI (Nav, Labels) | Funnel Display | 11px | 14px |
| Body Copy | Funnel Sans | 16px | 18px |
| UI / Utility | Funnel Sans | 12px | 14px |

---

## Accessibility

- WCAG AA minimum: 4.5:1 for body text (16px), 3:1 for large text (24px+)
- 12px is the absolute floor — never use Caption for anything the user must read to understand the interface
- All uppercase text (Label, Overline) relies on letter spacing — never reduce specified values
- Instrument Serif at small sizes loses legibility quickly — respect the 24px floor strictly
- Test Funnel Sans at 12px in both light and dark mode before using Caption in production
