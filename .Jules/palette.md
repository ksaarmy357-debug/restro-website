## 2026-06-18 - [Accessible Accordion Refactoring]
**Learning:** Using semantic `<button>` elements inside `<h3>` tags with correct ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`) is the gold standard for accessible accordions. It ensures screen readers correctly identify the interactive nature of the header and the relationship with the content.
**Action:** Always refactor `div`-based click handlers to semantic buttons and implement high-contrast `:focus-visible` styles to support keyboard users.

## 2026-06-18 - [Repository Hygiene]
**Learning:** Compiled artifacts (like `__pycache__`) and local logs can accidentally be included in PRs if not managed. Automated code reviews will block these as they bloat the diff and violate best practices.
**Action:** Always verify repository state before final submission, use `.gitignore` to prevent future leaks, and explicitly clean up temporary verification files.
