# Palette's Journal - Critical Learnings

## 2026-05-21 - Accessible Accordion Pattern
**Learning:** For accessible accordions, the correct semantic pattern is `<h3><button>...</button></h3>`. Content regions should have `role="region"` and `aria-labelledby` pointing to the button's ID. When buttons contain icons, `aria-hidden="true"` should be added to the icon if the button already has text.
**Action:** Always use semantic buttons for toggles and synchronize `aria-expanded` state for all sibling items in single-open accordions.
