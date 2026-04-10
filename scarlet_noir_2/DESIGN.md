# Design System Document: HPF Media Agency

## 1. Overview & Creative North Star: "The Nocturnal Authority"

This design system is engineered to capture the high-stakes, luxury market of the UAE. It moves beyond standard agency layouts to create a **"Nocturnal Authority"**—a digital experience that feels like a private showroom in Downtown Dubai at midnight. 

The system rejects the "web-standard" grid in favor of **Cinematic Asymmetry**. By utilizing high-contrast typography and deep, tonal layering, we create a sense of aggressive precision. We don't just present information; we curate power. The visual language is defined by vast negative space, punctuated by "Scarlet Lethality" (our red accents) and "Atmospheric Depth" (radial glows), ensuring the user feels the weight and premium nature of the HPF brand.

---

## 2. Colors

The palette is a study in darkness. We utilize the Material Design convention to manage depth without ever breaking the "Pure Black" ethos required for a cinematic feel.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through background shifts (e.g., transitioning from `surface` to `surface-container-low`) or through the termination of a "Scarlet Glow" radial gradient.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of volcanic glass. 
- **Base Layer:** `background` (#111317) for the primary canvas.
- **Sectioning:** Use `surface-container-lowest` (#0c0e12) for immersive hero backgrounds and `surface-container-high` (#282a2e) for elevated feature cards.
- **The Glass & Gradient Rule:** For floating modals or navigation bars, use `surface-variant` (#333539) at 60% opacity with a `24px` backdrop-blur. 

### Signature Textures
Apply a subtle `radial-gradient` (center, farthest-side, `rgba(255, 42, 42, 0.08)` to `transparent`) behind primary CTAs or headline groupings to create a "heat map" effect that draws the eye without cluttering the UI.

---

## 3. Typography: The Editorial Edge

We use **Inter** as our sole typographic engine, leaning into its variable weights to create a "Brutal Editorial" hierarchy.

*   **Display (Lg/Md):** These are your "Statement" pieces. Use `display-lg` (3.5rem) with tight letter-spacing (-0.04em) and a Bold weight. This is for high-impact UAE business value propositions.
*   **Headlines:** `headline-lg` (2rem) serves as the anchor for section starts. Keep these "Aggressive but Clean"—all caps is permitted for short (3-word) secondary headers.
*   **Body (Lg/Md):** Use `body-lg` (1rem) for readability. In this system, body text is never pure white; use `on-surface-variant` (#e8bcb7) to reduce eye strain against the deep black background, reserving pure `white` (#FFFFFF) for titles.

The hierarchy is designed to command attention. Wide margins and oversized headings create a sense of luxury and "space," signaling to the client that HPF Media does not need to shout to be heard.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and borders are replaced by **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-highest` card on top of a `surface-container-low` background. The subtle shift in hex value creates a "soft lift" that feels architectural rather than digital.
*   **Ambient Red Shadows:** When an element must "float" (like a primary lead-gen card), use a shadow tinted with the `primary` token (#ffb4ab): `0px 20px 40px rgba(255, 42, 42, 0.12)`. This mimics the glow of neon against dark asphalt.
*   **The "Ghost Border" Fallback:** If a container requires definition in a dense data area, use a 1px border with `outline-variant` (#5e3f3b) at **15% opacity**. It should be felt, not seen.
*   **Framer Motion Integration:** All depth transitions should be accompanied by a `0.4s` cubic-bezier(0.23, 1, 0.32, 1) ease-out animation. Elements should "emerge" from the darkness.

---

## 5. Components

### Buttons (The "Trigger" Components)
*   **Primary:** Background: `primary-container` (#ff5449), Text: `on-primary-container` (#5c0004). Sharp `0.25rem` corners. High-gloss finish.
*   **Secondary:** Ghost style. `Ghost Border` (15% opacity) with `Scarlet Red` text. On hover, the background fills with a 5% red tint.
*   **Interaction:** On click, use a subtle scale-down (0.98) to simulate tactile feedback.

### Input Fields
*   **Styling:** No background. Only a bottom-border using `outline` (#af8783) at 30% opacity. 
*   **Active State:** The bottom border transforms into a `Scarlet Red` (#FF2A2A) 2px line with a soft glow.
*   **Labels:** Use `label-md` floating above the line, always in `on-surface-variant`.

### Cards & Lists
*   **Constraint:** Absolute ban on divider lines. 
*   **Execution:** Use `48px` of vertical whitespace to separate list items. For cards, use `surface-container` nesting.
*   **Icons:** Use `lucide-react` icons exclusively in `primary` (#ffb4ab). Icons should be wrapped in a subtle 10% opacity scarlet circle.

### Signature Component: The "Cinematic Reveal"
A custom component for HPF Media: A full-width image or video container that uses a `linear-gradient(to bottom, transparent, #111317)` overlay to bleed the media perfectly into the page background.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use extreme high contrast for calls to action.
*   **DO** leave more whitespace than you think is necessary. Luxury is defined by what isn't there.
*   **DO** use "Scarlet Red" as a surgical tool—only for things that require immediate action or represent the brand's "aggression."
*   **DO** ensure all `lucide-react` icons have a `strokeWidth` of 1.5px for a high-end, thin-client look.

### Don’t:
*   **DON'T** use blue, teal, or "tech-safe" navy. If it’s not black, dark grey, or red, it doesn't belong.
*   **DON'T** use `border-radius: full` (pills) for buttons. Keep them at `md` (0.375rem) or `sm` (0.125rem) to maintain an "aggressive" edge.
*   **DON'T** use standard drop shadows. If an element isn't glowing or tonally lifted, it should be flat.
*   **DON'T** use centered text for long body copy. Keep it left-aligned to maintain the "Editorial" structure.