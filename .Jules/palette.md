# Palette's Journal - Critical Learnings

## 2026-03-30 - Accordion Header Structure and CSS Rotations
**Learning:** Converting interactive accordion headers from `<div>`s to `<button>` elements requires explicitly resetting button default styles (background, border, font-family, width, text-align) and moving heading-level styling to the button. Additionally, third-party icon libraries (such as Lucide) replace `<i>` tags with `<svg>` elements dynamically; CSS selectors for active states (like rotation) must target both `.accordion-header i` and `.accordion-header svg`.
**Action:** When converting accordion headers to buttons, ensure complete button style resets, proper ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`), and include both `i` and `svg` in CSS transition selectors.
