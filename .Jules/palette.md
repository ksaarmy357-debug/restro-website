# Palette's UX & Accessibility Journal

## 2026-11-01 - Accessible Accordions and Icon Transitions
**Learning:** Dynamic icon libraries like Lucide replace inline `<i>` tags with `<svg>` elements on load, meaning CSS transition selectors that only target `i` will fail after icon replacement. Furthermore, wrapping an interactive `<button>` inside an `<h3>` heading rather than using clickable `div`s or placing headings inside buttons provides the standard, accessible pattern for assistive technologies without breaking document outline semantics.
**Action:** Always structure accordions as `<h3><button ...>...</button></h3>`, target `.accordion-header i, .accordion-header svg` in CSS transitions, and ensure visible `:focus-visible` styling with high contrast.
