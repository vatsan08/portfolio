# System Instructions — Srivatsan Rangarajan Portfolio
## For: Google Antigravity Builder

---

## 1. Project Overview

Build a **single-page personal portfolio website** for **Srivatsan Rangarajan**, a final-year B.Tech Computer Science student at GITAM Deemed University, Hyderabad (graduating 2026). The portfolio should reflect his dual identity as a **Full-Stack Developer** (Java / Spring Boot) and **AI Engineer** (CNNs / Deep Learning).

The aesthetic direction is defined in `brand-guidelines.md`. This document covers content, structure, behaviour, and technical requirements.

---

## 2. Content & Sections

Build the following sections **in order**. Use the exact data below — do not invent or infer content.

---

### 2.1 Navigation (Sticky)
- Logo text: `SR // Portfolio`
- Links: About · Projects · Experience · Research · Certifications · Contact
- Sticky top, translucent background with backdrop blur on scroll.

---

### 2.2 Hero
- **Kicker line:** `Full-Stack Developer & AI Engineer · Hyderabad`
- **Headline (large display font, two-tone):**
  ```
  Code that thinks.
  Systems that scale.
  ```
  The word *thinks.* should be italicised and rendered in the accent colour.
- **Subheading:**
  > I'm Srivatsan — a Computer Science student at GITAM University building intelligent full-stack systems, deep learning models, and civic-tech solutions.
- **CTAs:**
  - Primary button: `View Projects ↓` → scrolls to #projects
  - Ghost button: `Get In Touch` → `mailto:srivatsanrangarajan8@gmail.com`
- **Background:** Dark base with subtle dot/grid overlay and two slow-rotating translucent orbit rings (top-right corner). No images or illustrations.
- **Scroll indicator:** Vertical line with "SCROLL" label (bottom-right, hides on mobile).

---

### 2.3 About
- **Section label:** `About Me`
- **Headline:** `Builder by nature, problem-solver by instinct.`
- **Body copy (two columns on desktop — text left, skills right):**

  **Left — paragraphs:**
  1. Final-year B.Tech CS student at GITAM Deemed University, Hyderabad (graduating 2026). Work spans full-stack development, AI-powered healthcare applications, and civic technology.
  2. Internship at Franqlin Tech Systems — designed and shipped an E-Commerce platform and Student Performance Tracker end to end (REST APIs → responsive frontends).
  3. Published research in a peer-reviewed journal on CNN-based skin disease diagnosis. Participated in Smart India Hackathon 2025.
  4. Leads athletics teams, contributes to NSS, coordinates global engagement via AIESEC. Languages: English (Fluent), Telugu (Fluent), Tamil (Fluent), Hindi (Conversant).

  **Left — stat cards (2×2 grid below copy):**
  | Number | Label |
  |--------|-------|
  | 4+ | Projects Built |
  | 1 | Published Paper |
  | 8+ | Certifications |
  | 2026 | Graduation |

  **Right — skill tag groups:**

  | Group | Tags |
  |-------|------|
  | Programming | Java ★, Python ★, JavaScript, HTML / CSS, SQL |
  | Frameworks & Tools | Spring Boot ★, Flask ★, MySQL, REST APIs, Postman, Git, Tableau, IntelliJ IDEA, VS Code |
  | AI / Deep Learning | CNNs ★, ResNet50 ★, DenseNet201 ★, Transfer Learning, Data Augmentation, Grad-CAM, Batch Normalization |
  | Methodology | Agile / SDLC, Risk Awareness, Leadership, Analytical Thinking, Team Collaboration |

  Tags marked ★ should render in the highlighted/accent variant.

---

### 2.4 Projects
- **Section label:** `Selected Work`
- **Headline:** `Projects that matter.`
- Layout: 2-column grid on desktop, 1-column on mobile.
- Each card has: index label · optional badge · title · description · tech pill list.
- Top accent line animates on hover (scale from left).

| # | Badge | Title | Description | Tech |
|---|-------|-------|-------------|------|
| 01 | Hackathon Finalist | CivicSense — Civic Issue Management | Smart civic-issue platform enabling citizens to report and track city maintenance problems through a real-time interactive dashboard. Delivered working solution with scheduling and data visualization under Smart India Hackathon 2025 conditions. | Real-Time Tracking · Dashboard · Data Visualization · Agile Team |
| 02 | Published · GJEIIR 2026 | AI Skin Disease Diagnosis via CNNs | Deep learning framework using ResNet50 and DenseNet201 for automated medical image classification. Flask web app with real-time prediction, confidence scores, Grad-CAM explainability, confusion matrix analysis, and secure user authentication. | Python · ResNet50 · DenseNet201 · Flask · CNNs · Grad-CAM |
| 03 | — | Student Performance Tracker | Full-stack academic management system with CRUD operations, subject and grade modules, database integration, and a responsive frontend. Spring Boot backend with structured architecture. | Spring Boot · MySQL · JavaScript · HTML / CSS |
| 04 | — | E-Commerce Web Application | Feature-rich e-commerce platform with product management, dynamic image upload and serving, AJAX-based form handling, and a fully responsive frontend. Spring Boot backend with MySQL. | Spring Boot · MySQL · AJAX · JavaScript · HTML / CSS |

---

### 2.5 Experience
- **Section label:** `Experience`
- **Headline:** `Where I've built.`
- Layout: two-column rows (left: meta, right: content), separated by horizontal rules.

**Entry 1 — Internship**
- Period: `2024`
- Type: `Internship · Remote`
- Company: `Franqlin Tech Systems`
- Role: `Intern — Java Spring Boot`
- Bullets:
  - Designed and developed full-stack web applications including an E-Commerce platform and a Student Performance Tracker.
  - Used HTML, CSS, JavaScript, Spring Boot, and MySQL across frontend, backend, and database layers.
  - Built and integrated REST APIs, managed application data flow, and validated with Postman.
  - Improved application reliability through systematic testing, debugging, and performance optimization.

**Entry 2 — Education**
- Period: `2022 – 2026`
- Type: `Education · Hyderabad`
- Institution: `GITAM Deemed University`
- Programme: `B.Tech — Computer Science · GPA 7.19/10`
- Bullets:
  - Coursework spanning algorithms, data structures, databases, AI/ML, and software engineering.
  - Published research in GJEIIR on CNN-based deep learning for medical image classification.
  - Active in AIESEC (OGV Dept.), NSS, and led the university athletics team.

---

### 2.6 Research & Publications
- **Section label:** `Research & Publications`
- **Headline:** `Published work.`

| Field | Value |
|-------|-------|
| Title | A Deep Learning Framework for Accurate Skin Disease Diagnosis Using CNNs |
| Journal | Global Journal of Engineering Innovations & Interdisciplinary Research (GJEIIR) |
| Volume / Issue | Vol. 6, Issue 3 |
| Year | 2026 |
| Description | Co-authored research on AI-assisted healthcare systems using CNN-based deep learning architectures. Covers transfer learning with ResNet50 & DenseNet201, medical image preprocessing, classification workflows, probability-based outputs, confusion matrix analysis, and deployment via Flask web applications. |

---

### 2.7 Certifications
- **Section label:** `Certifications`
- **Headline:** `Credentials & simulations.`
- Layout: auto-fill card grid (min 280 px).

| Certificate | Issuer |
|-------------|--------|
| Programming for Everybody — Python | University of Michigan |
| ReactJS | Infosys Springboard |
| Explore Machine Learning using Python | Infosys Springboard |
| Everyday Excel (I, II & III) | University of Colorado |
| From Learner to Builder: AI Agent Architect | IBM SkillsBuild |
| Effective Problem-Solving and Decision-Making | UCI Division of Continuing Education |
| Data Analytics Job Simulation | Deloitte Australia · Forage · Jan 2026 |
| Data Analytics Job Simulation | Tata Group · Forage · Jan 2026 |

---

### 2.8 Beyond Code (Extra-Curriculars)
- **Section label:** `Beyond Code`
- **Headline:** `Leadership & community.`
- Layout: auto-fill card grid (min 260 px).

| # | Activity | Detail |
|---|----------|--------|
| 01 | AIESEC | Member of OGV Department; coordination and global engagement activities. |
| 02 | Athletics | Led university athletics team — leadership and team management. |
| 03 | Data Simulations | Completed Deloitte and Tata Group analytics simulations on Forage; built dashboards and derived business insights. |
| 04 | NSS | Active member of the National Service Scheme; community-driven social initiatives. |

---

### 2.9 Contact
- **Section label:** `Let's Connect`
- **Headline:** `Let's build something great.`
- **Subtext:** Open to full-time roles, internships, and interesting collaborations. Drop a line — I read every message.
- **Primary CTA:** Email button → `srivatsanrangarajan8@gmail.com`
- **Secondary links:** Phone · LinkedIn · GitHub · Projects (anchor)

| Link | Value |
|------|-------|
| Email | srivatsanrangarajan8@gmail.com |
| Phone | +91 79815 87237 |
| LinkedIn | https://www.linkedin.com/in/srivatsan-rangarajan *(update with live URL)* |
| GitHub | *(add live URL)* |

---

### 2.10 Footer
- Left: `© 2026 Srivatsan Rangarajan`
- Right: `GITAM University · Hyderabad, Telangana`

---

## 3. Interactions & Animations

| Behaviour | Specification |
|-----------|--------------|
| Custom cursor | Small filled dot (accent colour) + larger translucent ring, both tracking mouse with slight lag. Use `mix-blend-mode: difference` on dot. Hide native cursor (`cursor: none`). |
| Scroll reveal | All cards and experience rows fade up (`opacity: 0 → 1`, `translateY: 30px → 0`) when entering viewport. Use `IntersectionObserver`. Stagger siblings by 80 ms. |
| Project card hover | Top border line animates `scaleX(0 → 1)` from left on hover. Background darkens slightly. |
| Cert / extra card hover | Border transitions to accent colour. |
| Tag hover | Border and text transition to accent colour. |
| Nav links hover | Text transitions to accent colour. |
| Orbit rings | Two concentric circles rotate slowly at different speeds/directions (CSS `@keyframes`). Decorative only. |
| Scroll indicator | Vertical line pulses opacity (CSS `@keyframes`). |
| Smooth scroll | `scroll-behavior: smooth` on `<html>`. |

---

## 4. Technical Requirements

- **Output:** Single self-contained `index.html` file (HTML + CSS + vanilla JS inline). No external JS frameworks. Google Fonts via CDN link tag is acceptable.
- **Fonts:** Load from Google Fonts — see `brand-guidelines.md` for exact family names.
- **No images or SVG illustrations** — purely typographic and geometric.
- **Responsive breakpoint:** ≤ 860 px collapses to single-column layout. Nav collapses (hamburger optional). Scroll indicator hidden.
- **Accessibility:** Semantic HTML5 (`<nav>`, `<section>`, `<footer>`). All links have descriptive text. Sufficient colour contrast on body text.
- **Performance:** No runtime dependencies. CSS animations use `transform` and `opacity` only (GPU-friendly). `will-change` only where necessary.
- **No placeholder content.** Every section uses only the data provided in this document.

---

## 5. Placeholder Fields to Update Before Deploy

- [ ] LinkedIn profile URL (Section 2.9)
- [ ] GitHub profile URL (Section 2.9)
- [ ] Internship year / date range for Franqlin Tech Systems if more precise date is known
- [ ] Any project live-demo or repo links to add to project cards

---

*End of system-instructions.md*
