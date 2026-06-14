# ADORA Brand Identity & Codex Design System

Soft lavender luxury for modern glass-skin rituals.

Visual-first. Lavender luxury. Modern ritual ecommerce.

This document is the binding visual and technical brand identity for ADORA. Codex should use these rules as the default system for all Shopify sections, PDPs, landing pages, navigation, buttons, cards, and funnel visuals.

Design goal: ADORA must not feel like a Shopify theme with purple color applied. ADORA must feel like a distinctive, visually strong premium skincare brand.

## Core Palette

- Primary: `#805394`
- Secondary: `#E8AFFE`
- Deep Plum: `#3A2351`
- Mist: `#FBF3FF`
- Cream: `#FFF8EF`
- Porcelain: `#F7F1EC`
- Amber: `#D89A35`

## Core Direction

- Visual-first: customers should be convinced mainly through strong imagery, textures, product worlds, and skin glow.
- Minimal copy: text should be used only where it improves clarity, trust, or conversion.
- Premium but not fake luxury: no overloaded gold, cheap shadows, or generic spa aesthetic.
- Modern rounded UI: rounded cards, pill buttons, soft gradients, glassmorphism, and strong mobile UX.

## 1. Brand Foundation

ADORA is a premium funnel-first skincare brand for modern women who want a calm, cared-for, glowy skin effect. The brand stands for soft confidence, glass-skin rituals, modern femininity, and visual luxury perception.

Brand territory: soft lavender botanical luxury. Lavender is not decoration, it is recognition. Cream, porcelain, and nude make the brand feel premium. Deep Plum gives contrast and maturity. Amber appears only through facial oil and glow details.

ADORA should feel:

- Elegant
- Feminine, but not childish
- Modern, but not cold
- Clean, but not sterile
- Luxurious, but not fake
- Sensual, but not kitschy
- Conversion-oriented, but not salesy

ADORA must never feel like:

- Dropshipping
- Drugstore private label
- Canva beauty brand
- Clinical pharmacy
- Neon, loud, or overloaded
- Too floral
- Generic Shopify layout

Core phrases:

- Soft Confidence.
- Glass Skin Reset Ritual.
- Cleanse. Hydrate. Seal the Glow.
- Reset your skin. Reveal your glow.
- A daily ritual for soft, radiant-looking skin.
- Botanical glow rituals for modern skin.

## 2. Typography System

Direction: broad, round, modern, soft, and confident.

Final decision:

- Display / Headlines: `Sora`
- Body / UI: `Inter`
- Fallback: `Helvetica Neue`, `Arial`, `sans-serif`

```css
--font-display: "Sora", "Inter", "Helvetica Neue", Arial, sans-serif;
--font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
```

Typography rules:

- Headlines large, calm, tight letter spacing, low line-height.
- Body text short. Avoid long paragraphs in visual sections.
- Eyebrows uppercase, small, widely tracked.
- Buttons short and concrete. No aggressive sales copy.
- No serif fonts as the main typeface while the modern Quablo/Rhode-like direction is desired.

Desktop sizes:

- Hero headline: `clamp(64px, 7vw, 108px)`
- Page headline: `clamp(48px, 5vw, 76px)`
- Section headline: `clamp(34px, 3vw, 52px)`
- Card headline: `22px`
- Body: `16px`
- Small: `13px`
- Button: `14px`
- Heading line-height: `0.9 - 1.0`
- Body line-height: `1.55`
- Hero letter-spacing: `-0.065em`

Mobile sizes:

- Hero headline: `clamp(42px, 13vw, 62px)`
- Page headline: `clamp(34px, 10vw, 48px)`
- Section headline: `clamp(28px, 8vw, 38px)`
- Card headline: `18px`
- Body: `14px`
- Small: `12px`
- Button: `14px`

## 3. Color Identity

```css
--adora-primary: #805394;
--adora-secondary: #e8affe;
--adora-deep-plum: #3a2351;
--adora-soft-lilac: #f4d8ff;
--adora-mist: #fbf3ff;
--adora-cream: #fff8ef;
--adora-porcelain: #f7f1ec;
--adora-warm-nude: #ead8cc;
--adora-amber-oil: #d89a35;
--adora-ink: #24182c;
--adora-muted: #7b6a84;
--adora-border: rgba(128, 83, 148, 0.18);
```

Color rules:

- `#805394` for logo, headlines, primary buttons, icons, active states, and strong UI accents.
- `#e8affe` for backgrounds, soft cards, hover states, badges, and image worlds.
- Cream, porcelain, and white for expensive calm and visual space.
- Deep Plum for readability and mature premium feeling.
- Amber only as an accent for oil, glow, drops, and warm highlights.
- Do not make everything purple. Too much purple feels childish or artificial.

Gradient defaults:

```css
background: linear-gradient(135deg, #fff8ef 0%, #fbf3ff 45%, #f4d8ff 100%);
background: radial-gradient(circle at 20% 10%, rgba(232,175,254,0.55), transparent 38%), linear-gradient(180deg, #fff8ef 0%, #fbf3ff 100%);
```

## 4. UI Shape System

ADORA must feel modern and soft. Avoid hard default Shopify boxes whenever possible.

```css
--radius-xs: 8px;
--radius-sm: 14px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-xl: 36px;
--radius-2xl: 48px;
--radius-pill: 999px;
```

Usage:

- Buttons: pill radius
- Cards: `24-36px`
- Hero containers: `32-48px`
- Image blocks: `28-40px`
- Product cards: `24-32px`
- Sticky Add-to-Cart: `28-40px`
- Inputs: pill or `18-24px`

Button defaults:

```css
.adora-button-primary {
  background: #805394;
  color: #ffffff;
  border-radius: 999px;
  padding: 16px 30px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  border: 1px solid rgba(128, 83, 148, 0.2);
  box-shadow: 0 14px 34px rgba(128, 83, 148, 0.22);
}

.adora-button-secondary {
  background: rgba(232, 175, 254, 0.22);
  color: #805394;
  border: 1px solid rgba(128, 83, 148, 0.18);
  border-radius: 999px;
  padding: 14px 26px;
  backdrop-filter: blur(12px);
}
```

Button copy examples:

- Start Your Ritual
- Shop Ritual
- Add to Ritual
- Discover the Set
- View Ingredients
- Complete My Ritual

## 5. Visual Direction

ADORA should sell visually. The site needs many strong visuals and little text. Target ratio: around 70% visuals, 30% text/UI.

Image worlds:

- Macro iris flower imagery as signature motif
- Product hero shots with reflective surfaces
- Cleansing Milk texture: soft, milky, clean
- Cream swirls: rich, smooth, sensorial
- Facial Oil: golden drops, warm amber light
- Glass-skin close-ups: glowy, calm, believable
- Glossy water reflections and glassmorphism
- Rounded product cards and step cards

Image treatment:

- Soft light
- Lavender/cream color grading
- Premium shadows
- Rounded corners
- High resolution
- Depth of field
- Dewy highlights
- Calm editorial composition

Image CSS defaults:

```css
img,
.adora-image {
  border-radius: 28px;
}

.adora-hero-image {
  border-radius: 36px;
}

@media (max-width: 749px) {
  img,
  .adora-image {
    border-radius: 24px;
  }
}
```

Important: do not overload every image with text. 60% of product images should be text-free or almost text-free. 40% may explain minimally when it improves conversion.

## 6. Website & Section System

Navigation:

- Desktop: transparent over hero, centered logo, links left, icons right.
- On scroll: hide header when scrolling down, show again when scrolling up.
- After scroll: blurred background with light cream/lilac transparency.
- Mobile: hamburger left, logo centered, cart right, 60px header.

```css
.adora-header.scrolled {
  background: rgba(255, 248, 239, 0.72);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(128, 83, 148, 0.12);
}
```

Header height:

- Desktop: `72px`
- Mobile: `60px`

Hero sections:

- Image-first: desktop with broad background, mobile with separate 9:16 crop.
- Headline maximum 8-12 words.
- CTA in lower third or directly after subtext.
- No tiny unreadable UI elements on mobile.
- Macro iris or product/texture hero as standard.

PDP structure:

1. Large product gallery
2. Product title + short benefit
3. Price + value anchor
4. Ritual contents
5. Add-to-Cart
6. Trust row
7. Visual benefit sections
8. Texture section
9. How-to-use
10. Ingredients
11. Reviews/UGC
12. FAQ
13. Sticky Add-to-Cart

Card default:

```css
.adora-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(128, 83, 148, 0.14);
  border-radius: 28px;
  box-shadow: 0 18px 60px rgba(58, 35, 81, 0.08);
  backdrop-filter: blur(16px);
}
```

## 7. Product Image System

For the Glass Skin Reset Ritual, ADORA needs a psychologically ordered product gallery, not just beautiful images. The image sequence must cover desire, understanding, application, value, and trust.

Optimal PDP gallery: 10 images

1. Hero Bundle Shot: Collection Box + Cleansing Milk + Day Cream + Facial Oil. Minimal text: Glass Skin Reset Ritual / Cleanse. Hydrate. Seal the Glow.
2. Text-free Luxury Product Shot: premium product effect on reflective cream/lilac surface.
3. 3-Step System Explainer: three rounded cards: Cleanse, Hydrate, Seal Glow.
4. Texture Desire Shot: milky cleanser, cream swirl, golden oil droplets. Minimal text: Silky. Creamy. Glowy.
5. Skin Result Shot: close-up glowy skin with iris motif. Almost no text: Soft skin. Quiet glow.
6. Cleansing Milk Single: Step 1, cleanse. Focus on gentle milky texture.
7. Day Cream Single: Step 2, hydrate. Focus on cream swirl and dewy finish.
8. Facial Oil Single: Step 3, seal glow. Focus on golden oil and glow.
9. How-To-Use Ritual: Cleanse with milk, massage in cream, press in oil.
10. Packaging/Giftable: box + products as a premium ritual object.

Text rule for product images: 6 images without or almost without text, 4 images with minimal explanation. More text makes the gallery feel cheaper. Less explanation makes the 3-step system unclear.

## 8. Codex Implementation Brief

Codex must follow these rules for every new section:

- Every section must be customizable in the Shopify Theme Editor.
- Always add image picker and, where relevant, mobile image picker.
- Keep text fields short and optional.
- Use default colors from ADORA tokens.
- Test mobile-first: large images, little text, visible CTA.
- Lazy load images below the fold.
- Avoid unnecessary JavaScript complexity.
- Use semantic HTML and accessible buttons/links.
- Rounded cards/buttons as default.
- No generic Shopify layouts without ADORA styling.

Global CSS variables:

```css
:root {
  --font-display: "Sora", "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Inter", "Helvetica Neue", Arial, sans-serif;
  --adora-primary: #805394;
  --adora-secondary: #e8affe;
  --adora-deep-plum: #3a2351;
  --adora-soft-lilac: #f4d8ff;
  --adora-mist: #fbf3ff;
  --adora-cream: #fff8ef;
  --adora-porcelain: #f7f1ec;
  --adora-amber-oil: #d89a35;
  --adora-ink: #24182c;
  --adora-muted: #7b6a84;
  --adora-border: rgba(128, 83, 148, 0.18);
  --radius-lg: 28px;
  --radius-xl: 36px;
  --radius-2xl: 48px;
  --radius-pill: 999px;
  --hero-heading-size: clamp(64px, 7vw, 108px);
  --section-heading-size: clamp(34px, 3vw, 52px);
  --body-size: 16px;
  --button-size: 14px;
}

@media (max-width: 749px) {
  :root {
    --hero-heading-size: clamp(42px, 13vw, 62px);
    --section-heading-size: clamp(28px, 8vw, 38px);
    --body-size: 14px;
  }
}
```

## 9. Final Guardrails

Every ADORA section must pass this question:

Does this visual increase premium perception, emotional attractiveness, clarity, or conversion?

If not: remove it, simplify it, add more whitespace, improve visuals, use less text, add more rounding, and clarify hierarchy.

Do:

- Large visuals
- Macro iris and textures
- Pill buttons
- Rounded cards
- Soft gradients
- Deep Plum typography
- Mobile-first PDP
- Sticky CTA
- Visual-first funnel structure

Do not:

- Too much text
- Too many flowers
- Childish purple
- Cheap dropshipping product images
- Hard rectangles
- Aggressive sales banners
- Fake clinical claims
- Generic theme design

Final Codex sentence:

Build ADORA as a distinctive visual-first lavender skincare brand, not as a generic Shopify theme. Every section must feel premium, rounded, image-led, minimal in copy, mobile-first, and conversion-oriented.
