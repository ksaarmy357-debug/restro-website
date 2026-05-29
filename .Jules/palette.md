## 2025-05-15 - Timing Focus in Transitioning Panels
**Learning:** When focusing an element (like an input field) inside a container that uses CSS transitions or animations to appear, immediate `.focus()` calls may fail because the element is not yet "visible" or "interactable" according to the browser's accessibility tree or layout engine.
**Action:** Implement a small delay (e.g., 100ms via `setTimeout`) before calling `.focus()` on elements inside transitioning containers to ensure a smooth and reliable user experience.
