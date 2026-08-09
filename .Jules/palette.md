# Palette's Learning Journal - Zestro UX & Accessibility

## 2026-03-29 - Accessible Accordion Semantic & Interactivity Patterns
**Learning:** In the Zestro design system, when standard div-based accordion headers are converted to semantic buttons (`<h3><button type="button">...</button></h3>`), heading-specific styles (like `font-family: Playfair Display` and `font-size`) must be directly applied to the button element itself so that visual hierarchy is maintained. Moreover, to ensure smooth transitions as Lucide replaces standard `<i>` tags with SVGs dynamically, CSS transition selectors must explicitly target both `i` and `svg`. Finally, for single-open accordion behavior, ARIA attributes (`aria-expanded`) must be meticulously synchronized using string literals `'true'` or `'false'`.
**Action:** Always wrap accordion button contents properly, apply explicit `type="button"`, and transition both `i` and `svg` states.
