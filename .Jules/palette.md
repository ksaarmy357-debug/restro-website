## 2026-08-26 - Accordion Heading Button Hierarchy & Target Icon Selectors
**Learning:** In design systems where third-party icon libraries (such as Lucide) replace `<i>` tags with `<svg>` dynamically, CSS transition selectors targeting `i` fail for active state rotations. Additionally, nesting `<button>` inside `<h3>` requires explicit font inheritance so interactive regions maintain visual hierarchy.
**Action:** Target both `i` and `svg` selectors for icon state transitions, and apply `font-family: inherit` or explicit heading font family directly on resetting button elements.
