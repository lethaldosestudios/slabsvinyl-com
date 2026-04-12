# SLABS — SECTION PROMPT 02: HERO
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Home Hero** section for slabsvinyl.com.

---

## What to Build

Full-viewport hero. No photo, no background image. Pure type and wordmark asset on warm off-white. The emotional opening of the site.

---

## Layout

- `min-h-screen`, `bg-paper` (`#F6F6F0`)
- Content: vertically and horizontally centered, stacked column
- `pt-[60px]` to clear the fixed nav

---

## Content Stack (top to bottom, centered)

### 1 — Wordmark
- Element: `<img>` pointing to `/public/assets/wordmark-slabs-fuzzy.jpg`
- Alt: "Slabs Vinyl Supply"
- Width: `clamp(280px, 40vw, 560px)`, height auto
- No border, no shadow, no filter
- `mb-10`

### 2 — Tagline
- Text: `"Deep archive. New condition. No filler."`
- Font: `font-display`, `font-weight: 400`, `text-ui-h5` (16px)
- Color: `text-slabs-text-muted`
- `tracking-[0.04em]`, no italic, no uppercase
- `mb-10`

### 3 — CTA Pair
Side by side, `gap-3`:

**Button 1 — "Shop"**
- Border: `border border-slabs-text`, no fill
- Font: `font-display`, `text-ui-label` (12px), `font-weight: 600`, uppercase, `tracking-[0.08em]`
- Padding: `px-8 py-3`
- Hover: `bg-slabs-text text-cream`, `transition-colors duration-fast ease-analog`
- Links to: `/shop`

**Button 2 — "Dig the Crates"**
- Border: `border border-slabs-border`, no fill
- Same font/size/padding
- Color: `text-slabs-text-muted`
- Hover: `border-slabs-text-muted text-slabs-text`
- Links to: `/crate`

---

## Load Animation (once on mount, never repeats)

| Element | Delay | Duration | Motion |
|---|---|---|---|
| Wordmark | 0ms | 600ms | `opacity 0→1`, `scale 1.01→1.00` |
| Tagline | 400ms | 400ms | `opacity 0→1`, `translateY 8px→0` |
| CTA buttons | 700ms | 400ms | `opacity 0→1`, `translateY 8px→0` |

All easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`. Initial state: `opacity: 0`.

---

## Scroll Chevron
- Lucide `ChevronDown`, 20px, centered at bottom of viewport, `text-slabs-text-faint`
- Loop: `translateY 0px → 6px → 0px`, 2000ms infinite ease-in-out
- Fades out once user scrolls past 60px

---

## Do Not
- No background image, gradient, texture, or photo
- No colored accents or decorative shapes
- Both CTAs are ghost style — no solid fills in the hero
- No hero subtitle paragraph — tagline is the only supporting copy
- No video background
