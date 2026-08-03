# Palette's UX & Accessibility Journal

## 2026-08-03 - Accessible Accordion Semantic & ARIA Design
**Learning:** For a single-open accordion in this design system, using a custom cursor mix-blend-mode can obscure standard focus indicators. Standard div elements are completely inaccessible to screen reader and keyboard users. Proper accordion headings must follow the `<h3><button>` semantic layout, moving heading styles directly to the button element so screen readers can correctly identify the interactive context and headers maintain their visual hierarchy.
**Action:** Always implement the `<h3><button type="button">` semantic pattern with explicit `aria-expanded` and `aria-controls` attributes, synchronize all sibling elements to `'false'` string values on open, add `aria-hidden="true"` to decorative indicator icons, and style `:focus-visible` with high-contrast outlines like `var(--accent-amber)` and `outline-offset`.
