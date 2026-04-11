# Slabs Vinyl Supply — Design System v2.0
### Updated April 2026 · All confirmed changes applied

> **What changed in v2:** Ink updated to `#141313`, contrast tokens recalibrated, two-column receipt spec layout finalized, vinyl hover bug corrected (slides out, not in), `border-radius: 0` enforced everywhere, card interaction locked to Option A (image → PDP only, no buy buttons in grid), filter strip redesigned as printed form, action hierarchy formalized.

---

## 1. Color System — Updated

### Core Change: Ink → `#141313`

The ink color has been updated from `#1A1816` to `#141313` (true near-black, slightly cooler). All semantic text tokens and dark mode backgrounds have been recalibrated against this.

### Contrast Fixes (Light Mode on `#F6F6F0` paper)

| Token | Old Hex | New Hex | Ratio on Paper | Status |
|---|---|---|---|---|
| `--color-text` | `#28231C` | `#141313` | 17.5:1 | ✅ AAA |
| `--color-text-muted` | `#6B6257` | `#4E4843` | 6.2:1 | ✅ AA |
| `--color-text-faint` | `#A09589` | `#6B6257` | 4.6:1 | ✅ AA (large/14px+) |
| `--color-amber` as text | `#CD9121` | **Restricted to dark bg only** | 2.9:1 | ❌ Removed from light text |

**Amber rule:** `#CD9121` is only used as text on dark surfaces. On light backgrounds, use `--color-forest` (`#204F41`) for prices and accents.

### Full CSS Variables — v2

```css
:root, [data-theme="light"] {
  --color-paper:    #F6F6F0;
  --color-cream:    #EFEEEA;
  --color-sleeve:   #CEC6B9;
  --color-forest:   #204F41;
  --color-amber:    #CD9121;
  --color-plum:     #322B55;
  --color-wax:      #9A181A;
  --color-caramel:  #B28B58;
  --color-ink:      #141313;

  --color-bg:             var(--color-paper);
  --color-surface:        var(--color-cream);
  --color-surface-muted:  var(--color-sleeve);
  --color-primary:        var(--color-forest);
  --color-accent:         var(--color-amber);   /* Use on dark bg only */

  --color-text:           #141313;
  --color-text-muted:     #4E4843;
  --color-text-faint:     #6B6257;

  --color-border:         rgba(20, 19, 19, 0.12);
  --color-divider:        rgba(20, 19, 19, 0.08);
  --color-error:          var(--color-wax);
  --color-price:          var(--color-forest);
}

[data-theme="dark"] {
  --color-bg:             #141313;
  --color-surface:        #242120;
  --color-surface-muted:  #323030;
  --color-primary:        #3D8468;
  --color-accent:         #E8A830;

  --color-text:           #EFEEEA;
  --color-text-muted:     #A09589;
  --color-text-faint:     #6B6257;

  --color-border:         rgba(239, 238, 234, 0.10);
  --color-divider:        rgba(239, 238, 234, 0.07);
  --color-error:          #C4332A;
  --color-price:          #E8A830;
}
```

---

## 2. Border Radius — Removed Everywhere

**Rule: `border-radius: 0` on all components.** No exceptions.

```css
*, *::before, *::after {
  border-radius: 0 !important;
}
```

The only exception: the vinyl disc uses `border-radius: 50%`. Nothing else.

---

## 3. Product Card — Two-Column Spec Layout

```
┌─────────────────────────────────────┐
│           [ ALBUM ART ]             │
│      [ vinyl slides out on hover ]  │
├──────────────┬──────────────────────┤
│ 001          │  MARVIN GAYE         │
│ SOUL         │  WHAT'S GOING ON     │
│              │  TAMLA · 1971        │
│              │  T 310L              │
└──────────────┴──────────────────────┘
```

```css
.catalog-entry {
  display: flex;
  flex-direction: column;
  border-radius: 0;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  cursor: default;
}

.entry-image-link {
  display: block;
  position: relative;
  overflow: visible;
  cursor: pointer;
}
.entry-image-link:hover .entry-vinyl { transform: translateX(55%); }

.entry-sleeve {
  position: relative;
  z-index: 2;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.entry-vinyl {
  position: absolute;
  top: 5%; left: 5%;
  width: 88%; height: 88%;
  z-index: 1;
  border-radius: 50%;
  transform: translateX(0%);
  transition: transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
  background: radial-gradient(
    circle at center,
    #1a1818 0%, #1a1818 15%,
    #2a2828 15%, #141313 40%,
    #1f1d1d 42%, #141313 44%,
    #1f1d1d 46%, #141313 100%
  );
}

.entry-spec {
  display: grid;
  grid-template-columns: 56px 1fr;
  padding: 10px 12px 12px;
  border-top: 1px solid var(--color-divider);
}

.entry-spec-left {
  font-family: var(--font-display);
  font-size: 11px; font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding-right: 8px;
  border-right: 1px solid var(--color-divider);
}

.entry-spec-right {
  font-family: var(--font-display);
  font-size: 11px; font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding-left: 10px;
}

.entry-spec-right span { display: block; }
.entry-spec-right .spec-artist { color: var(--color-text); }
```

---

## 4. Vinyl Hover — Corrected

Sleeve (`z-index: 2`) sits in front of vinyl disc (`z-index: 1`). Disc starts tucked behind sleeve at `translateX(0%)` and slides **right** on hover to `translateX(55%)`. Parent uses `overflow: visible`.

---

## 5. Filter Strip — Printed Form Style

```css
.filter-strip {
  display: flex;
  align-items: stretch;
  border: 1px solid var(--color-border);
  border-radius: 0;
  height: 36px;
}

.filter-strip-item {
  font-family: var(--font-display);
  font-size: 11px; font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-faint);
  padding: 0 16px;
  border-right: 1px solid var(--color-divider);
  background: none;
  transition: color 160ms ease;
}
.filter-strip-item:last-child { border-right: none; }
.filter-strip-item[aria-selected="true"] {
  color: var(--color-text);
  font-weight: 600;
  border-bottom: 2px solid var(--color-text);
  margin-bottom: -1px;
}
```

---

## 6. Action Hierarchy

| Level | Style | Use Case | Class |
|---|---|---|---|
| Primary | Solid forest bg, cream text | "Grab it" on PDP | `.btn-primary` |
| Secondary | 1px border, no fill | Secondary PDP actions | `.btn-ghost` |
| Tertiary | Arrow text link | "View all →" | `.link-arrow` |
| Quaternary | Underline text link | Editorial, sonic lineage | `.link-underline` |

```css
.btn-primary {
  font-family: var(--font-display);
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-cream);
  background: var(--color-forest);
  border: 1px solid var(--color-forest);
  border-radius: 0;
  padding: 14px 24px;
  width: 100%;
  transition: background 120ms ease, transform 120ms ease;
}
.btn-primary:active { transform: scaleY(0.97); background: #1a4035; }

.btn-ghost {
  font-family: var(--font-display);
  font-size: 12px; font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 0;
  padding: 10px 20px;
  transition: color 120ms ease, border-color 120ms ease;
}
.btn-ghost:hover { color: var(--color-text); border-color: var(--color-text-muted); }

.link-arrow {
  font-family: var(--font-display);
  font-size: 12px; font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 120ms ease, gap 120ms ease;
}
.link-arrow:hover { color: var(--color-text); gap: 10px; }
.link-arrow::after { content: "→"; }

.link-underline {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: var(--color-border);
  transition: text-decoration-color 120ms ease;
}
.link-underline:hover { text-decoration-color: var(--color-text-muted); }
```

---

## 7. Status Labels — Text Only, No Pills

```css
.status-label {
  font-family: var(--font-display);
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}
.status-label--new { color: var(--color-text-muted); }
.status-label--sold-out { color: var(--color-wax); }
.catalog-entry--sold-out .entry-sleeve img { filter: saturate(0.7); }
```

---

## 8. PDP Spec Block — Two-Column Ledger Format

```css
.pdp-meta {
  display: grid;
  grid-template-columns: 120px 1fr;
  border-top: 1px solid var(--color-divider);
  border-bottom: 1px solid var(--color-divider);
  padding: 16px 0;
  margin: 20px 0;
}
.pdp-meta-label, .pdp-meta-value {
  font-family: var(--font-display);
  font-size: 11px; font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.8;
}
.pdp-meta-label { color: var(--color-text-faint); }
.pdp-meta-value { color: var(--color-text-muted); }
```

---

## 9. Dark Mode — Updated Depth Scale

| Layer | Token | Hex | Use |
|---|---|---|---|
| Base | `--color-bg` | `#141313` | Page background |
| Surface | `--color-surface` | `#242120` | Cards, panels |
| Surface Muted | `--color-surface-muted` | `#323030` | Nested elements |
| Border | `--color-border` | `rgba(239,238,234,0.10)` | All dividers |

---

## 10. What Stays Unchanged

- Typography system — Instrument Serif / Funnel Display / Funnel Sans (see `typography-design-system.md`)
- Palette hex values — only `--color-ink` changed
- Spacing scale — 4px base unit
- Motion — `cubic-bezier(0.25, 0.1, 0.25, 1)`, same durations
- Grid — 4 col desktop / 2 col tablet / 1 col mobile; 1280px max content width
- Iconography — Lucide, 1.5px stroke, always `--color-text-muted`

---

*Design System v2.0 — April 2026*
*Supersedes color tokens and component specs from Blueprint v1.0*
*Typography: see `typography-design-system.md` (unchanged)*
