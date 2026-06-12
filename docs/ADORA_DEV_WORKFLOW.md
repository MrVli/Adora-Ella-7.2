# ADORA Development Workflow

This repository contains the ADORA Shopify theme based on Ella 7.2.0.

## Working model
Use this repository as the source of truth for theme code. Shopify Theme Editor can still be used for content and section settings, but code changes should happen through GitHub so they can be reviewed and rolled back.

## Recommended branches
- `main`: stable theme state
- feature branches: one focused change at a time, for example `feature/adora-ritual-hero`

Avoid large all-in-one changes. Build the ADORA shop through small, reviewable improvements.

## Codex task order
1. Audit relevant files before editing.
2. Add or modify one section/snippet at a time.
3. Keep CSS scoped and mobile-first.
4. Test in Shopify Theme Preview.
5. Merge only after the preview looks correct.

## Custom ADORA file naming
Use:
- `sections/adora-*.liquid`
- `snippets/adora-*.liquid`
- `assets/adora-*.css`
- `assets/adora-*.js`

Do not dump unrelated custom code into Ella core files.

## First recommended build tasks
1. Create `sections/adora-ritual-hero.liquid`
2. Create `sections/adora-ritual-steps.liquid`
3. Create `sections/adora-offer-stack.liquid`
4. Create `sections/adora-objection-accordion.liquid`
5. Audit the product page before modifying the PDP template

## Shopify preview checklist
Before publishing or merging a major change, verify:
- homepage loads
- product page loads
- cart/add-to-cart works
- mobile layout is clean
- Theme Editor opens without schema errors
- no obvious JavaScript console errors
- images are responsive and not oversized
