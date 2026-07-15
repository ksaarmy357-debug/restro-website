## 2026-07-15 - [Accessible Accordion Pattern]
**Learning:** The correct semantic pattern for accessible accordions is `<h3><button>...</button></h3>`. Placing a heading inside a button is invalid HTML. Heading-specific styles must be explicitly moved to the button to maintain visual hierarchy.
**Action:** Always use the button-inside-heading pattern for accordions and ensure all interactive states (aria-expanded, focus-visible) are correctly managed.
