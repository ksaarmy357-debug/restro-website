## 2026-07-14 - Accessible Accordion Semantic Pattern
**Learning:** For accessible accordions, the trigger should be a `<button>` nested inside a heading (`<h3>`). When converting from a `div` to a `<button>`, CSS must explicitly reset button defaults (background, border) and inherit typography (font-family, font-size) to preserve the original visual design.
**Action:** Always use `<h3><button type="button" aria-expanded="false">...</button></h3>` for accordion headers and ensure `:focus-visible` styles are high-contrast to compensate for custom cursors or blend modes.
