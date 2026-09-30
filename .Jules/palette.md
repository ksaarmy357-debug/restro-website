## 2026-03-29 - Accessible Floating Overlay Dialogs & Focus Restoration
**Learning:** Floating widget panels (like AI chatbots) need explicit ARIA roles (`role="dialog"`), attribute state management (`aria-expanded` and `aria-hidden`), automatic focus management upon activation, Escape key dismissability, and focus restoration to prevent keyboard trap and context loss.
**Action:** When creating or enhancing floating dialog overlays, always link toggle button and panel via `aria-controls`, auto-focus input on open, and handle `Escape` to close and return focus to toggle.
