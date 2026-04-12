# SLABS — SECTION PROMPT 03: NEW ARRIVALS
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **New Arrivals** section for the slabsvinyl.com home page.

---

## What to Build

Product grid section showing the 8 most recently added records. Introduces the catalog aesthetic after the hero. Includes the reusable `<CatalogEntry />` card component used throughout the site.

---

## Section Layout

- `bg-paper` (`#F6F6F0`)
- Padding: `py-[clamp(4rem,8vw,8rem)]`
- Max width: 1280px centered, gutters `clamp(1.5rem,5vw,5rem)`

---

## Section Header (left-aligned)

**Overline**
- Text: `"NEW ARRIVALS"`
- Font: `font-display`, `text-ui-over` (10px), `font-weight: 600`, uppercase, `tracking-[0.12em]`
- Color: `text-slabs-text-faint`
- `mb-3`

**Heading**
- Text: `"Just dropped."`
- Font: `font-serif` italic, `text-display-sm`, `font-weight: 400`
- Color: `text-slabs-text`
- `mb-10`

---

## Product Grid

- Desktop: 4 columns / Tablet ≤1024px: 2 columns / Mobile ≤640px: 1 column
- `gap-4`
- Render 8 `<CatalogEntry />` cards using mock data below

---

## CatalogEntry Component

### Card structure
```
┌─────────────────────────────────┐
│       [ALBUM ART — square]      │  ← full-width, aspect-ratio 1/1
│  [vinyl disc slides out right]  │  ← image hover only
├──────────────┬──────────────────┤
│ 001          │ MARVIN GAYE      │
│ SOUL         │ WHAT'S GOING ON  │
│              │ TAMLA · 1971     │
│              │ T 310L           │
└──────────────┴──────────────────┘
```

### Image container
- `position: relative`, `overflow: visible` — CRITICAL, must not be hidden
- Entire `<a>` links to `/products/[slug]` — only interactive element on the card

### Vinyl disc (CSS only)
- `position: absolute`, `top: 5%`, `left: 5%`, `width: 88%`, `height: 88%`
- `z-index: 1` (behind sleeve), `border-radius: 50%` — only radius exception in codebase
- Background:
  ```css
  radial-gradient(circle at center,
    #1a1818 0%, #1a1818 15%, #2a2828 15%,
    #141313 40%, #1f1d1d 42%, #141313 44%,
    #1f1d1d 46%, #141313 100%)
  ```
- Default: `translateX(0%)` — tucked behind sleeve
- On image-link hover: `translateX(55%)` — disc emerges right
- Transition: `transform 300ms cubic-bezier(0.25,0.1,0.25,1)`

### Album sleeve
- `position: relative`, `z-index: 2`, `aspect-ratio: 1/1`, `overflow: hidden`
- `img`: `object-fit: cover`, `w-full h-full`

### Spec block
- `display: grid`, `grid-template-columns: 56px 1fr`
- `padding: 10px 12px 12px`
- `border-top: 1px solid` divider alpha

**Left column (56px)**
- `border-right: 1px solid` divider alpha, `padding-right: 8px`
- Font: `font-display`, 11px, `font-weight: 400`, `tracking-[0.04em]`, uppercase
- Color: `text-slabs-text-faint`
- Two lines: index number + genre

**Right column**
- `padding-left: 10px`
- Font: `font-display`, 11px, `font-weight: 400`, `tracking-[0.04em]`, uppercase
- All four lines same size/weight — NO hierarchy
- Artist: `text-slabs-text` (#141313)
- Title, Label·Year, Cat.No.: `text-slabs-text-muted` (#4E4843)
- Each line: `display: block`

### Card container
- `border: 1px solid slabs-border`, `bg-slabs-surface`
- `cursor: default` — card itself is not a link
- Hover: `translateY(-3px)`, shadow `0 4px 16px rgba(20,19,19,0.08)`, `transition 200ms ease-analog`

### Sold-out state
- `filter: saturate(0.7)` on sleeve img
- Status label "Gone": `font-display`, 10px, `font-weight: 600`, `tracking-[0.10em]`, uppercase, `text-wax`
- No background, no border on the label — plain text only

### Props
```ts
interface CatalogEntryProps {
  index: string;
  genre: string;
  artist: string;
  title: string;
  label: string;
  year: string;
  catalogNumber: string;
  imageUrl: string;
  slug: string;
  inStock: boolean;
}
```

### Mock data (8 records)
```ts
const records = [
  { index:"001", genre:"Soul",    artist:"Marvin Gaye",      title:"What's Going On",          label:"Tamla",    year:"1971", catalogNumber:"T 310L",    slug:"marvin-gaye-whats-going-on",          inStock:true  },
  { index:"002", genre:"Funk",    artist:"James Brown",      title:"Sex Machine",               label:"King",     year:"1970", catalogNumber:"KSD 1115",  slug:"james-brown-sex-machine",             inStock:true  },
  { index:"003", genre:"Jazz",    artist:"Miles Davis",      title:"Kind of Blue",              label:"Columbia", year:"1959", catalogNumber:"CL 1355",   slug:"miles-davis-kind-of-blue",            inStock:true  },
  { index:"004", genre:"R&B",     artist:"Aretha Franklin",  title:"Young Gifted and Black",    label:"Atlantic", year:"1972", catalogNumber:"SD 7213",   slug:"aretha-franklin-young-gifted-black",  inStock:true  },
  { index:"005", genre:"Reggae",  artist:"Burning Spear",    title:"Marcus Garvey",             label:"Island",   year:"1975", catalogNumber:"ILPS 9377", slug:"burning-spear-marcus-garvey",         inStock:false },
  { index:"006", genre:"Latin",   artist:"Celia Cruz",       title:"Tremendo Cache",            label:"Vaya",     year:"1975", catalogNumber:"VS-63",     slug:"celia-cruz-tremendo-cache",           inStock:true  },
  { index:"007", genre:"Gospel",  artist:"Mahalia Jackson",  title:"How I Got Over",            label:"Columbia", year:"1976", catalogNumber:"PC 34073",  slug:"mahalia-jackson-how-i-got-over",      inStock:true  },
  { index:"008", genre:"Hip-Hop", artist:"Eric B. & Rakim",  title:"Paid in Full",              label:"4th & B'way", year:"1987", catalogNumber:"MCA-42248", slug:"eric-b-rakim-paid-in-full",       inStock:true  },
]
```

---

## Section Footer

Right-aligned, `mt-8`:
- Link: `"View all new arrivals"` + `→`
- Font: `font-display`, 12px, uppercase, `tracking-[0.06em]`, `text-slabs-text-muted`
- Hover: `text-slabs-text`, gap to arrow widens to 10px

---

## Do Not
- No buy button anywhere on the card or in this section
- No price on the card — price lives on PDP only
- No overlay or tooltip on the album art
- No centered spec text — always left-aligned
- No colored card backgrounds on any state
