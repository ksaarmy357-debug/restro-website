## 2026-10-09 - Accessible Accordion Structure and High-Contrast Focus States

**Learning:** Replacing non-interactive divs with native `<button>` elements wrapped inside `<h3>` headings drastically improves screen reader and keyboard accessibility for accordions. Furthermore, explicit focus indicators (`:focus-visible` with `outline-offset`) are vital when custom pointer animations/cursors are used.

**Action:** Always wrap accordion toggles in appropriate heading tags, apply `aria-expanded` and `aria-controls` attributes, and ensure high-contrast `:focus-visible` styles are declared.
