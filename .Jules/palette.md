## 2026-03-31 - Chatbot Dialog Focus Management & Accessibility
**Learning:** Transitioning overlay panels (like chatbot popups or floating dialogs) require programmatic focus management (`setTimeout` delay before focusing input on open, restoring focus to trigger button on close) and Escape key listener to ensure seamless keyboard navigation.
**Action:** Always pair `aria-expanded`, `aria-controls`, and `aria-haspopup="true"` with explicit focus management and `Escape` key handling on popups/dialogs.
