## 2026-03-31 - Semantic Button Heading Nesting in Accordions
**Learning:** Placing headings inside `<button>` elements (e.g. `<button><h3>...</h3></button>`) is invalid HTML phrasing content and causes accessibility tree issues in screen readers. Instead, the `<button>` should be nested inside the heading (e.g. `<h3><button>...</button></h3>`), with heading styles moved to the button selector.
**Action:** Always wrap `<button>` elements inside `<h3>` tags for accordions and apply heading visual styles (`font-family`, `font-size`) directly to `.accordion-header`.
