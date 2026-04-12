# SLABS — SECTION PROMPT 05: COLLECTIONS
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Featured Collections** section for the slabsvinyl.com home page.

---

## What to Build

Editorial 3-card grid showing 3 featured collections. Asymmetric layout — one large card, two smaller stacked cards. Dark surface cards on a light background. Each card is an entry point to a collection.

---

## Section Layout

- `bg-paper` (`#F6F6F0`)
- Padding: `py-[clamp(4rem,8vw,8rem)]`
- Max width: 1280px centered, gutters `clamp(1.5rem,5vw,5rem)`

---

## Section Header (left-aligned)

**Overline**
- Text: `"FROM THE COLLECTION"`
- Font: `font-display`, 10px, `font-weight: 600`, uppercase, `tracking-[0.12em]`
- Color: `text-slabs-text-faint`
- `mb-3`

**Heading**
- Text: `"From the collection."`
- Font: `font-serif` italic, `text-display-sm`, `font-weight: 400`
- Color: `text-slabs-text`
- `mb-10`

---

## Grid Layout

- Desktop: `grid grid-cols-3 gap-4`
- Left column: one tall card spanning full height (`grid-row: span 2`)
- Right two columns: two smaller cards stacked with `gap-4`
- Mobile: single column, all cards same height, stacked

---

## Collection Card

### Visual
- Background: `bg-ink` (`#141313`)
- Large card: `aspect-ratio: 3/4`, min-height 480px
- Small card: `aspect-ratio: 4/3`
- Full-bleed cover art `object-fit: cover` with overlay:
  ```css
  linear-gradient(to top, rgba(20,19,19,0.92) 0%, rgba(20,19,19,0.30) 60%, transparent 100%)
  ```
- No border
- Hover: background image `scale(1.01)`, `transition 320ms ease-analog` — image only, text stays fixed

### Card content (bottom-left, over overlay)
- `position: absolute bottom-0 left-0 right-0`, `padding: 2rem`

**Collection name**
- Font: `font-serif` italic — 28px large card / 20px small card
- Color: `text-cream`, `font-weight: 400`, `mb-2`

**Descriptor**
- Font: `font-sans`, 13px, `line-height: 1.5`
- Color: `text-cream/65`
- Max 1 line, truncate with ellipsis
- `mb-4`

**Record count**
- Text: `"24 records →"`
- Font: `font-display`, 11px, uppercase, `tracking-[0.06em]`, `text-cream/50`
- Hover: `text-cream/80`, arrow shifts right 4px

### Card wrapper
- `position: relative`, `overflow: hidden`
- Full card is `<a href="/collections/[slug]">`

---

## Mock Data
```ts
const collections = [
  { slug:"late-night-funk",      name:"Late Night Funk",          descriptor:"Slow burns and deep pocket grooves",        count:31, imageUrl:"/assets/collection-funk.jpg",    size:"large" },
  { slug:"soul-club-1968-1975",  name:"Soul Club 1968–75",        descriptor:"Atlantic, Stax, Motown. The golden run.",    count:48, imageUrl:"/assets/collection-soul.jpg",    size:"small" },
  { slug:"rare-reggae",          name:"Rare Reggae Pressings",    descriptor:"Jamaican pressings, UK exports, hard to find", count:17, imageUrl:"/assets/collection-reggae.jpg", size:"small" },
]
```

---

## Do Not
- No light-colored cards — all collection cards are `bg-ink`
- No border on cards
- Scale the background image on hover only — text does not move
- No genre color coding or accent color borders
- No "Shop Collection" button — the entire card is the CTA
