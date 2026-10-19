## 2026-03-30 - AI Assistant Chatbot Accessible Overlay Pattern
**Learning:** For floating overlay panels in this design system, smooth focus management requires delaying focus on the first interactive input by 100ms to allow CSS transitions to show the element before focusing, combined with full ARIA state management (`aria-expanded`, `aria-controls`, `aria-haspopup="true"`, `role="dialog"`).
**Action:** Whenever implementing modal or panel overlays, bind global 'Escape' key navigation and return focus to the toggle button upon closing.
