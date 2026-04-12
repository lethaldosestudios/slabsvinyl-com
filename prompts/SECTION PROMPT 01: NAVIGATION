# SLABS — SECTION PROMPT 01: NAVIGATION
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Site Navigation** component for slabsvinyl.com.

---

## What to Build

A sticky site header with a desktop nav bar and a full-screen mobile overlay. Two states: transparent (over hero) and filled (after scroll). React component with Tailwind CSS using only the tokens in the master config.

---

## Desktop Nav

### Structure (left to right)
```
[Wordmark]    [Shop] [Collections] [Crate] [Journal] [About]    [Search icon] [Cart icon + count]
```

### Measurements
- Height: 60px fixed
- Max width: 1280px centered, gutters `clamp(1.5rem, 5vw, 5rem)`
- Position: `fixed`, `top: 0`, `z-index: 50`, full width

### Wordmark
- Text: "SLABS"
- Font: `font-serif` (Instrument Serif), italic, 28px, `font-weight: 400`
- Color: `text-slabs-text` in filled state / `text-cream` in transparent state
- Links to: `/`
- Flat type only — not the textured wordmark asset

### Nav Links
- Font: `font-display`, `text-ui-nav` (14px), `font-weight: 400`, `tracking-[0.01em]`
- Color: `text-slabs-text-muted` filled / `text-cream/80` transparent
- Hover: 2px underline slides in from left, 160ms, color `forest`
- Active page: same 2px underline, persistent
- Links: Shop `/shop`, Collections `/collections`, Crate `/crate`, Journal `/journal`, About `/about`

### Icons (right side)
- Search: Lucide `Search`, 20px, stroke 1.5px
- Cart: Lucide `ShoppingBag`, 20px, stroke 1.5px
- Color: `text-slabs-text-muted` filled / `text-cream/80` transparent
- Cart badge: small square (not rounded), `bg-amber`, `text-ink`, `font-sans`, 10px bold — hidden when count is 0

### Scroll Behavior
- Default: `background: transparent`, no border
- After 80px scroll: `bg-slabs-surface` (`#EFEEEA`), `border-bottom: 1px solid slabs-border`
- Transition: `background 180ms cubic-bezier(0.25,0.1,0.25,1)`
- Use `useEffect` + `window.addEventListener("scroll")` to toggle a `scrolled` boolean

---

## Mobile Nav

### Trigger
- Lucide `Menu`, 24px, visible below 768px
- On click: opens full-screen overlay

### Full-Screen Overlay
- Background: `bg-ink` (`#141313`)
- `fixed inset-0 z-50`
- Close: Lucide `X`, 24px, `text-cream/60`, top-right, 24px from edges

### Overlay Links
- Font: `font-serif` italic, 36px, `font-weight: 400`
- Color: `text-cream`
- Stacked vertically, centered, `gap-8`
- Staggered fade-in + slide-up 12px on open: 60ms delay per item (item 1 = 0ms, item 2 = 60ms, etc.)
- Links: Shop, Collections, Crate, Journal, About

### Bottom Bar (persistent, mobile only)
- `fixed bottom-0`, `bg-ink`, `border-top: 1px solid dark-border`, height 56px
- Four icons evenly spaced: Shop (Lucide `Disc`), Crate (Lucide `Archive`), Search (Lucide `Search`), Cart (Lucide `ShoppingBag`)
- Each: icon 20px + label below in `font-display`, 9px, uppercase, `tracking-widest`

---

## Component Props

```ts
interface NavProps {
  cartCount: number;      // 0 = hide badge
  currentPath: string;    // for active link state
  transparent?: boolean;  // true when over hero
}
```

---

## Do Not
- No mega-menu or dropdowns
- No `backdrop-filter` blur — solid fill only
- No rounded cart badge — square only
- No colors outside the Tailwind config
- No inline search bar — icon only
