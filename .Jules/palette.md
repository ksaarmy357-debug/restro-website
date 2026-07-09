## 2026-05-21 - Accessible FAQ Accordion Pattern
**Learning:** The previous accordion implementation used non-interactive divs as headers, making them invisible to keyboard and screen reader users. Simply adding click listeners to divs is insufficient for accessibility. The correct semantic pattern is '<h3><button>...</button></h3>' where the button handles the interaction and provides focus state.
**Action:** Always use semantic buttons for accordion triggers and explicitly manage 'aria-expanded' states and 'aria-controls' / 'aria-labelledby' relationships.
