## 2026-10-23 - Mobile Navigation Toggle Accessibility & Escape Key Reset
**Learning:** Converting non-interactive drawer toggles to buttons requires synchronizing aria-expanded attributes with keyboard focus management so that Escape closes the drawer and restores focus to the toggle button.
**Action:** Always pair aria-controls and aria-expanded on menu toggles with an Escape key listener that restores active focus.
