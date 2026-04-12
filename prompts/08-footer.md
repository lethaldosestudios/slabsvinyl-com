# SLABS — SECTION PROMPT 08: FOOTER
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Site Footer** for slabsvinyl.com.

---

## What to Build

Dark ink-surface footer. Two zones: main content row and bottom bar. Clean and archival — no excess.

---

## Footer Layout

- `bg-ink` (`#141313`) full width
- Content: max-width 1280px centered, gutters `clamp(1.5rem,5vw,5rem)`
- `padding-top: clamp(4rem,6vw,6rem)`, `padding-bottom: 2rem`

---

## Main Content Row

- Desktop: `grid grid-cols-3 gap-16`
- Mobile: single column, stacked

### Column 1 — Brand

**Wordmark**
- Text: `"SLABS"` — `font-serif` italic, 24px, `text-cream`, `font-weight: 400`, `mb-4`

**Descriptor**
- Text: `"Deep Archive of New-Condition Physical Media"`
- Font: `font-display`, 11px, uppercase, `tracking-[0.05em]`, `text-cream/35`
- `max-w-[22ch]`, `mb-6`

**Social icons**
- Instagram: Lucide `Instagram`, 18px
- TikTok: Lucide `Music` as stand-in, 18px
- Both: `text-cream/40`, `flex gap-4`
- Hover: `text-cream/75`, `transition duration-micro`
- Open in new tab

### Column 2 — Explore

**Label**
- Text: `"EXPLORE"` — `font-display`, 10px, `font-weight: 600`, uppercase, `tracking-[0.10em]`, `text-cream/35`, `mb-4`

**Links** (stacked, `gap-3`)
- Shop, Collections, Crate, New Arrivals
- Font: `font-display`, 13px, `font-weight: 400`, `text-cream/55`
- Hover: `text-cream/85`, `transition duration-micro`

### Column 3 — Company

**Label**
- Text: `"COMPANY"` — same style as Explore label

**Links** (stacked, `gap-3`)
- Journal, About, Contact
- Same style as Explore links

---

## Divider

`border-top: 1px solid rgba(239,238,234,0.10)`, `mt-12 mb-6`

---

## Bottom Bar

- Desktop: `flex justify-between items-center`
- Mobile: stacked, centered
- All text: `font-display`, 11px, uppercase, `tracking-[0.04em]`, `text-cream/30`

**Left:** `"© 2026 Slabs Vinyl Supply"`

**Center:** `"slabsvinyl.com"`

**Right:** `"All records new condition, factory sealed."`

---

## Do Not
- No newsletter email input
- No cookie or legal link section
- No background texture, gradient, or pattern
- No sub-sections with lighter backgrounds — full `bg-ink` throughout
- No "Back to top" button
