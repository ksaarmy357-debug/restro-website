## 2026-06-07 - Focus Management in Transitioning Containers
**Learning:** When focusing elements inside transitioning containers (e.g., the chatbot panel), a small delay (e.g., 100ms via setTimeout) ensures the element is visible and ready to receive focus, preventing focus from being "lost" or failing in some browsers.
**Action:** Always implement a small delay when programmatically focusing elements inside containers that use CSS transitions for visibility/opacity.
