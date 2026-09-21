## 2026-09-21 - Heading Button Accordion Pattern & SVG Icon Rotation
**Learning:** Placing heading tags inside buttons produces invalid HTML. The proper accessible structure is `<h3><button>` with heading typography applied directly to the button element. Additionally, third-party libraries like Lucide replace `<i>` elements with `<svg>`, requiring CSS transition selectors to target both `i` and `svg`.
**Action:** Always structure accordions as `<h3><button type="button">` with `aria-expanded`, `aria-controls`, and `role="region"`, and target `.header i, .header svg` for icon rotation.
