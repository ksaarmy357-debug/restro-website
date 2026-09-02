## 2026-09-02 - Chatbot Overlay Accessibility & Focus Management
**Learning:** Dialog/panel triggers require explicit ARIA attributes (`role="dialog"`, `aria-expanded`, `aria-hidden`, `aria-controls`, `aria-haspopup="dialog"`). When opening a floating panel/dialog, focusing the primary input after a slight delay ensures seamless screen reader and keyboard UX, and pressing `Escape` should return focus to the trigger button.
**Action:** Always pair panel toggle buttons with `aria-controls`, manage focus transitions dynamically, and support `Escape` key dismissal for all overlay/dialog controls.
