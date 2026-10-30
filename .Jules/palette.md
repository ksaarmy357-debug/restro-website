## 2026-03-30 - Chatbot Overlay Accessibility & Focus Management
**Learning:** Transitioning overlay panels (like floating chatbots) require both proper ARIA metadata (`aria-expanded`, `aria-controls`, `aria-haspopup`, `role="dialog"`) and explicit keyboard focus handling (delayed focus onto user input when opened, Escape key listener to close, and restoring focus to the trigger button on close) to be accessible to screen readers and keyboard users.
**Action:** When adding overlay dialogs or chat widgets, always couple ARIA attributes with focus management and Escape key dismissal listeners.
