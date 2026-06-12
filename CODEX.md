# Codex Operating Guide for ADORA

Use this guide together with `docs/ADORA_DEV_WORKFLOW.md`.

## Project
ADORA is a premium skincare Shopify store based on Ella 7.2.0.

## Default approach
- Inspect relevant files before editing.
- Prefer new `adora-*` sections/snippets/assets.
- Keep changes small and reviewable.
- Preserve Shopify Theme Editor compatibility.
- Keep CSS scoped and mobile-first.
- Avoid unnecessary JavaScript and external dependencies.

## Preferred file names
- `sections/adora-*.liquid`
- `snippets/adora-*.liquid`
- `assets/adora-*.css`
- `assets/adora-*.js`

## Avoid
- large edits to `assets/base.css`
- large edits to `assets/global.js`
- unnecessary edits to `layout/theme.liquid`
- hardcoded product, collection, variant, or shop-specific IDs
- unsupported skincare claims
- generic beauty-template copy

## Testing summary required after every task
Include:
1. changed files
2. what changed
3. possible risks
4. Shopify preview testing steps
