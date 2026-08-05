# Palette's UX Journal

## 2026-08-05 - Accessible Accordion Implementation
**Learning:** Standard interactive elements like accordions require semantic elements like `<button>` rather than `<div>` for full keyboard accessibility, clear ARIA states for screen readers (e.g. `aria-expanded` as explicit strings `"true"`/`"false"`), and consistent CSS focus outline states to guide keyboard users.
**Action:** When designing accordions, always wrap buttons in heading elements (`<h3><button type="button">...</button></h3>`), synchronize ARIA expanded states across siblings, and use `:focus-visible` with high-contrast outlines for interactive clarity.
