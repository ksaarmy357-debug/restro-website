## 2025-05-14 - Interactive Toggle Accessibility
**Learning:** Using semantic `<button>` elements for interactive toggles instead of `<div>` is critical for keyboard accessibility. However, changing the element type requires careful CSS resets (background, border, color, width) to preserve the original visual design. Additionally, `aria-expanded` and `aria-controls` are essential for screen reader users to understand the state and relationship of the toggled content.
**Action:** Always convert interactive toggles to `<button>` elements, synchronize their ARIA states in JavaScript, and apply `aria-controls` to link them with their target content IDs.

## 2025-05-14 - Focus Management in Transitioning Containers
**Learning:** When focusing an element inside a container that transitions into visibility (like a chatbot panel), a small delay (e.g., 100ms) is often necessary to ensure the element is ready to receive focus and the transition has sufficiently progressed.
**Action:** Implement `setTimeout` with a ~100ms delay when calling `.focus()` on elements within newly revealed or animated panels.
