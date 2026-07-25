# Palette's Learning Journal

## 2026-03-31 - Accessible Accordions
**Learning:** Accordion headers must use the semantic `<h3><button>...</button></h3>` pattern instead of nested interactive tags or plain clickable `div` elements. Interactive accordion triggers should toggle state values using string literals `'true'` and `'false'` for ARIA boolean attributes (e.g., `aria-expanded`), and also link triggers to content with `aria-controls` / `aria-labelledby` so screen readers announce changes clearly.
**Action:** Always refactor custom-designed accordion lists to use native semantic `<button>` triggers wrapped in headers (like `h3`), with explicit ARIA regions, attributes, and precise CSS targeting both `i` and `svg` for smooth transitions.
