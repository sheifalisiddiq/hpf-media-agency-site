# Design System Specification

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Cinematic Monolith."** 

This system is designed for the high-end UAE market, where digital experiences must command authority, evoke luxury, and feel as intentional as a curated gallery. We move away from the "flat web" by embracing a high-contrast, moody atmosphere. By blending deep, light-absorbing blacks with a sharp, cinematic scarlet red, we create a sense of three-dimensional space. The layout strategy rejects the standard grid in favor of **intentional asymmetry** and **overlapping editorial layers**, ensuring the interface feels like a bespoke digital flagship rather than a generic template.

## 2. Colors & Atmospheric Depth
The color palette is built on the tension between shadow and light. Every hue is chosen to maintain a premium, dark-mode aesthetic that feels expensive and smooth.

*   **The Signature Gradient:** The foundational background must never be a flat hex. It is a smooth, low-noise linear gradient transitioning from `surface` (#131313) at the top to a deep, atmospheric scarlet (derived from `primary_container`) at the bottom.
*   **The "No-Line" Rule:** To maintain a high-end feel, **1px solid borders are strictly prohibited** for sectioning or defining layout boundaries. Separation is achieved through:
    *   **Background Shifts:** Placing a `surface_container_low` (#1B1B1B) element against a `surface` (#131313) background.
    *   **Tonal Transitions:** Using subtle shifts in the scarlet scale to define header areas.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of obsidian and glass.
    *   Use `surface_container_lowest` (#0E0E0E) for deep, recessed areas (like secondary sidebars).
    *   Use `surface_container_highest` (#353535) for interactive, elevated elements that need to "catch the light."
*   **Signature Textures:** Main CTAs should utilize a "Vibrancy Gradient," moving from `primary` (#FFB4AB) to `primary_container` (#FF5449) to give the red a glowing, backlit appearance rather than a flat fill.

## 3. Typography: Editorial Authority
We utilize **Inter** not as a standard sans-serif, but as a precision tool for editorial hierarchy.

*   **Display & Headline:** `display-lg` (3.5rem) and `headline-lg` (2rem) should be used sparingly to make bold statements. Use tight letter-spacing (-0.02em) to create a "compressed" luxury feel.
*   **The Contrast Play:** Pair large, authoritative headlines with `label-sm` (0.6875rem) in all-caps with generous letter-spacing (+0.1em). This creates the "high-fashion" contrast typical of premium UAE branding.
*   **Body Text:** `body-lg` (1rem) is the workhorse. Ensure a line-height of 1.6 to provide "breathing room" against the dark background, preventing visual fatigue.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are replaced by **Tonal Layering** and **Atmospheric Diffusion.**

*   **The Layering Principle:** Stacking is the primary way to show importance. An inner card (`surface_container_high`) sitting on a section (`surface_container_low`) creates a natural, soft lift.
*   **Ambient Shadows:** When an element must float (e.g., a modal), use a shadow with a 48px blur and 6% opacity. The shadow color must be tinted with the scarlet hue of the background to mimic the way light scatters in a dark environment.
*   **Glassmorphism:** For floating navigation or action bars, use `surface_bright` (#393939) at 60% opacity with a `backdrop-filter: blur(20px)`. This allows the cinematic red background to bleed through, making the UI feel integrated into the environment.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline_variant` (#5E3F3B) at **15% opacity**. It should be felt, not seen.

## 5. Components

### Buttons
*   **Primary:** A high-gloss scarlet gradient using `primary_container` (#FF5449). Use `ROUND_FOUR` (1rem) corner radius. The text `on_primary_container` should be high-contrast.
*   **Tertiary/Ghost:** No container. Use `primary` (#FFB4AB) text with a subtle underline that appears only on hover.

### Cards & Containers
*   **Execution:** Forbid the use of divider lines. Use vertical whitespace (32px or 48px) and subtle shifts between `surface_container` tiers to separate content blocks. 
*   **Interaction:** On hover, a card should shift from `surface_container_low` to `surface_container_high` with a 300ms ease-out transition.

### Input Fields
*   **Styling:** Fill with `surface_container_lowest`. No border. A bottom-only "active" line in `primary` (#FFB4AB) should animate from the center outward when the field is focused.
*   **Labels:** Use `label-md` floating above the input, color-coded to `on_surface_variant` (#E8BCB7).

### Chips
*   **Selection:** Use `secondary_container` (#7E2A20) for the background with `on_secondary_container` text. Keep corners slightly rounded but distinct.

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a luxury. Allow elements to breathe significantly more than in a standard SaaS app.
*   **DO** use "True Black" (`surface_container_lowest`) for backgrounds to make the `primary` scarlet red "pop" with cinematic intensity.
*   **DO** use typography as a decorative element. Overlapping a large, low-opacity display letter behind a card is encouraged.

### Don't:
*   **DON'T** use 1px borders to separate content. It breaks the "monolith" feel and looks cheap.
*   **DON'T** use pure white (#FFFFFF) for body text. Always use `on_surface` (#E2E2E2) to reduce harsh contrast and maintain the premium "noir" mood.
*   **DON'T** use standard "drop shadows" (Black 25% opacity). They create "mud" on a dark background. Always use low-opacity, tinted ambient glows.