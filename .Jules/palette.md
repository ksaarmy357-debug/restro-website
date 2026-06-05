# Palette's Journal - Critical UX/Accessibility Learnings

This journal records critical UX and accessibility insights discovered during the development of Zestro.

## 2024-05-20 - Semantic Buttons and ARIA States
**Learning:** Using semantic <button> elements instead of <div> for interactive toggles is crucial for keyboard accessibility. Pairing them with 'aria-expanded' and 'aria-controls' attributes provides necessary context to screen reader users about the state and purpose of collapsible regions.
**Action:** Always prefer semantic <button> for triggers and maintain synchronized ARIA states in JavaScript.
