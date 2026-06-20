# Palette's Journal - Zestro

## 2026-05-20 - Accessible Accordions
**Learning:** Proper accordion semantics require a button wrapped in a heading, with aria-expanded and aria-controls to communicate state and relationship to screen readers.
**Action:** Use the <h3><button aria-expanded="false" aria-controls="content-id">...</button></h3> pattern with a role="region" on the content div.
