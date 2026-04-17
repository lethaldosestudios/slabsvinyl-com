# AGENTS.md — Slabs Vinyl Supply
## slabsvinyl.com · Frontend Build Repo

Read this file before every task. These rules are non-negotiable.

---

## Component Build Status

Check this table before starting any task. Do not rebuild components that are already merged to `main`.

| # | Section | Component File | Status | PR |
|---|---|---|---|---|
| 1 | Nav | `Nav.tsx` | ✅ Merged to main | #19 |
| 2 | Hero | `Hero.tsx` | ✅ Merged to main | — |
| 3 | New Arrivals | `NewArrivals.tsx` | ✅ Merged to main | — |
| 4 | Featured Collections | `FeaturedCollections.tsx` | ✅ Merged to main | #22 |
| 5 | From the Crates | `FromTheCrates.tsx` | ❌ Not built | — |
| 6 | Sonic Lineage | `SonicLineage.tsx` | 🔄 In progress | feat/sonic-lineage |
| 7 | About Trust | `AboutTrust.tsx` | ⏳ Built, needs rebase | #10 |
| 8 | Footer | `Footer.tsx` | ✅ Merged to main | #22 |
| — | Dark Mode + ThemeToggle | `ThemeToggle.tsx` | 🔍 Under review | #21 |
| — | CatalogEntry | `CatalogEntry.tsx` | ✅ Merged to main | — |

**Legend:** ✅ Live on main · 🔄 Branch in progress · ⏳ PR open, needs rebase · 🔍 PR open, under review · ❌ Not started

---

## Repo Structure

```
slabsvinyl-com/
├── design-system/
│   ├── slabs-design-system-v2.md     ← Source of truth for all components
│   └── typography-design-system.md  ← Font system and type scale
├── prompts/
│   ├── 00-master-build-prompt.md    ← Full design system in prompt form — prepend to every task
│   └── 01-nav.md → 08-footer.md    ← Section build specs
├── src/
│   ├── app/                          ← Next.js App Router pages
│   ├── components/                   ← Output all components here
│   └── styles/globals.css
├── public/assets/                    ← Wordmark, album art, images
├── tailwind.config.js                ← All design tokens — use only these
└── AGENTS.md                         ← This file
```

---

## Before Every Task

1. Read this file (`AGENTS.md`) in full — especially the Component Build Status table above
2. Read `prompts/00-master-build-prompt.md` in full
3. Read the section prompt specified in the task
4. Read `/design-system/slabs-design-system-v2.md`
5. Read `/design-system/typography-design-system.md`

---

## Branch & PR Rules

- **Never commit directly to `main`**
- Create a new branch for every task: `feat/[section-name]`
- Open a PR when the task is complete — do not merge it yourself
- If asked to rebase an existing branch, force-push to the same branch — do not open a new PR
- Tests go in `src/components/__tests__/[ComponentName].test.tsx` using **Vitest** (not Jest)

---

## Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **Styling:** Tailwind CSS v3 — tokens in `tailwind.config.js`
- **Fonts:** Instrument Serif via `next/font/google`; Funnel Display + Funnel Sans via `<link>` tags in `layout.tsx` — do not change this
- **Icons:** Lucide React (already installed) — stroke 1.5px, never filled
- **Language:** TypeScript — all components `.tsx`
- **Testing:** Vitest — not Jest
- **No new dependencies** without explicit approval

---

## Homepage Section Order

When editing `src/app/page.tsx`, sections must appear in this exact order:

```
1. Nav
2. Hero
3. NewArrivals
4. FeaturedCollections
5. FromTheCrates       ← not yet built
6. SonicLineage        ← in progress
7. AboutTrust
8. Footer
```

Footer is also rendered in `layout.tsx`. Do not add it again to `page.tsx` unless explicitly instructed.

---

## Typography Rules

| Font | Tailwind class | Use |
|---|---|---|
| Instrument Serif | `font-serif` | Headings, hero, display — 24px minimum |
| Funnel Display | `font-display` | Nav, labels, overlines, UI chrome |
| Funnel Sans | `font-sans` | Body copy, paragraphs, captions |

- Never use Instrument Serif below 24px
- Funnel Display labels and overlines: always uppercase, always `tracking-[0.08em]` or higher
- Never use Inter, Roboto, Arial, or system fonts

---

## Color Rules

- Use only tokens defined in `tailwind.config.js`
- **Amber (`#CD9121`) on dark surfaces only** — never on light backgrounds
- Light mode prices and accents: `text-forest` (`#204F41`)
- Dark mode prices and accents: `text-dark-accent` (`#E8A830`)
- No hardcoded hex values in components
- Dark mode classes use `dark:` prefix with `dark-*` tokens only — e.g. `dark:bg-dark-bg`, `dark:text-dark-text`

---

## Hard Design Rules

- `border-radius: 0` on everything — cards, buttons, inputs, badges, modals, drawers
- **Only exception:** vinyl disc uses `rounded-full` — nothing else
- No drop shadows on cards except subtle hover state: `shadow-[0_4px_16px_rgba(20,19,19,0.08)]`
- No gradients on UI elements — gradients only on album art overlays
- No backdrop blur — solid fills only

---

## Product Card Rules

- Image `<a>` links to `/products/[slug]` — the only interactive element on the card
- No buy button, price, badge, or overlay in the product grid
- Vinyl disc: `z-index: 1`, sleeve: `z-index: 2`, parent: `overflow: visible`
- Disc slides **right** on hover: `translateX(0%)` → `translateX(55%)`
- Spec block: two-column grid, 56px left / 1fr right, all lines same size/weight

---

## Button Hierarchy

| Level | Class | Style |
|---|---|---|
| Primary | `.btn-primary` | `bg-forest text-cream` — PDP only |
| Secondary | `.btn-ghost` | `border border-slabs-border` no fill |
| Tertiary | `.link-arrow` | Text + `→`, no border |
| Quaternary | `.link-underline` | Underline only |

---

## Status Labels

- "New", "Gone", "Low" — plain text only
- No pill, no badge, no background, no border
- Font: `font-display`, 10px, uppercase, `tracking-[0.10em]`

---

## Output Rules

- Save all components to `/src/components/[ComponentName].tsx`
- Export as named component (not default export)
- Props interface defined at top of file
- Use Tailwind utility classes — no inline styles, no CSS modules
- No `style={{}}` attributes unless absolutely required for dynamic values (e.g. gradient overlays)
- Mobile-first responsive — `sm:`, `md:`, `lg:` breakpoints

---

*slabsvinyl.com · Design System v2.1 · April 2026*
