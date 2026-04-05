# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nomentor is a lightweight WordPress page builder plugin that generates clean, static HTML. The editor is built with Preact and runs in WP admin. Pages are saved as JSON layout data and rendered to static HTML files at `/static/{page-slug}/index.html`.

## Build Commands

```bash
npm run build    # Bundle editor/src/ → editor/editor.js (esbuild, minified + sourcemap)
npm run dev      # Same but with --watch for development
```

After modifying any `.jsx` or `.js` file in `editor/src/`, you must run the build. The built `editor/editor.js` is committed to the repo; the sourcemap is gitignored.

**Icon generation** (run manually when updating lucide icons):
```bash
node editor/build-icons.js   # Extracts lucide SVGs → includes/lucide-icons.php
```

No test framework is configured. No linter.

## Architecture

### Data Flow

```
Editor (Preact) → JSON layout → base64 → WP post meta → renderer.php → static HTML file
```

1. **Editor** (`editor/src/`): Preact app using `@preact/signals` for state. User builds pages by dragging elements onto a canvas.
2. **Save**: Layout JSON is base64-encoded (to avoid WP auto-slashing) and saved to `_nomentor_layout` post meta via AJAX.
3. **Render**: On publish, `nomentor_generate_static_html()` in `includes/renderer.php` walks the JSON tree and outputs a complete HTML document to `/static/{slug}/index.html`.

### Key Files

- **`nomentor.php`** — Plugin entry point. Registers `nomentor_page` CPT, AJAX endpoints, publish/trash hooks.
- **`editor/editor.html.php`** — HTML shell for the editor page. Sets `window.nomentor` global with post ID, nonce, AJAX URL.
- **`editor/src/state.js`** — Central state: `rows` signal (the layout tree), selection, history (100-entry FIFO), save/load logic, drag-drop operations.
- **`editor/src/App.jsx`** — Main layout: Toolbar + left sidebar (Toolbox/Properties/History/Settings) + Canvas + right sidebar (Navigator).
- **`editor/src/components/Properties.jsx`** — Property panel with type-specific editors for each element type.
- **`editor/src/utils.js`** — Builds inline styles for canvas preview (mirrors renderer.php logic).
- **`includes/renderer.php`** — Server-side HTML generator. One `nomentor_render_*()` function per element type. Generates responsive CSS with media queries.

### Layout Data Structure

```
rows[] → each row has elements[] → each element has { id, type, props, children? }
```

- **Rows**: Flex-column containers with styling props (maxWidth, bgColor, padding, etc.)
- **Elements**: One of `heading`, `text`, `image`, `grid`, `button`, `list`, `form`, `timer`
- **Grid children**: Array of cells, each containing nested elements
- **Form children**: Two slots (`before`/`after`) containing elements rendered around form fields

### Responsive System

Three viewports: desktop (>1024px), tablet (769–1024px), mobile (≤768px). Props support viewport overrides (e.g., `tablet_padding`, `mobile_width`). Elements can be hidden per viewport via `hideOn`.

### Typography Inheritance

Settings merge in order: defaults → global desktop → global tablet → global mobile → page desktop → page tablet → page mobile. Global settings stored in `nomentor_global_settings` WP option; page settings in `_nomentor_page_settings` post meta.

## Important Patterns

- **Canvas preview styles** (`utils.js`) and **rendered HTML styles** (`renderer.php`) must stay in sync. Changes to how an element looks must be updated in both places.
- **Base64 encoding**: Layout and history JSON are base64-encoded before saving to avoid WordPress sanitization issues. JS uses `btoa(unescape(encodeURIComponent(json)))`, PHP uses `base64_decode()`.
- **Form submit buttons** use `btn.closest('form')` as fallback when no explicit `formTarget` is set. Validation rules are embedded in the form's `data-nm-rules` attribute as JSON.
- **Auto-updater**: `includes/github-updater.php` checks GitHub releases. Supports `GITHUB_UPDATER_TOKEN` constant for private repos.
