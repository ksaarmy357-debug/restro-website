## 2026-06-25 - Accessible Accordions Pattern
**Learning:** For accessible accordions, the trigger should be a `<button>` inside a heading (`<h3>`). Interactive elements need `aria-expanded` and `aria-controls`, while content regions need `role="region"` and `aria-labelledby`. High-contrast `:focus-visible` styles are essential when custom cursors or complex backgrounds are present.
**Action:** Always use this semantic pattern for accordion components to ensure screen reader and keyboard compatibility.
