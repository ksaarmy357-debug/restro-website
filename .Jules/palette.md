## 2026-08-23 - Mobile Navigation Toggle Button & Focus Indicator UX
**Learning:** Converting `div` toggles to native `<button>` elements with clear `aria-label`, `aria-expanded`, `aria-controls`, and high-contrast `:focus-visible` styling ensures screen reader users and keyboard navigators can seamlessly control responsive navigation menus without affecting mouse visual design.
**Action:** Always replace unsemantic `div` toggles with `<button type="button">`, synchronize state with `aria-expanded`, and provide explicit `:focus-visible` styling.
