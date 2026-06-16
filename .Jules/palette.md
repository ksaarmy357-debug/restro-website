## 2026-05-22 - Accessible Accordion Pattern
**Learning:** Implementing accessible accordions requires a specific semantic structure (`h3 > button`) and synchronized ARIA attributes (`aria-expanded`, `aria-controls`) to provide a consistent experience for both keyboard and screen reader users. Global focus indicators (`:focus-visible`) are essential for navigation clarity in high-contrast dark themes.
**Action:** Always use `<button>` for accordion headers and ensure `aria-expanded` is toggled via JavaScript. Use `:focus-visible` to provide clear feedback without affecting mouse users.
