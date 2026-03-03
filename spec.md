# Specification

## Summary
**Goal:** Add a "Why VerdRa Exists" section to the VerdRa home page, placed between ShowcaseCards and ContributeSection, with a matching nav link.

**Planned changes:**
- Create `frontend/src/components/WhyVerdraExists.tsx` with four visual blocks:
  1. Bold centered headline "Cities Are Growing. Nature Is Shrinking." with a short paragraph on urban challenges
  2. "Our Purpose" split layout — cinematic image (`why-verdra-purpose.dim_900x600.png`) on one side, four purpose bullet statements on the other
  3. "More Than Just Planting Trees" block with three glassmorphism icon cards (Community Ownership, Climate Responsibility, Legacy Creation) each with hover lift animation
  4. Cinematic closing statement "This is not a project. / This is a generational commitment." with stagger/reveal typography animation
- Section background uses animated greenery gradient with soft light rays and floating leaf particles matching existing HeroSection style
- All text blocks use the existing `useScrollReveal` hook for scroll-triggered animations
- Design follows VERDRA system: deep forest green palette, Montserrat headings, Poppins body, glassmorphism panels
- Update `frontend/src/pages/Home.tsx` to insert `WhyVerdraExists` between `ShowcaseCards` and `ContributeSection`
- Update `frontend/src/components/Navigation.tsx` to add a "Why VerdRa" nav link (between "Home" and "Life Cycle") with smooth-scroll, green glow hover, and underline animation — included in mobile hamburger menu

**User-visible outcome:** Visitors see a new "Why VerdRa Exists" section on the home page with rich visuals, purpose statements, icon cards, and cinematic text, accessible via a "Why VerdRa" nav link.
