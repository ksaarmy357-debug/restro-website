## 2026-05-20 - Accessible Accordion Pattern
**Learning:** For single-open accordions, ensure the JavaScript logic explicitly synchronizes the 'aria-expanded' state of all sibling items to 'false' when a new item is opened. This prevents multiple items from appearing "expanded" to screen reader users even if they are visually hidden.
**Action:** Always include a loop or targeted selector to reset sibling ARIA states during toggle interactions.
