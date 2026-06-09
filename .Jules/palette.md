## 2026-06-09 - Accessible Accordion Pattern
**Learning:** In interactive layouts like FAQ accordions, using semantic `<button>` elements instead of `<div>` for headers is crucial for keyboard navigation and screen reader support. Adding `aria-expanded` and `aria-controls` provides necessary state information to assistive technologies.
**Action:** Always prefer semantic interactive elements (`<button>`, `<a>`) for clickable components and ensure ARIA attributes are synchronized with JavaScript state changes.
