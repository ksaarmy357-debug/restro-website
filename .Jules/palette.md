## 2025-05-15 - Synchronized ARIA States for Animated Toggles
**Learning:** In a UI with custom-built animated toggles (like the mobile menu and chatbot panel), CSS-only state management is insufficient for screen readers. Using semantic `<button>` elements and synchronizing `aria-expanded` and `aria-label` in JavaScript is critical for accessibility.
**Action:** Always use semantic buttons for toggles and manually update ARIA attributes in the toggle logic, especially when using GSAP or other animation libraries that don't natively handle accessibility states.

## 2025-05-15 - Focus Management in Transitioning Containers
**Learning:** When opening a hidden container with a CSS transition (like the chat panel), calling `.focus()` immediately often fails or occurs before the element is ready to receive input.
**Action:** Implement a 100ms `setTimeout` delay before focusing elements inside newly visible transitioning containers to ensure the browser successfully applies focus and the screen reader announces it correctly.
