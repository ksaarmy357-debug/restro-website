## 2026-09-06 - Accessible Accordions and Icon Transitions with Dynamic SVGs

**Learning:** Replacing non-semantic accordion headers with `<h3><button>` elements provides proper keyboard navigation and screen reader support (`aria-expanded`, `aria-controls`, `role="region"`). Additionally, when using dynamic icon libraries like Lucide, `<i>` tags are converted into `<svg>` elements in the DOM, so CSS transition rules must target both `i` and `svg` to maintain smooth rotation effects.

**Action:** Always wrap accordion header buttons inside semantic heading tags (`<h3><button type="button">`), manage `aria-expanded` attributes explicitly with string literals `'true'`/`'false'`, and ensure CSS selectors for icons include both `i` and `svg`.
