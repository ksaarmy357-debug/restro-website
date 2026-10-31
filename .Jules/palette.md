## 2026-10-31 - Accessible Accordions and Heading Typography in Minimal CSS

**Learning:** When refactoring disclosure/accordion triggers into `<button>` elements nested inside `<h3>` headings for ARIA and keyboard accessibility, CSS typography rules targeting `h3` inside the previous container do not automatically cascade nicely or may lose font fidelity. Moving the heading styles (`Playfair Display`, `font-size`) directly to `.accordion-header` preserves visual hierarchy while satisfying assistive technology requirements.

**Action:** Whenever converting heading containers into heading-nested buttons, declare typography and reset properties on the button class itself and ensure focus visibility with high contrast against custom cursor overlays.
