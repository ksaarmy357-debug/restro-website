## 2026-05-22 - Accessible Accordion Implementation
**Learning:** Using semantic `<button>` elements inside `<h3>` tags for accordion headers provides native keyboard accessibility and correct screen reader hierarchy. Coupling this with `aria-expanded`, `aria-controls`, and `role="region"` creates a robust accessible component. Visible focus indicators are essential, especially when custom cursors might overlap standard browser outlines.
**Action:** Always refactor `div`-based interactive elements to semantic `<button>` or `<a>` tags and ensure ARIA states are synchronized in JavaScript.
