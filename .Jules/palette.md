## 2024-05-13 - [Image-Only Card Links Accessibility]
**Learning:** Screen readers announce the full URL instead of a descriptive text for image-only links (like the album sleeves in `CatalogEntry`) if there's no visible text within the `<a>` tag or an `aria-label`. Decorative icons like arrows in links also get announced unless hidden with `aria-hidden="true"`.
**Action:** Always add descriptive `aria-label`s to links that wrap only images or visual elements. Hide decorative text/icons in links with `aria-hidden="true"`.
