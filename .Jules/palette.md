# Palette's UX & Accessibility Journal

## 2026-10-28 - Heading Button Accordions with Dynamic SVG Icons
**Learning:** In this design system, accordions originally used non-interactive `div.accordion-header` containing `<h3>` elements. Converting them to `<h3><button>` requires transferring font properties (`font-family: Playfair Display`, `font-size: 1.5rem`) directly to the button element to maintain visual hierarchy. Furthermore, Lucide replaces `<i>` tags with `<svg>` elements dynamically in the DOM, so CSS transition selectors must target both `i` and `svg` selectors (`.accordion-header i, .accordion-header svg`).
**Action:** When refactoring interactive heading controls, always apply reset button styles, move heading font properties to the button, and target both `i` and `svg` tags for icon transforms.
