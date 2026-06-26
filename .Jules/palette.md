## 2026-06-26 - Semantic Accordion Accessibility
**Learning:** Converting interactive 'div' elements to semantic '<button>' elements inside headings is the standard pattern for accessible accordions. This provides native keyboard support (Enter/Space) and proper screen reader announcements when combined with ARIA attributes like 'aria-expanded', 'aria-controls', and 'role="region"'.
**Action:** Always wrap accordion triggers in a heading (h2-h6) and use a '<button type="button">' for the trigger to ensure accessibility and prevent unintended form submissions.
