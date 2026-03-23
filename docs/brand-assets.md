# Moveroo Brand Asset Plan

Use this file as the source of truth for branded image assets on the Moveroo website.
The goal is to cover search visibility, social sharing, browser/app icon surfaces, and a small reusable set of page-level brand images without creating unnecessary clutter.

## Current State

Existing public assets:

- `public/favicon.svg`
- `public/og-image.png`
- `public/manifest.json`

Current gaps:

- no PNG favicon set for small browser surfaces
- no Apple touch icon
- no 192px / 512px app icons for stronger manifest coverage
- no maskable icon for install surfaces
- only one shared OG image across the whole site
- no page-specific social images for key public pages

## Priority 1: SEO And Visibility Assets

These are the assets that matter first for search appearance, sharing, browser tabs, and install surfaces.

### 1. Master Brand Mark

Create one clean source asset first, then export all small icons from it.

Recommended source files:

- `docs/assets/moveroo-mark-square.svg`
- `docs/assets/moveroo-mark-square-light.svg`
- `docs/assets/moveroo-mark-square-dark.svg`

Requirements:

- square mark
- simple silhouette or monogram that reads at 16px
- avoid fine detail, text, or multi-part compositions
- should still feel like Moveroo without relying on the full wordmark

Design direction:

- use the strongest recognisable part of the Moveroo brand
- prefer a bold simplified mark over a tiny detailed logo
- if the kangaroo motif is used, simplify it aggressively for favicon use

### 2. Favicon Set

Required exports:

- `public/favicon.svg`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/favicon.ico`
- `public/apple-touch-icon.png`

Recommended specs:

- `favicon-16x16.png`: 16x16
- `favicon-32x32.png`: 32x32
- `favicon.ico`: multi-size ICO if convenient
- `apple-touch-icon.png`: 180x180

Notes:

- Google Search only needs one crawlable site favicon, but the PNG and Apple variants improve broader browser and device support
- keep the icon URL stable once chosen
- the favicon should be square and comfortably larger than 48px in source exports even if it is displayed smaller

### 3. Manifest And Install Icons

Required exports:

- `public/icon-192.png`
- `public/icon-512.png`
- `public/icon-maskable-512.png`

Recommended manifest updates once assets exist:

- keep SVG icon if desired
- add 192 and 512 PNG icons
- include `purpose: "maskable"` on the maskable icon

Notes:

- this helps installed / app-like surfaces on Android and other environments
- the maskable icon should keep important shapes inside the safe zone

### 4. Default Social Share Image

Required asset:

- `public/og-image.png`

Target spec:

- 1200x630 PNG

Job:

- default social image for any page that does not yet have its own specific image
- should represent the whole Moveroo brand, not just one lane

Design direction:

- bold, clean composition
- transport-led but broad enough for household, vehicle, and specialty coordination
- strong contrast and very limited text
- if text is used, keep it short and large

Avoid:

- tiny text blocks
- cluttered marketing layouts
- screenshot-style compositions
- generic stock-photo collages

### 5. Page-Specific Social Images

Create these after the default social image.

Recommended assets:

- `public/og-home.png`
- `public/og-services.png`
- `public/og-moving-cars.png`
- `public/og-contact.png`

Target spec:

- 1200x630 PNG each

Purpose:

- improve preview quality when individual pages are shared
- support clearer category signalling

Page roles:

- `og-home.png`: broad brand promise
- `og-services.png`: service map / route chooser
- `og-moving-cars.png`: vehicle-first transport lane
- `og-contact.png`: callback and support path

## Priority 2: Reusable Site Imagery

These are not required for indexing, but they will improve brand feel and should be created after the SEO/visibility pack.

Recommended assets:

- homepage hero image or illustration
- household move image
- vehicle transport image
- specialty / storage image

Preferred direction:

- real moving and transport context
- believable Australian setting where possible
- road, route, loading, handoff, or carrier context
- simple compositions that support overlay text

Avoid:

- random smiling stock families
- generic warehouse imagery with no clear story
- overly busy montage graphics
- SaaS-style abstract artwork

## Implementation Targets

These code references should be updated once assets are created:

- [Layout.astro](/Users/jasonhill/Projects/websites/moveroo-website-astro/src/layouts/Layout.astro)
- [manifest.json](/Users/jasonhill/Projects/websites/moveroo-website-astro/public/manifest.json)
- page-level `ogImage` props where page-specific assets are added

Likely updates:

- add PNG favicon links
- add Apple touch icon link
- expand manifest icons array
- swap page `ogImage` props to specific assets where appropriate

## Best-Practice Notes

- Keep favicon art extremely simple. Browser and search surfaces are unforgiving at small sizes.
- Use one stable site favicon across the hostname.
- Keep OG images readable at a glance on mobile previews.
- Prefer a few high-quality branded assets over many weak or inconsistent ones.
- Treat share images as part of the brand system, not as disposable SEO graphics.

## Production Order

1. master square brand mark
2. favicon set
3. manifest icons
4. default OG image
5. page-specific OG images
6. reusable page imagery

## Completion Checklist

- [x] master square icon source exists
- [x] favicon SVG is final
- [x] favicon PNG set exists
- [x] Apple touch icon exists
- [x] manifest includes 192, 512, and maskable icons
- [x] default OG image is final
- [x] page-specific OG images exist for key public pages
- [x] layout and page metadata point to the correct asset files
