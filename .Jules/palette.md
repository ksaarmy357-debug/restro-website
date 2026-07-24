## 2026-07-24 - Semantic Accordions and Keyboard Navigation

**Learning:** Replacing division-based interactive elements with semantic buttons ensures built-in keyboard accessibility (focus states, tab order, and screen reader announcements). When utilizing CSS triggers (like rotating icons on active accordion items), third-party CDNs or libraries (e.g., Lucide) replace `<i>` tags with `<svg>` nodes dynamically. Therefore, selectors must target both elements to preserve CSS transition and rotation effects.

**Action:** Always wrap accordion headers inside a semantic heading element (`<h3>`), convert active clickable items from `div` to `button type="button"`, and transition both `i` and `svg` selectors to prevent broken styling states when dynamic icon replacement occurs.
