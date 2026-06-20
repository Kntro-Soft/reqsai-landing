---
version: alpha
name: ReqsAI Landing System
description: Design system for the ReqsAI marketing landing page built with React 19, Vite 8, Tailwind CSS v4, and i18next. The repo's source of truth is a dark-theme landing page for an AI-powered requirements elicitation platform.
colors:
  canvas: "#050d1a"
  canvas-deep: "#03080f"
  surface: "rgba(255, 255, 255, 0.03)"
  surface-strong: "#0a1628"
  surface-elevated: "#0f2040"
  text-primary: "#ffffff"
  text-secondary: "#cbd5e1"
  text-muted: "#94a3b8"
  text-subtle: "#475569"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-strong: "rgba(255, 255, 255, 0.15)"
  primary: "#ef4444"
  primary-hover: "#dc2626"
  primary-strong: "#b91c1c"
  primary-soft: "#7f1d1d"
  accent-ai: "#f87171"
  accent-ai-soft: "#fecaca"
  success: "#34d399"
  warning: "#f59e0b"
  danger: "#ef4444"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.03em
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.03em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  card: 28px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-y: 96px
  section-y-lg: 128px
  container-x: 16px
  container-sm: 24px
  container-lg: 32px
components:
  button-primary:
    background: "{colors.primary}"
    text: "{colors.text-primary}"
    radius: "{rounded.lg}"
  button-secondary:
    background: "transparent"
    text: "{colors.text-secondary}"
    border: "{colors.border-subtle}"
    radius: "{rounded.lg}"
  card-glass:
    background: "{colors.surface}"
    border: "{colors.border-subtle}"
    radius: "{rounded.card}"
  navbar-glass:
    background: "rgba(5, 13, 26, 0.85)"
    border: "rgba(255, 255, 255, 0.06)"
---

# ReqsAI Design

## Overview
This repository is the **ReqsAI landing page**, not the in-app SaaS workspace. The page's job is to explain, in the first few seconds, what ReqsAI does: it turns discovery and requirements meetings into structured backlogs, user stories, and Gherkin acceptance criteria with AI.

The source of truth for that purpose is the repo itself:

- The README leads with: **"Landing page for ReqsAI, an AI-powered requirements elicitation platform"**.
- The hero copy leads with: **"Transforma reuniones en backlogs perfectos" / "Turn discovery meetings into perfect backlogs"**.
- The page structure in `src/App.jsx` is linear and conversion-oriented: `Hero -> Stats -> Features -> Solutions -> Pricing -> FAQ -> Contact`.
- The visual implementation lives primarily in `src/index.css`, `src/components/sections/*`, and the locale files in `src/i18n/locales/*`.

The brand should feel:

- Technical, clear, and outcome-focused.
- More like a focused product system than a generic marketing template.
- Trustworthy enough for enterprise buyers, but fast and modern enough for startup tech leads.
- AI-assisted, but not neon-chaotic or futuristic for its own sake.
- Closer to a **shadcn-style discipline**: restrained surfaces, strong typography, clean spacing, and one assertive accent color.

When in doubt, this landing should prioritize **clarity of value proposition before decoration**. The product story is about reducing ambiguity and lost information; the interface should reflect that precision.

## Colors
The implemented landing uses a **dark-first palette** rooted in navy surfaces. Going forward, the primary brand/action color should shift from blue to **red**, using the reference mood from the supplied screenshot: bold red CTA energy, clean white/ink contrast logic, and a more restrained component language inspired by shadcn.

- **Canvas / Navy 900 (`#050d1a`):** The main page background. This is the dominant color for the current site and should remain the base for all major sections.
- **Canvas Deep / Navy 950 (`#03080f`):** Used for deeper visual pockets, overlays, and high-contrast depth.
- **Glass Surface (`rgba(255,255,255,0.03)`):** The default card treatment. Used in pricing cards, mockups, and supporting panels.
- **Primary Red (`#ef4444` and hover `#dc2626`):** Used for primary CTAs, active actions, and high-intent clicks.
- **Primary Strong (`#b91c1c`):** Used for deeper pressed states, emphasized bars, and stronger action surfaces.
- **Primary Soft (`#7f1d1d`):** Used for restrained red-tinted surfaces or subtle emphasis backgrounds.
- **AI Accent (`#f87171`, `#fecaca`):** A warm red family should replace the current blue/violet emphasis for AI-specific highlights, confidence cues, and generated content states.
- **Text Primary (`#ffffff`):** Headlines and high-priority text.
- **Text Secondary / Muted (`#cbd5e1`, `#94a3b8`, `#475569`):** Used to create information hierarchy without flattening contrast.
- **Success / Warning / Danger (`#34d399`, `#f59e0b`, `#ef4444`):** Functional states only. They should not dominate the marketing surface.

The red reference should be interpreted through the current dark implementation rather than copied literally as a white corporate site:

- Red becomes the action color.
- Warm red accents replace blue/violet for AI and premium emphasis.
- Ink/Muted/Border concepts still map to text hierarchy and borders, but on dark surfaces rather than light ones.

Rules:

- Red drives primary actions and navigation emphasis.
- AI states should use a related warm accent, not a conflicting second brand color unless there is a strong functional reason.
- Ambient glow, if used, should be subtle and warm; avoid large blue halos that fight the new brand direction.
- Semantic colors must communicate system state, never serve as decoration alone.
- The palette should feel more controlled and editorial, closer to shadcn than to a flashy AI landing template.

## Typography
The live codebase currently uses **Inter** as the sans family via `--font-sans` in `src/index.css`. Until the code actually ships Plus Jakarta Sans, **Inter is the normative font** for both headings and body in this repo.

Typography should feel:

- Dense enough to read as a technical product.
- Large and decisive in value-prop moments.
- Clean and practical in pricing, FAQ, and support content.

Use the following hierarchy:

- **Display / Hero:** 48–60px, weight 800, tight tracking. Used for the hero headline and other rare “thesis” moments.
- **H1-equivalent section headline:** 40–48px, weight 800. Used sparingly outside the hero.
- **H2:** 32–36px, weight 800. For major sections such as Pricing, FAQ, Contact, and Solutions.
- **H3:** 20–24px, weight 800. For cards, pricing plan names, feature groups, and prominent subsections.
- **Body Large:** 18px, regular. For leading explanatory copy and subheadlines.
- **Body:** 16px, regular. Default descriptive copy.
- **Body Small:** 14px, regular. Secondary descriptions and dense UI copy.
- **Label / Eyebrow:** 12px, semibold, slightly tracked. Used for small uppercase section labels and badges.
- **Caption:** 12px, regular. Used for metadata, helper text, timestamps, and low-emphasis notes.

Rules:

- Headlines must feel assertive and compressed in meaning, not verbose.
- Body copy should remain highly legible in dark mode; avoid low-opacity text that collapses contrast.
- Metadata should be de-emphasized by color and size, not by becoming unreadable.
- If Plus Jakarta Sans is introduced later, it can become the headline family, but that should only happen when the codebase actually adopts it.

## Layout
The layout model is already visible in the repo:

- `src/App.jsx` composes a linear landing flow.
- `src/components/sections/*` are autonomous sections with no shared state.
- Most sections use `max-w-7xl`, `px-4 sm:px-6 lg:px-8`, and `py-24 lg:py-32`.

This means the design system should follow a **marketing narrative layout** rather than an app dashboard layout.

Layout principles:

- Use a fixed max-width content frame (`max-w-7xl`) with responsive padding.
- Keep major sections vertically generous: around 96px mobile / 128px desktop.
- Prefer 16px / 24px / 32px spacing steps, with 48px for larger separations.
- Avoid fixed content widths inside cards; use `w-full` plus `max-w-*`.
- Section rhythm matters more than dense information packing.

Responsive behavior:

- Desktop navigation breakpoint is `lg`, not `md`, per the repo guidance.
- Sections must be tested down to 375px width.
- Interactions that would become cramped in row layout should collapse to stacked controls on mobile.
- Decorative blur/glow elements must live inside `overflow-hidden` wrappers to avoid mobile Safari overflow issues.

Critical file references for layout decisions:

- `src/App.jsx`
- `src/index.css`
- `src/components/sections/Solutions.jsx`
- `src/components/layout/Navbar.jsx`

## Elevation & Depth
ReqsAI should use **depth through tonal layering, restrained borders, and subtle blur**, not through heavy skeuomorphic shadows or oversized glowing effects.

The live patterns are:

- `glass`: translucent panel with subtle border and blur.
- `glass-nav`: darker blurred navigation shell on scroll.
- Dark tonal sections with selective accent emphasis.
- Gradient text and halos, when used, should be minimal and subordinate to content.

Guidelines:

- Primary hierarchy should come from contrast, spacing, and typography first.
- Shadows should be soft and diffused, not sharp or card-commerce style.
- Glass surfaces should stay subtle enough to preserve a professional tone.
- Ambient glow is support scenery, not a structural UI element.
- Prefer crisp edges, quiet surfaces, and one strong accent over multiple decorative lighting effects.
- Reveal and motion effects should feel smooth and atmospheric, but never make the page feel heavy or slow.

## Shapes
The system uses rounded geometry throughout:

- Buttons: 12px–16px radius.
- Cards and content panels: 24px–28px radius.
- Badges and toggles: fully pill-shaped.
- Inputs and smaller containers: 12px radius.

This creates a polished SaaS feel without becoming playful or bubbly.

Rules:

- Keep corners rounded and consistent.
- Avoid mixing sharp-edged enterprise tables with highly rounded marketing cards unless the contrast is intentional.
- Badges should read as small capsules, especially for “Most popular”, section labels, and savings states.

## Components
The page is built from repeatable marketing components. Their implementation lives in `src/components/layout/*` and `src/components/sections/*`.

### Navbar
- Fixed, transparent at top, glass-on-scroll behavior.
- Supports ES/EN language toggle.
- Desktop-first width management uses `lg` breakpoint.
- Tone should feel lightweight and precise, not app-like.

### Hero
- This is the dominant storytelling moment.
- The repo’s native shape is not a feature grid first; it is a **value statement plus product mockup**.
- The right-side mockup should visualize live AI help, generated user stories, and Gherkin-like structure because that is the product’s differentiator.

### Stats
- Compact credibility strip.
- Metrics should reinforce the README/context claims: fewer follow-up meetings, better first-pass acceptance, reduced error cost.

### Features / Solutions
- Should show how the product adapts to real team archetypes rather than generic benefits.
- Tabs, comparison states, or segmented views should always tie back to the repo’s personas: consultancies, product managers, startups, analysts.

### Pricing
- The main grid should prioritize directly comparable plans.
- A custom higher-tier conversation may exist below the plans, but it should not dominate the main buying decision.
- “Most popular” treatment should be strong but clean.

### FAQ / Contact
- These sections should reduce hesitation.
- Security, integrations, and onboarding questions deserve prominence because they map to buyer objections visible in the product context.

Component rules:

- Every user-visible string must come from the locale files.
- Primary CTA: red filled button.
- Secondary CTA: subtle bordered button on dark background.
- Cards: glass or dark-surface panels with restrained border and blur.
- AI-specific modules: may use warm red accents or restrained tonal emphasis, but should remain readable at a glance.

## Do's and Don'ts
Do:

- Design from the actual product promise in the repo: meeting-to-backlog automation.
- Use red for action, dark neutrals for structure, and warm accent variants for AI emphasis.
- Keep sections spacious, legible, and conversion-oriented.
- Preserve the repo’s dark-mode implementation unless the codebase is deliberately migrated.
- Let the product mockup, pricing, and segmented use cases reflect real terminology from the locale files and README.
- Favor shadcn-like restraint: sharp hierarchy, minimal ornament, consistent surfaces.

Don't:

- Revert to a generic white SaaS landing just because external palette references are lighter.
- Invent dashboard patterns, labels, or feature names that are not grounded in the repo.
- Keep old blue-primary assumptions in new work once the red direction is adopted.
- Overload the UI with decorative gradients, random neon effects, or too many competing accents.
- Use low-contrast text for “minimalism”.
- Let animation, blur, or reveal effects reduce clarity, scrolling quality, or responsiveness.
