## 2026-03-31 - FAQ Accordion Button & SVG Transition Pattern
**Learning:** Accordion headers implemented as non-interactive `div` elements prevent keyboard navigation and screen reader controls. Moving heading styles directly onto `<button>` children inside `<h3>` and targeting dynamically generated `<svg>` elements alongside `<i>` ensures full keyboard access and smooth icon rotation transitions.
**Action:** Always wrap `<button type="button">` inside `<h3>` for accordions, bind `aria-expanded` and `aria-controls`, and include both `i` and `svg` selectors in CSS for dynamic icon libraries.
