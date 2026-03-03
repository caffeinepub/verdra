# VERDRA

## Current State
Multi-page website with sections: HeroSection, ShowcaseCards, WhyVerdraExists, ContributeSection (TAKE ACTION), LifeCycleSection (NATURE'S JOURNEY), BenefitsSection (OUR IMPACT / Contributor Benefits), ExpansionVisionSection. All pages use a consistent dark forest-green theme with glassmorphism, scroll-reveal animations, floating leaf particles, and Montserrat/Poppins typography.

## Requested Changes (Diff)

### Add
- New `AboutVerdraSection` component inserted in Home.tsx between `BenefitsSection` and `ExpansionVisionSection` (above OUR IMPACT / Benefits section means it should appear before BenefitsSection).
- Two-column layout: left = VerdRa logo in glowing glass panel with slow float animation; right = structured text blocks.
- Content blocks: headline "About VerdRa", introductory paragraph, Vision block, Mission block, How VerdRa Works (3-step minimal layout with icons and upward reveal), Core Values (4 icon cards with hover lift).
- Background: subtle gradient blending forest green to soft beige, floating leaf particles.
- Animations: slow fade-ins, upward reveal transitions, minimal hover effects.
- Uses existing uploaded logo: `/assets/uploads/Untitled-design-1-1--1.png`

### Modify
- `Home.tsx`: insert `<AboutVerdraSection />` above `<BenefitsSection />`.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/components/AboutVerdraSection.tsx` with full layout and animations.
2. Update `src/frontend/src/pages/Home.tsx` to import and place `AboutVerdraSection` before `BenefitsSection`.
3. Validate build passes.
