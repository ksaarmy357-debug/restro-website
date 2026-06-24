## 2026-06-24 - Semantic FAQ Accordions
**Learning:** Using generic `div` elements for interactive components like accordions makes them inaccessible to keyboard and screen reader users. Semantic HTML elements like `<button>` provide built-in focusability and ARIA roles that are essential for an inclusive experience.
**Action:** Always wrap accordion headers in `<h3>` and use a `<button>` for the trigger, ensuring ARIA attributes (`aria-expanded`, `aria-controls`) are synchronized with the component's state.
