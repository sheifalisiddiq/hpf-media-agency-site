# Visual Identity & Interface Guidelines: HPF Media

## 1. Overview & Creative North Star: "The Kinetic Monolith"
The creative direction for this design system is **The Kinetic Monolith**. It is inspired by high-performance luxury automotive design and elite editorial dark modes. The goal is to evoke a sense of controlled power—where every pixel feels heavy, intentional, and expensive. 

Unlike standard web layouts that rely on rigid grids and thin lines, this system utilizes **Tonal Depth** and **Asymmetric Weight**. We break the "template" feel by treating the screen as a physical space of shadow and light. Components do not just sit on a page; they emerge from the darkness through subtle shifts in texture and depth.

---

## 2. Color Architecture
The palette is rooted in a "Noir" foundation, using light only as a tool for focus.

### The Foundation
- **Base (Background):** `#020617` (The void)
- **Deep Surface:** `#030712` (Used for total immersion)
- **Accents:** 
  - Primary: `#7F1D1D` (Deep Scarlet)
  - Secondary: `#991B1B` (Dark Crimson)
  - Tertiary/Muted: `#450A0A` (Dried Blood/Oxblood)

### The Rules of Engagement
- **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Structural separation must be achieved through background shifts (e.g., a `surface-container-low` section against a `surface` background).
- **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked obsidian sheets. Use `surface-container` tiers (Lowest to Highest) to define importance. An inner card should always be a tier higher than its parent container to create a "natural lift."
- **The Glass & Gradient Rule:** For floating elements, use a background of `rgba(255,255,255,0.02)` with a `backdrop-blur` of 12px-20px. 
- **Signature Radial System:** All hero sections or large empty states must utilize the signature radial texture:
  `radial-gradient(circle at 20% 30%, #450a0a, transparent 50%), radial-gradient(circle at 80% 70%, #7f1d1d, transparent 50%), #020617.`

---

## 3. Typography: Editorial Authority
Typography is the primary driver of the "Dominant" personality. We use a high-contrast scale to create an editorial feel.

- **Headings (Clash Display / Satoshi):** Bold, wide, and confident. Headings should feel like they were carved into the interface. Use tight letter-spacing (-0.02em) for `display` levels.
- **Body (Inter / General Sans):** Clean and functional. The body text acts as the "controlled" counterpart to the aggressive headings.
- **Visual Hierarchy:**
  - **Display LG (3.5rem):** For hero moments and singular bold statements.
  - **Headline MD (1.75rem):** For section starts.
  - **Body MD (0.875rem):** Standard reading. Color: `#9CA3AF` (Subtext) to maintain the dark aesthetic.
  - **Label SM (0.6875rem):** Uppercase with 0.1em letter-spacing for a technical, premium feel.

---

## 4. Elevation & Depth
In this system, elevation is not about "distance from the floor," but "clarity within the dark."

- **The Layering Principle:** Stacking surface tokens creates depth. 
  *Example: A `surface-container-lowest` card placed on a `surface-container-low` section creates a recessed, high-end look.*
- **Ambient Shadows:** Shadows must be invisible yet felt. Use a blur of 40px-60px at 4-8% opacity. Use a deep red tint (`#410002`) for shadows on accent components to simulate light passing through wine or glass.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be the `outline-variant` token at 10% opacity. Never use 100% opaque borders.
- **Tactile Glass:** Floating menus or modals must use the `0.06` border opacity defined in the component specs to catch the "edge" of the light without looking like a stroke.

---

## 5. Signature Components

### Buttons: The "Ignition" Component
- **Primary:** Gradient from `#991B1B` (top-left) to `#7F1D1D` (bottom-right).
- **Styling:** Slight `inner-shadow` (white at 10%) on the top edge to create a beveled, physical button feel. **No outer glow.**
- **Interaction:** On hover, the gradient shifts 10% darker. No bright highlights.

### Cards: The "Obsidian" Container
- **Background:** `rgba(255,255,255,0.02)`
- **Edge:** 1px border at `rgba(255,255,255,0.06)`.
- **Constraint:** Forbid the use of divider lines within cards. Use `1.5rem` of vertical white space to separate header from body.

### Chips: The "Technical" Marker
- **Style:** Flat `surface-container-highest` background with `label-sm` typography. 
- **Shape:** `DEFAULT` (0.25rem) or `none` (0px) for a more brutalist, aggressive look. Avoid `full` rounding unless it's a notification badge.

### Input Fields
- **Background:** `surface-container-lowest` (`#070d1f`).
- **Focus State:** Change border from `ghost` to `secondary-container` (`#7a322e`). No blue halos.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use intentional asymmetry. A left-aligned headline with a right-aligned CTA creates a dynamic, premium energy.
- **Do** use "Negative Space" as a luxury. Allow elements room to breathe; crowding signals "budget."
- **Do** use tonal shifts (Background A vs Background B) to define sections.

### Don't:
- **Don't** use neon or bright reds. If it looks like a "gaming" brand, it’s too bright. It should look like a "luxury" brand.
- **Don't** use standard drop shadows. If the shadow is grey or black, it will muddy the deep blues and reds of the base.
- **Don't** use 1px solid dividers. If you need a line, use a 1px tall gradient that fades out at both ends.
- **Don't** use blue or purple tones in the shadows or gradients. Stay within the Crimson/Scarlet/Noir spectrum.

---

## 7. Spacing & Rhythm
Rhythm is dictated by the **Roundedness Scale**. To maintain the "Dominant/Controlled" vibe:
- Use **MD (0.375rem)** for cards and large containers.
- Use **SM (0.125rem)** for small UI elements like checkboxes or inputs.
- Large sections should use the **XL (0.75rem)** radius only when creating "enclave" layouts where the background peeks through.

*This system is designed to be felt as much as it is seen—a silent, powerful engine driving the HPF Media experience.*