## 2026-07-08 - Accessible Accordion Pattern
**Learning:** Using `div` with `cursor: pointer` for accordions is a common anti-pattern that breaks keyboard navigation. The correct semantic pattern is `<h3><button>...</button></h3>` where the button handles the interaction and ARIA attributes (`aria-expanded`, `aria-controls`), and the content area has `role="region"` and `aria-labelledby`.
**Action:** Always implement accordions using buttons for headers and ensure ARIA states are programmatically synchronized in JavaScript.
