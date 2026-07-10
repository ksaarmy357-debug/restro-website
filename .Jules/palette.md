## 2026-05-18 - Accessible Accordion Pattern
**Learning:** This application used non-semantic `div` elements for accordion headers, making them inaccessible to keyboard and screen reader users. The correct pattern for this design system is `<h3><button type="button" class="accordion-header">...` which maintains visual hierarchy while providing standard interactivity.
**Action:** Always check interactive components for semantic HTML and ARIA attributes like `aria-expanded` and `aria-controls`. Ensure buttons have `type="button"` to avoid form submission side effects.
