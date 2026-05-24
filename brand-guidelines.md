# Brand Guidelines — Srivatsan Rangarajan Portfolio
## For: Google Antigravity Builder

---

## 1. Brand Concept

**Name:** SR // Portfolio
**Tagline:** Code that thinks. Systems that scale.
**Personality:** Precise · Ambitious · Technical · Quietly Bold

The visual language is **dark editorial tech** — the kind of aesthetic that lives between a high-end developer blog and a design studio portfolio. It signals deep technical competence through restraint: tight typography, strategic use of a single electric accent, and generous negative space. Nothing decorative that doesn't earn its place.

The portfolio should feel like it was built by someone who cares deeply about craft — because it was.

---

## 2. Colour System

All colours defined as CSS custom properties on `:root`.

### Core Palette

| Token | Hex | CSS Variable | Role |
|-------|-----|-------------|------|
| Background | `#08080d` | `--bg` | Page background — near-black with a blue-black tint |
| Background 2 | `#0f0f16` | `--bg2` | Alternate section background |
| Background 3 | `#16161f` | `--bg3` | Card hover state |
| Accent | `#c6f135` | `--accent` | Primary accent — electric yellow-green |
| Accent 2 | `#7fffda` | `--accent2` | Secondary accent — cyan-mint, used on tech pills only |
| Text | `#eeede6` | `--text` | Primary text — warm off-white |
| Muted | `#6b6b7e` | `--muted` | Secondary text, labels, placeholders |
| Border | `rgba(198,241,53,0.13)` | `--border` | Subtle accent-tinted borders |
| Card | `rgba(255,255,255,0.025)` | `--card` | Card surface — near-transparent white |

### Colour Rules

- **Backgrounds are always dark.** Never use a light background, even for cards.
- **`--accent` (#c6f135) is the only colour used at full opacity for highlights.** Headlines, kicker labels, active states, animated elements, stat numbers, CTA buttons.
- **`--accent2` (#7fffda) is reserved exclusively for tech/stack pill borders and text** inside project cards. Do not use elsewhere.
- **Body copy** uses `--text` at `72%` opacity (`rgba(238,237,230,0.72)`) inside dark sections — never pure white on near-black.
- **Do not introduce any additional brand colours.** No purple, orange, blue, or red accents.
- **The primary CTA button** (`--accent` background, `--bg` text) is the only element that inverts to light-on-dark.

### Hover State Colours

| Element | Default | Hover |
|---------|---------|-------|
| Nav links | `--muted` | `--accent` |
| Ghost button | `--muted` border + text | `--accent` border + text |
| Skill tags | `--border` / `--muted` | accent border + `--accent` text |
| Cert / extra cards | `--border` | `rgba(198,241,53,0.30)` border |
| Project card top bar | `scaleX(0)` | `scaleX(1)` in `--accent` |

---

## 3. Typography

### Font Families

| Role | Family | Weights | CSS Variable |
|------|--------|---------|-------------|
| Display / Headings | DM Serif Display | 400 (regular + italic) | `--f-disp` |
| UI / Body | Syne | 400, 600, 700, 800 | `--f-sans` |
| Monospace / Labels | DM Mono | 400, 500 | `--f-mono` |

**Google Fonts import URL:**
```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap
```

### Type Scale

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Hero H1 | DM Serif Display | `clamp(4.2rem, 9.5vw, 10rem)` | 400 | `line-height: 0.9`, `letter-spacing: -0.025em` |
| Section H2 | DM Serif Display | `clamp(2.6rem, 5.5vw, 5rem)` | 400 | `line-height: 1.02` |
| Project H3 | DM Serif Display | `1.65rem` | 400 | `line-height: 1.2` |
| Research / Exp H3 | DM Serif Display | `1.45–1.55rem` | 400 | — |
| Body paragraphs | Syne | `1rem` | 400 | `line-height: 1.9` |
| Small body / bullets | Syne | `0.87–0.9rem` | 400 | `line-height: 1.75–1.78` |
| Nav links | Syne | `0.73rem` | 700 | `letter-spacing: 0.16em`, uppercase |
| Section labels | DM Mono | `0.68rem` | 400 | `letter-spacing: 0.28em`, uppercase |
| Tags / pills | DM Mono | `0.66–0.72rem` | 400 | `letter-spacing: 0.08–0.1em` |
| Stat numbers | DM Serif Display | `2.6rem` | 400 | Coloured in `--accent` |
| Stat labels | Syne | `0.7rem` | 400 | `letter-spacing: 0.15em`, uppercase |
| Logo / mono labels | DM Mono | `0.78rem` | 400 | `letter-spacing: 0.15em`, uppercase |
| Footer | DM Mono | `0.64rem` | 400 | `letter-spacing: 0.1em` |
| CTA buttons | Syne | `0.78rem` | 800 | `letter-spacing: 0.12em`, uppercase |

### Typography Rules

- **Display headlines use italic for the emotional word** — rendered in `--accent`. Example: `Projects that *matter.*`
- **Never use Inter, Roboto, Arial, or system fonts.**
- **Monospace font (DM Mono) is used only for:** labels, kickers, section tags, logo, footer, tags/pills, project numbers, journal references, stat labels.
- **Letter-spacing:** Monospace and uppercase UI elements always carry wide tracking (0.12–0.28em). Body and display text use tight or default tracking.

---

## 4. Layout & Spacing

### Grid System

- **Max content width:** `1200px` (implicit via padding)
- **Section horizontal padding:** `5rem` desktop → `1.5rem` mobile
- **Section vertical padding:** `8rem` top and bottom (Hero: `7rem` bottom only, Contact: `9rem`)

### Layout Patterns

| Section | Desktop Layout | Mobile |
|---------|---------------|--------|
| About | 2-column grid (`1fr 1.1fr`), `7rem` gap | Single column |
| Projects | 2-column grid, `2px` gap (border-separated) | Single column |
| Experience | 2-column rows (`180px 1fr`), `3.5rem` gap | Single column |
| Certifications | Auto-fill grid, `min 290px`, `1rem` gap | 1–2 columns |
| Extra-curriculars | Auto-fill grid, `min 260px`, `1.25rem` gap | 1–2 columns |
| Research | Full-width card, `3rem` padding | Full-width, stacked |

### Spacing Tokens (implied)

| Use | Value |
|-----|-------|
| Section label → H2 gap | `1rem` |
| H2 → content gap | `4.5rem` |
| Paragraph gap | `1.4rem` |
| Tag gap | `0.45rem` |
| Card internal padding | `1.25rem – 3rem` |
| Stat grid gap | `1.25rem` |
| Skill group gap | `1.75rem` |

---

## 5. Component Specifications

### Navigation Bar

- `position: fixed`, full width, `z-index: 200`
- Background: `rgba(8,8,13,0.82)` with `backdrop-filter: blur(14px)`
- Bottom border: `1px solid var(--border)`
- Padding: `1.4rem 5rem`
- Logo: DM Mono, `0.78rem`, `--accent`, uppercase, `letter-spacing: 0.15em`

### Buttons

**Primary (`btn-p`):**
- Background: `--accent` | Text: `--bg` (dark)
- Font: Syne `0.78rem / 800 / uppercase / letter-spacing 0.12em`
- Padding: `0.9rem 2.2rem`
- No border-radius (square corners throughout)
- Hover: `translateY(-2px)` + slightly brighter accent `#d5ff40`

**Ghost (`btn-g`):**
- Border: `1px solid var(--border)` | Text: `--muted`
- Same font + padding as primary
- Hover: border and text → `--accent`

### Cards (Certs, Extras)

- Border: `1px solid var(--border)`
- Background: `var(--card)`
- No border-radius
- Hover: border-color → `rgba(198,241,53,0.30)`
- Transition: `border-color 0.25s`

### Project Cards

- Background: `var(--bg)` → `var(--bg3)` on hover
- No border, separated by `2px` gap (grid background provides border effect)
- Top accent bar: `2px`, `--accent`, `scaleX(0 → 1)` on hover, `transform-origin: left`
- Padding: `3rem`

### Skill Tags

- Font: DM Mono `0.72rem`
- Padding: `0.35rem 0.85rem`
- Border: `1px solid var(--border)` | Text: `--muted`
- Highlighted variant (★ tags): border `rgba(198,241,53,0.4)`, text `--accent`
- Hover on all tags: same as highlighted

### Tech Pills (Project cards only)

- Font: DM Mono `0.66rem`
- Border: `1px solid rgba(127,255,218,0.18)` | Text: `--accent2`
- Padding: `0.22rem 0.65rem`

### Section Labels

- Font: DM Mono `0.68rem`, uppercase, `letter-spacing: 0.28em`
- Colour: `--accent`
- Preceded by a `22px × 1px` horizontal line in `--accent`
- Margin-bottom: `1rem` (before H2)

### Stat Cards

- Border: `1px solid var(--border)` | Background: `var(--card)`
- Padding: `1.5rem`
- Number: DM Serif Display `2.6rem`, `--accent`
- Label: Syne `0.7rem`, uppercase, `--muted`

---

## 6. Motion & Animation

All animations use `transform` and `opacity` only — no layout-triggering properties.

| Animation | Specification |
|-----------|--------------|
| **Scroll reveal** | `opacity: 0, translateY: 30px` → `opacity: 1, translateY: 0` · Duration: `0.75s ease` · Trigger: `IntersectionObserver` at `threshold: 0.12` · Sibling stagger: `80ms` |
| **Project card top bar** | `transform: scaleX(0) → scaleX(1)` · `transform-origin: left` · Duration: `0.45s ease` · Triggered on card `:hover` |
| **Scroll indicator line** | `opacity: 0.25 → 1 → 0.25` · Duration: `2.2s ease-in-out` · `animation-iteration-count: infinite` |
| **Orbit rings** | `transform: rotate(0deg → 360deg)` · Ring 1: `40s linear` forwards · Ring 2: `28s linear` reverse · Purely decorative |
| **Button hover** | Primary: `translateY(-2px)` · Duration: `0.2s` |
| **Nav / tag / card border** | Colour transitions: `0.2s – 0.25s` |
| **Custom cursor** | Dot: follows mouse directly · Ring: lerp `15%` per frame toward mouse position (`requestAnimationFrame`) |

### Custom Cursor Spec

```
Dot:  9px × 9px · background: --accent · mix-blend-mode: difference
Ring: 34px × 34px · border: 1.5px solid rgba(198,241,53,0.5) · no fill
Both: position: fixed, pointer-events: none, border-radius: 50%, transform: translate(-50%,-50%)
Body: cursor: none
```

---

## 7. Decorative Elements

| Element | Specification |
|---------|--------------|
| **Hero grid** | CSS `background-image` with two perpendicular `linear-gradient` lines forming a grid. Cell size `60px × 60px`. Line colour `rgba(198,241,53,0.035)`. Masked with `radial-gradient` ellipse (85% × 85%) so edges fade. |
| **Orbit rings** | Two `div` elements, `border-radius: 50%`, `border: 1px solid rgba(198,241,53,0.07)`. Sizes: `600px` (top-right, extends off-screen) and `380px` (inset). Rotate continuously via `@keyframes`. |
| **Section dividers** | Horizontal rules between experience rows: `1px solid var(--border)`. No other decorative dividers. |
| **No images.** | The design is entirely typographic and geometric. No photography, illustrations, or icon libraries. |
| **No border-radius** anywhere in the design. All corners are sharp (0px). |

---

## 8. Responsive Behaviour

### Breakpoint: ≤ 860px

| Change | Specification |
|--------|--------------|
| Nav padding | `1.2rem 1.5rem` |
| All section padding | `1.5rem` horizontal |
| Hero H1 | `font-size: 3.4rem` |
| About grid | Single column, `3rem` gap |
| Project grid | Single column |
| Experience rows | Single column, `1.25rem` gap |
| Research card | Single column, stacked |
| Scroll indicator | `display: none` |
| Footer | Column, `0.75rem` gap, centered |

---

## 9. Do's and Don'ts

### Do
- Keep all backgrounds dark (`#08080d` – `#16161f` range)
- Use `--accent` (#c6f135) for all highlights, active states, and interactive emphasis
- Use DM Serif Display italic + accent colour for the "emotional word" in section headlines
- Use sharp (0px) corners on all elements
- Maintain consistent `0.13` opacity on all border lines
- Let whitespace breathe — generous padding is intentional

### Don't
- Don't add any light-mode styles or light background sections
- Don't use purple, blue, orange, or red as accent colours
- Don't use border-radius anywhere
- Don't add shadows — depth comes from background colour layering only
- Don't add third-party icon libraries (no Heroicons, Lucide, FontAwesome)
- Don't use gradient text — only solid `--accent` for coloured type
- Don't deviate from the three specified fonts
- Don't add background images or textures beyond the CSS grid overlay

---

*End of brand-guidelines.md*
