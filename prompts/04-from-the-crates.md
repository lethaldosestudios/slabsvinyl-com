# SLABS — SECTION PROMPT 04: FROM THE CRATES
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **From the Crates** feature section for the slabsvinyl.com home page.

---

## What to Build

Full-viewport scroll-hijacked card stack. 6 curated records. Each card has a front (album art) and a back (metadata + buy). Scrolling desktop / swiping mobile advances through cards. The site's most immersive interaction.

---

## Section Wrapper

- Full viewport: `w-full`, sticky scroll container
- Background: `bg-ink` (`#141313`) — section is always dark
- Progress indicator: top-right, `font-display`, 11px, `text-cream/50`, uppercase — e.g. `"3 / 6"`

---

## Card Front

One card = 100vw × 100vh.

### Background
- Full-bleed album cover: `object-fit: cover`, `w-full h-full`
- Gradient overlay bottom 45%:
  ```css
  linear-gradient(to top, #141313 0%, transparent 100%)
  ```

### Bottom-left content (over gradient)
- `position: absolute`, `bottom: 40px`, `left: clamp(1.5rem,5vw,5rem)`

**Artist name**
- Font: `font-serif`, NOT italic, `font-size: clamp(2.5rem,4vw,4rem)`
- Color: `text-cream`, `font-weight: 400`, `mb-2`

**Album title**
- Font: `font-serif` italic, `font-size: clamp(1.5rem,2.5vw,2.5rem)`
- Color: `text-cream/75`, `font-weight: 400`

### Scroll affordance
- Lucide `ChevronRight`, 24px, `text-cream/40`, bottom-center
- Loop: `translateX 0px → 6px → 0px`, 1800ms infinite

---

## Card Back

Full-viewport `bg-ink`. Triggered by tap/click on front or scrolling past midpoint.

### Layout
- Desktop: two columns, 55% left / 45% right
- Mobile: single column

### Left — Track Listing
- Section labels `"SIDE A"` / `"SIDE B"`: `font-display`, 10px, uppercase, `tracking-[0.10em]`, `text-cream/40`
- Tracks: track number + title + duration
- Font: `font-sans`, 13px, `text-cream/70`, `line-height: 1.8`
- Track number: `text-cream/35`, fixed width 28px

### Right — Metadata
All lines: `font-display`, 11px, uppercase, `tracking-[0.06em]`, `line-height: 1.8`
- Label column: `text-cream/40`
- Value column: `text-cream/70`
```
LABEL        [label name]
CAT. NO.     [catalog number]
YEAR         [year]
FORMAT       LP, 12"
```

### Right — Sonic Lineage
- Header: `"SONIC LINEAGE"`, `font-display`, 10px, uppercase, `tracking-[0.10em]`, `text-cream/40`, `mt-6 mb-3`
- Same two-column grid:
```
INFLUENCED BY    [artist] · [artist] · [artist]
INFLUENCED       [artist] · [artist] · [artist]
```
- Artist names: `text-dark-accent` (`#E8A830`) — amber is valid on dark surface
- Artist names are underline links → filter search

### Right — Price + CTA
- Price: `font-serif` italic, `text-display-sm`, `text-dark-accent`, `mt-8 mb-4`
- Primary CTA: `"Grab it"` — `bg-forest text-cream`, full width, `font-display` 13px uppercase `tracking-[0.06em]`
- Secondary: `"Keep digging →"` — `text-cream/50`, advances to next card

---

## Navigation Logic

- Desktop: scroll within pinned section advances cards
- Mobile: horizontal swipe advances cards
- Keyboard: arrow keys advance cards
- Transition: current card exits left `translateX(-100%)`, next enters from right `translateX(100%→0)`
- Duration: `600ms cubic-bezier(0.25,0.1,0.25,1)`

### End state (after card 6)
- Centered on dark surface:
- `"See everything in the crates."` — `font-serif` italic, `text-display-sm`, `text-cream`
- Below: `"Browse the full archive →"` → `/shop`, `text-cream/60`

---

## Mock Data (6 records)
```ts
const crateRecords = [
  { artist:"Marvin Gaye",      title:"What's Going On",          label:"Tamla",    year:"1971", catalogNo:"T 310L",    price:"$22.99", influencedBy:["Smokey Robinson","Curtis Mayfield"],           influenced:["D'Angelo","Maxwell","Frank Ocean"],            imageUrl:"/assets/placeholder-01.jpg" },
  { artist:"Aretha Franklin",  title:"Young, Gifted and Black",  label:"Atlantic", year:"1972", catalogNo:"SD 7213",   price:"$24.99", influencedBy:["Ray Charles","Sam Cooke","Clara Ward"],        influenced:["Whitney Houston","Mary J. Blige","Beyoncé"],   imageUrl:"/assets/placeholder-02.jpg" },
  { artist:"Fela Kuti",        title:"Zombie",                   label:"Coconut",  year:"1977", catalogNo:"PELP 018",  price:"$34.99", influencedBy:["James Brown","Miles Davis"],                   influenced:["Erykah Badu","Kendrick Lamar","Burna Boy"],    imageUrl:"/assets/placeholder-03.jpg" },
  { artist:"Cymande",          title:"Second Time Round",        label:"Janus",    year:"1973", catalogNo:"JXS 7022",  price:"$44.99", influencedBy:["Sly Stone","Funkadelic"],                      influenced:["De La Soul","Gang Starr","The Fugees"],        imageUrl:"/assets/placeholder-04.jpg" },
  { artist:"Roy Ayers",        title:"Everybody Loves the Sunshine", label:"Polydor", year:"1976", catalogNo:"PD 6070", price:"$28.99", influencedBy:["Herbie Hancock","Donald Byrd"],             influenced:["Erykah Badu","Common","A Tribe Called Quest"], imageUrl:"/assets/placeholder-05.jpg" },
  { artist:"Minnie Riperton",  title:"Perfect Angel",            label:"Epic",     year:"1974", catalogNo:"KE 33454",  price:"$19.99", influencedBy:["Stevie Wonder","Rotary Connection"],           influenced:["Mariah Carey","Jhené Aiko","SZA"],             imageUrl:"/assets/placeholder-06.jpg" },
]
```

---

## Do Not
- No autoplay or timer-based card advancement — user-controlled only
- No buy button on the card front — only on the card back
- No white text — use `text-cream` and `text-cream/70`
- No parallax on album art
- No social sharing buttons
