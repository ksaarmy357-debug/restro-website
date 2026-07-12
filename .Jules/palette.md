## 2026-05-22 - Semantic Accordion Pattern
**Learning:** Using `div` with `onclick` or `cursor: pointer` for interactive elements like accordions excludes keyboard and screen reader users. The correct semantic pattern is `<h3><button>...</button></h3>` with ARIA attributes.
**Action:** Always use semantic `<button>` elements for toggles and manage `aria-expanded` and `aria-controls` for accessibility.
