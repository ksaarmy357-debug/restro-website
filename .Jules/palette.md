## 2026-05-21 - Accessible Accordion Pattern
**Learning:** Replacing generic `div` containers with semantic `<button>` elements nested within `<h3>` headers correctly implements the WAI-ARIA accordion pattern. This ensures keyboard accessibility and provides clear state communication to screen readers via `aria-expanded`.
**Action:** Always use the `<h3><button>` structure for accordions, explicitly set `type="button"`, and provide high-contrast `:focus-visible` styles using the design system's accent colors.
