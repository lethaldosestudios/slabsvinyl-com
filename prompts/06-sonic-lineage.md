# SLABS — SECTION PROMPT 06: SONIC LINEAGE CALLOUT
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **Sonic Lineage Callout** section for the slabsvinyl.com home page.

---

## What to Build

Full-width typographic section. No images. Dark plum surface. Communicates the PRODUCER_NOTE differentiator — what makes Slabs different from every other vinyl store. One powerful quote + short paragraph + text CTA.

---

## Section Layout

- Background: `bg-plum` (`#322B55`) — full width
- Content: max-width 1280px centered, gutters `clamp(1.5rem,5vw,5rem)`
- Padding: `py-[clamp(4rem,8vw,8rem)]`
- Desktop: two columns `grid-cols-[60%_40%] gap-16`
- Mobile: single column

---

## Decorative Rule

Single 1px line at very top of section content:
- `border-top: 1px solid rgba(239,238,234,0.12)`, `mb-12`

---

## Left Column (60%) — The Quote

**Overline**
- Text: `"SONIC LINEAGE"`
- Font: `font-display`, 10px, `font-weight: 600`, uppercase, `tracking-[0.12em]`
- Color: `text-cream/40`
- `mb-6`

**Pull quote**
- Text: `"From Motown to MPC."`
- Font: `font-serif` italic, `text-display-lg`, `font-weight: 400`, `line-height: 1.06`
- Color: `text-cream`
- `mb-6`

**Sub-quote**
- Text: `"Every record in the archive carries its lineage."`
- Font: `font-serif` NOT italic, `text-display-sm` reduced to ~24px fixed
- Color: `text-cream/60`, `font-weight: 400`

---

## Right Column (40%) — Explanation

**Body paragraph**
- Text: `"The PRODUCER_NOTE field maps each record's place in music history — who influenced the artist, and who they went on to influence. It's how you find Cymande when you're looking for De La Soul source material. It's how collectors follow threads."`
- Font: `font-sans`, `text-body-sm` (14px), `line-height: 1.7`
- Color: `text-cream/65`
- `max-w-[55ch]`, `mb-8`

**CTA**
- Text: `"How sonic lineage works"`  with `→`
- Style: `font-display`, 12px, uppercase, `tracking-[0.06em]`, `text-cream/60`
- Hover: `text-cream/90`, gap to arrow widens

---

## Do Not
- No images or album art in this section
- No amber text — use cream variants only on plum background
- No card, panel, or box around any content — text floats on plum directly
- No centered body text — left-aligned only
- No button — CTA is a text link only
