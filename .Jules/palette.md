## 2026-03-30 - Accordion Icon Transformations with Dynamic SVG Libraries
**Learning:** When refactoring non-interactive accordion headers into semantic `<h3><button>` elements, dynamic icon libraries like Lucide asynchronously replace `<i>` elements with `<svg>` elements in the DOM. CSS rules targeting only `i` fail to animate icon rotation on toggle state changes.
**Action:** Always target both `i` and `svg` selectors (e.g. `.accordion-header i, .accordion-header svg`) for CSS transitions and transforms when working with dynamic icon libraries.
