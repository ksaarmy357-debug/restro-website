## 2026-05-22 - Accessible Accordion & Focus Management
**Learning:** The proper semantic pattern for accordions is `<h3><button aria-expanded="..." aria-controls="...">Title</button></h3>`. Putting a heading inside a button is invalid HTML. Additionally, when opening a panel (like a chatbot), focusing the first interactive element (e.g., input) with a small delay (to allow for transitions) significantly improves the experience for keyboard users.
**Action:** Always wrap accordion toggles in appropriate heading levels and ensure focus management is handled when toggling modal-like components.
