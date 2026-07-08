# Version Archive

This directory contains the complete development history of the Team SRM AUV website, preserving all 10 iterations from initial prototype to production-ready Vite application.

## Version Evolution

| Version | File | Date | Description |
|---------|------|------|-------------|
| **v0** | `v0-multipage-draft.jsx` | 2025-03-02 | First multipage architecture attempt using JSX modules with conceptual client-side routing |
| **v1** | `v1-initial-prototype.html` | 2025-03-02 | First working prototype — single HTML file with React via Babel CDN, basic Team Leads section |
| **v2** | `v2-enhanced-layout.html` | 2025-03-02 | Added responsive navigation, Tailwind CSS via CDN, Hero section, Footer |
| **v3** | `v3-domains-added.html` | 2025-03-02 | Domains of Expertise, Team Overview, Sponsors, Why Sponsor, Contact form |
| **v4** | `v4-vehicles-section.html` | 2025-03-02 | Past Vehicles & Current Project sections with spec cards |
| **v5** | `v5-achievements-refined.html` | 2025-03-02 | Achievements timeline, competition results, publications |
| **v6** | `v6-underwater-scene.html` | 2025-03-02 | Immersive underwater-themed hero with canvas particle effects |
| **v7** | `v7-animations-cursor.html` | 2025-03-02 | Scroll animations (IntersectionObserver), custom cursor, count-up stats, scroll progress |
| **v8** | `v8-gallery-faculty.html` | 2025-03-02 | Faculty Guidance profiles, Infrastructure gallery with lightbox |
| **v9** | `v9-final-monolith.html` | 2025-03-02 | **Final polished monolith** — all 13 sections complete, optimized, deployment-ready |

## Production Release

| Version | Description |
|---------|-------------|
| **v2.0.0** | Complete rewrite as **Vite + React 19 + TailwindCSS 4** modular application (see repository root) |

## Key Evolution Milestones

### v0 → v1: Architecture Shift
- Multipage JSX concept → Single-file HTML prototype
- Removed routing complexity for faster iteration

### v1 → v3: Core Content Structure
- Established all 13 major sections
- Defined data structures for team, vehicles, achievements

### v3 → v6: Visual Identity
- Developed underwater theme
- Custom particle backgrounds
- Thematic color palette and typography

### v6 → v9: Polish & Performance
- Advanced animations with performance optimization
- Accessibility improvements
- Responsive refinement across all breakpoints
- Gallery/lightbox for media-rich sections

### v9 → v2.0.0: Production Architecture
- **Module bundler**: Vite 7 (ESM, HMR, optimized builds)
- **Framework**: React 19 (modern concurrent features)
- **Styling**: TailwindCSS 4 (zero-config, native CSS cascade)
- **Architecture**: 13 section components + 4 shared components + 2 custom hooks
- **Tooling**: ESLint 9 flat config, type-aware linting ready
- **Deployment**: Static output ready for Vercel/Netlify/GitHub Pages

## File Naming Convention

```
v{number}-{kebab-case-description}.html
```

- `v0-` prefix: Pre-HTML prototypes (JSX drafts)
- `v1-v9`: Sequential HTML prototype iterations
- `v9-final-monolith.html`: Last prototype before production rewrite

## Usage Notes

> **These files are archived for historical reference only.**
> 
> - They run via CDN (React/Babel/Tailwind) — no build step required
> - Open directly in browser to view
> - Not maintained or updated
> - Production website is in the repository root (`package.json`, `src/`, `public/`)

## Restoring a Prototype

To run any prototype locally:

```bash
# No installation needed — open directly in browser
# Or serve with any static server:
npx serve versions/v9-final-monolith.html
```

---

*Archived on 2025-07-08 as part of v2.0.0 production release*