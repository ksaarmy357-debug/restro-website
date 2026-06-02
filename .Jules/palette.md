## 2026-06-02 - Chatbot Accessibility and Focus Management
**Learning:** Transitioning UI elements (like a sliding chatbot panel) need a small delay before focusing internal elements to ensure they are visible and ready to receive focus. Restoring focus to the trigger element when a modal or panel is closed is critical for maintaining the user's context in keyboard navigation.
**Action:** Always implement a ~100ms delay for focus when opening transitioning containers and ensure focus is returned to the original trigger upon closing.
