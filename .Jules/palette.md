## 2026-05-20 - [Accessible Accordion Pattern]
**Learning:** The correct semantic pattern for accessible accordions is '<h3><button>...</button></h3>'. Placing a heading tag inside a button is invalid HTML as buttons should only contain phrasing content. Additionally, content areas must have 'role="region"' and 'aria-labelledby' pointing to the ID of the triggering header button.
**Action:** Always use the button-inside-heading pattern and ensure all ARIA associations (controls, labelledby) and states (expanded) are explicitly managed in both HTML and JavaScript.

## 2026-05-20 - [PR Scope and Constraints]
**Learning:** The 'one micro-UX improvement' mandate is strictly enforced at the component level. Combining accessibility fixes for multiple distinct UI elements (e.g., FAQ, Mobile Menu, and Footer) in a single PR exceeds the 50-line constraint and violates the single-focus mandate, even if all changes are accessibility-related.
**Action:** Prioritize the most impactful component for improvement and keep the PR focused on that single interaction to ensure it remains under the 50-line limit and follows the 'one micro-UX' philosophy.
