## 2026-06-25 - Accessible Accordion Pattern
**Learning:** The correct semantic pattern for accessible accordions is `<h3><button>...</button></h3>`. Placing a heading tag inside a button is invalid HTML as buttons should only contain phrasing content. Additionally, content areas must have `role="region"` and `aria-labelledby` pointing to the ID of the triggering header button.
**Action:** Always wrap accordion headers in a `<button>` element with appropriate `aria-expanded` and `aria-controls` attributes, and ensure the heading element is the parent of the button.
