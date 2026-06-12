# ADORA Codex Task Queue

Use these tasks in order. Do not skip the audit phase.

## Task 1: Theme architecture audit
Audit this Shopify theme repository. Do not change files. Explain the theme architecture, key templates, section structure, CSS structure, JavaScript structure, and risks for building custom ADORA sections.

## Task 2: Build ritual hero section
Create a new section `sections/adora-ritual-hero.liquid` for a premium mobile-first skincare hero for the ADORA Glass Skin Reset Ritual. All content must be editable via schema. Use scoped CSS. Do not modify templates.

## Task 3: Build ritual steps section
Create `sections/adora-ritual-steps.liquid` explaining Cleanse, Hydrate, Nourish. Make all headings, text, images, and CTA editable via schema. Keep it mobile-first and premium.

## Task 4: Build offer stack section
Create `sections/adora-offer-stack.liquid` for the Glass Skin Reset Ritual bundle. Include value framing, included products, CTA, and trust line. Keep all text editable via schema.

## Task 5: PDP audit
Inspect `templates/product.json`, `sections/main-product.liquid`, and relevant product snippets/assets. Do not change files. Recommend the safest ADORA PDP architecture.

## Task 6: PDP section build
Only after the PDP audit, create dedicated ADORA PDP support sections without breaking Ella's core product form/media logic.
