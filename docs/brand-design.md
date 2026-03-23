# Moveroo Brand Design Guide

Use this file as the repo-level source of truth for visual design decisions on the public Moveroo website.
It should sit alongside `docs/brand-writing.md` and give future designers and developers a clear starting point before they redesign pages, add new sections or adjust the visual system.

## Brand Direction

Moveroo should feel:

- clear
- capable
- transport-led
- calm
- modern without feeling generic
- practical rather than flashy

The site should not feel:

- like a SaaS template
- overly decorative
- crowded with cards and badges
- polished in a generic way
- disconnected from real moving and transport work

## Overall Visual Idea

Moveroo is a coordinated move brand.
The site should feel like one system that can handle household moves, vehicle transport and added complexity without becoming visually noisy.

The design direction should stay:

- structured
- grounded
- dark-first in emphasis
- supported by emerald as the main brand accent
- clean on both desktop and mobile

## Core Principles

### One clear job per section

Each section should do one thing well.
Avoid sections that try to explain, sell, compare and navigate all at once.

### Brand-led, not template-led

The site should feel recognisably Moveroo even without the nav.
If a section could belong to any modern startup, it needs more brand character or less generic UI treatment.

### Simpler surfaces

Cards are allowed, but they are not the default.
Use panels, grouped rows and strong section rhythm before reaching for more boxed UI.

### Calm complexity

Moveroo can talk about complicated moves, but the interface should still feel steady and easy to read.
The design should reduce stress, not perform complexity.

## Colour System

Keep the existing palette direction rather than reinventing it.

Primary colours:

- deep slate and near-black bases for structure and authority
- emerald as the core brand accent
- white and soft slate surfaces for contrast and breathing room

Use colour like this:

- dark backgrounds for hero sections, key page intros and strong conversion surfaces
- white or muted light sections for reading comfort and pacing
- emerald for emphasis, actions, small highlights and brand cues

Avoid:

- adding unrelated accent colours without a clear reason
- overly bright gradients
- purple-led or novelty colour directions
- heavy reliance on flat white with generic green buttons

## Tokens And Theme

The current design system already defines reusable theme tokens in `src/styles/global.css`.
Future design work should extend those tokens rather than hard-coding one-off values across pages.

Important token groups to preserve:

- site backgrounds
- hero gradients
- ink and muted text colours
- border colours
- brand accent colours
- shadow scales
- panel radius values

If a new visual pattern is added, create or reuse a semantic token first where practical.

## Typography

Typography should feel strong, clean and readable.
It does not need to feel trendy or highly expressive to work for this brand.

Guidelines:

- use large, confident headlines on key brand-led pages
- keep support copy short and easy to scan
- rely on spacing and weight before using more visual decoration
- keep text blocks narrower on large screens when reading matters

Avoid:

- oversized paragraphs
- weak hierarchy
- overly stylised type choices that clash with the practical tone
- dense uppercase text outside small labels or kickers

## Layout And Composition

### Hero sections

Hero sections should feel like one composition.
Keep them focused on:

- one headline
- one short support statement
- one primary CTA group
- one dominant supporting visual surface

Avoid turning the hero into a dashboard of chips, stats and secondary promos.

### Section rhythm

Page flow should alternate between:

- strong dark moments
- calmer light reading sections
- clear conversion points

This contrast is part of the brand system now and helps the site feel intentional rather than flat.

### Width and spacing

Use generous width for structure, but do not let copy lines become too long.
Spacing should feel deliberate and roomy, especially on high-intent pages.

## Shared Shell

The header and footer should feel like part of the same system as the hero and page sections.

Header rules:

- keep the wordmark simple and confident
- keep nav labels clear and practical
- preserve a strong CTA, but avoid crowding the nav

Footer rules:

- use a clearer information structure, not a generic legal dump
- keep legal and support links tidy and readable
- ensure columns do not crowd or overlap on tablet widths

## Components And Patterns

### Good patterns to repeat

- dark brand hero with atmospheric gradient
- structured route or process boards
- grouped section panels with clear internal hierarchy
- soft elevated surfaces for FAQs, chooser blocks and supporting content
- numbered steps when they improve comprehension

### Patterns to avoid drifting back into

- card grids everywhere
- floating promo chips and detached badges
- generic stat strips with no real job
- over-explained intros
- stacked sections that all look interchangeable

## Motion

Motion should stay subtle and purposeful.

Keep using:

- rise-in page reveals
- staggered section entrances
- soft drift or background motion where it adds atmosphere
- meaningful hover lift on action elements

Avoid:

- constant looping animation
- motion that competes with reading
- decorative effects with no structural role

## Imagery And Visual Anchors

The site still leans more on atmosphere and structure than on real transport imagery.
That is acceptable for now, but future work should push toward stronger real-world anchors where possible.

Good future directions:

- real moving and transport photography
- vehicle and route imagery
- subtle logistics or road-system cues
- image choices that support trust and category clarity

Avoid:

- random stock photos
- abstract graphics that could belong to any industry
- cluttered collage treatments

## Asset Backlog

The current site has very little real imagery beyond the social share image and favicon set.
The next visual improvement should focus on adding a small number of strong, reusable brand assets rather than lots of weak ones.

Priority order:

1. Homepage hero asset
   Use a strong transport-led image or illustration that can support the broader Moveroo promise across household, vehicle and specialty work.

2. Household move asset
   Add one image set that supports home and apartment moves without feeling like generic removals stock.

3. Vehicle transport asset
   Add one image set for cars, motorcycles and carrier-led transport work so `moving-cars` has a clearer visual anchor.

4. Specialty and storage asset
   Add one image set for boats, caravans, oversized freight, storage or careful handling so the complexity lane feels real.

5. Refined social share assets
   Review `og-image.png` and any future share images so they align with the newer site system.

Image direction:

- real transport and moving context
- clear routes, vehicles, loading or handoff moments
- simple, readable compositions
- believable Australian context where possible

Avoid:

- obvious stock-photo smiles
- generic office or SaaS-style imagery
- overly busy warehouse shots
- images that fight the copy or layout

## Page Roles

### Homepage

Role:

- strongest brand surface
- broadest story
- should explain what Moveroo coordinates and why that matters

### Services

Role:

- service map
- should help users choose the right starting path quickly

### Moving Cars

Role:

- vehicle-first lane
- should feel transport-specific without becoming corporate merger copy

### Contact

Role:

- shortest and clearest conversion page
- should reduce friction and point people to the right next action

### Legal Pages

Role:

- same design family, quieter tone
- should feel structured and trustworthy rather than promotional

## Responsive Rules

Always check:

- mobile
- tablet
- desktop

Tablet widths deserve special attention.
The Moveroo redesign already surfaced spacing issues there, especially in hero boards and footer columns.
Do not assume tablet will look fine if desktop and mobile do.

## Implementation Rules

Before adding a new branded section:

1. decide the section's single job
2. reuse existing tokens and surface patterns where possible
3. keep copy and visual hierarchy simple
4. check whether the section is starting to feel like a generic card block
5. test mobile, tablet and desktop before treating it as done

## Drift Check

Before shipping a visual change, ask:

- Does this still look like Moveroo?
- Is the layout simpler or clearer, not just busier?
- Are we reusing the system instead of inventing one-off styles?
- Does the page feel calm even when the subject matter is complex?
- Would this still look strong on tablet?
