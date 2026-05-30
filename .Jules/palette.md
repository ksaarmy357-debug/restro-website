## 2024-05-22 - [Accessibility & Focus Management]
**Learning:** Interactive elements implemented as `div` tags lack semantic meaning and keyboard focusability. Synchronizing `aria-expanded` states and managing focus (with a slight delay for transitions) significantly improves the experience for assistive technology users.
**Action:** Always use `<button>` for toggles, provide descriptive `aria-label`s, and implement focus management on modal/panel openings with a 100ms delay to account for CSS transitions.
