## 2026-03-29 - Keyboard Navigation and Focus Management for Mobile Navigation Overlays

**Learning:** Replacing non-semantic `div` toggles with native `<button type="button">` elements along with `aria-expanded`, `aria-controls`, and `aria-haspopup="true"` ensures screen readers announce menu states correctly. Adding a global `Escape` key listener that closes active navigation overlays and explicitly restores focus to the toggle button maintains full keyboard navigation context.

**Action:** Whenever refactoring mobile menu or dialog toggles, implement native `<button>` elements with `aria-haspopup="true"`, dynamic `aria-expanded` updates, and an `Escape` key handler that restores focus to the trigger element.
