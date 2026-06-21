## 2026-05-20 - Accessible Accordion Pattern
**Learning:** The correct semantic pattern for accessible accordions is `<h3><button>...</button></h3>`. Using a `div` or just a heading without a `button` makes the element unreachable via keyboard and invisible to screen reader interactive element lists. Additionally, for single-open accordions, it is critical to explicitly synchronize the `aria-expanded` state of all sibling items in JavaScript.

**Action:** Always wrap accordion triggers in a `<button>` inside a heading tag, and ensure `aria-expanded`, `aria-controls`, and `role="region"` are correctly implemented and updated via script.
