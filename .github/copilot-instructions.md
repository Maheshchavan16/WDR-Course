# Copilot / AI Agent Instructions

Short, actionable guidance for AI coding agents working on this repository.

## Project overview
- This is a minimal static website (no build system): primary files are `index.html` and `form.html` in the repository root. `index.html` is a simple resume page using an inline `<style>` block. `form.html` contains a basic HTML form without JavaScript or server-side handling.

## Big-picture intent
- Keep changes lightweight and focused: this repository hosts static HTML examples for learning/demo purposes. Avoid adding heavy frameworks or changing the project layout unless requested.

## Typical developer workflows
- Local preview: open the HTML file directly in a browser, or run a lightweight server for relative-path behavior: `python -m http.server 8000` (from the repo root) and visit http://localhost:8000.
- No tests or CI configured — manual verification is required. After edits, open the changed page(s) and confirm layout and form behavior.

## Conventions & patterns to follow
- Preserve existing DOCTYPE, `lang` attribute and meta viewport tags when editing `index.html` and `form.html`.
- Styling: existing styles are in an inline `<style>` block in `index.html`. When adding styles, prefer a new `styles/` folder and an external CSS file only if multiple pages will share styles.
- Forms: prefer semantic markup and accessibility. Example change pattern for `form.html`:

```html
<label for="name">Name</label>
<input id="name" name="name" required>
```

Do not remove `required` attributes unless intentionally relaxing validation.

## Integration points & external deps
- There are currently none. Do not introduce external CDN assets, npm packages, or build tooling without approval.

## Making changes / PR guidance
- Keep PRs small and focused (one logical change per PR). Example PR titles: "Improve form accessibility in form.html" or "Extract styles into styles/main.css".
- Provide a short manual test checklist in the PR description (files changed, how to preview locally, expected visual/functional effects).

## When merging or updating existing instructions
- If a `.github/copilot-instructions.md` already exists, merge by preserving any project-specific rules and appending or replacing only clearly outdated sections. Prefer conservative edits.

## Examples from this repo
- Update the resume: modify `index.html`'s `<style>` block or extract it to `styles/main.css` and update the `<link>` element.
- Improve the form: add `<label>` elements and `aria-*` attributes in `form.html` for better accessibility.

## What not to do
- Do not add build tooling (webpack, gulp, etc.) or backend code in this repository unless the user requests a migration.
- Do not change file encodings or rename files without explicit instruction.

## Questions to ask the author before large changes
- Should this remain a pure static example set or be migrated to a small site generator?
- Are we allowed to introduce a basic dev tool (Live Server, simple npm scripts)?

---
If anything in these instructions is unclear or you want a different level of detail, please tell me what to expand or change.
