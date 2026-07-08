# Changelog

All notable changes to the Team SRM AUV website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-07-08 — Production Release (Vite + React 19 + TailwindCSS 4)

### Added
- Complete rewrite as a modern Vite + React 19 single-page application
- Modular component architecture with 13 distinct sections
- Reusable UI components: Navbar, Footer, ParticleBackground, ScrollProgress
- Custom React hooks: useScrollReveal, useCountUp
- Tailwind CSS v4 with zero-config setup and modern CSS features
- ESLint 9 flat configuration with React Hooks and Refresh plugins
- Professional project structure following React best practices
- Comprehensive documentation (README, CONTRIBUTING, CHANGELOG, LICENSE)
- Git ignore rules for dependencies, build outputs, and large binary files
- Version archive preserving 9 prototype iterations + multipage draft

### Changed
- Migrated from monolithic HTML prototypes to modular React components
- Replaced inline Babel transpilation with Vite's optimized build pipeline
- Upgraded from React 18 to React 19
- Upgraded from Tailwind CSS v3 (CDN) to Tailwind CSS v4 (Vite plugin)
- Restructured codebase for maintainability and team collaboration

### Removed
- All CDN-based dependencies (React, Babel, Tailwind via script tags)
- Inline styles and scripts from HTML prototypes
- Development-only files from production build

---

## [1.9.0] - 2025-03-02 — v9 Final Monolith (index (8).html)

### Added
- Complete single-file production-ready prototype
- All 13 sections fully implemented and polished
- Advanced animations and micro-interactions
- Gallery section for faculty and infrastructure
- Optimized performance for deployment

### Changed
- Refined all section layouts and responsive behavior
- Improved accessibility across all components
- Finalized color scheme and typography

---

## [1.8.0] - 2025-03-02 — v8 Gallery & Faculty (index (7).html)

### Added
- Faculty Guidance section with advisor profiles
- Infrastructure gallery with lab/facility images
- Image modal/lightbox functionality
- Enhanced visual storytelling

---

## [1.7.0] - 2025-03-02 — v7 Animations & Cursor (index (6).html)

### Added
- Custom cursor effects
- Scroll-triggered animations (IntersectionObserver)
- Particle background system
- Smooth scroll progress indicator
- Count-up animations for statistics

### Changed
- Improved animation performance with requestAnimationFrame
- Reduced motion preferences support

---

## [1.6.0] - 2025-03-02 — v6 Underwater Scene (index (5).html)

### Added
- Immersive underwater-themed hero background
- Canvas-based particle/ripple effects
- Thematic visual identity throughout

---

## [1.5.0] - 2025-03-02 — v5 Achievements Refined (index (4).html)

### Added
- Achievements section with awards timeline
- Competition results and rankings
- Publication and research highlights

### Changed
- Refined data presentation for achievements
- Improved visual hierarchy

---

## [1.4.0] - 2025-03-02 — v4 Vehicles Section (index (3).html)

### Added
- Past Vehicles section with specifications
- Current Project section with development status
- Vehicle comparison tables
- Technical specification cards

---

## [1.3.0] - 2025-03-02 — v3 Domains Added (index (2).html)

### Added
- Domains of Expertise section (Mechanical, Electrical, Software, Systems)
- Team Overview with mission and values
- Sponsors and Why Sponsor sections
- Contact form with validation

---

## [1.2.0] - 2025-03-02 — v2 Enhanced Layout (index (1).html)

### Added
- Responsive navigation with mobile hamburger menu
- Hero section with call-to-action
- Footer with social links
- Basic section structure

### Changed
- Improved layout consistency
- Added Tailwind CSS via CDN

---

## [1.1.0] - 2025-03-02 — v1 Initial Prototype (index.html)

### Added
- First working prototype as single HTML file
- React via Babel CDN transpilation
- Basic component structure inlined
- Team leads section with placeholder data
- Initial styling with Tailwind CSS CDN

---

## [1.0.0] - 2025-03-02 — v0 Multipage Draft (team-srm-auv-multipage.jsx)

### Added
- First multipage architecture attempt
- Separate page components for each section
- Client-side routing concept
- Modular JSX structure (pre-Vite)

---

## Archive Reference

All historical versions are preserved in the `versions/` directory:

| File | Version | Description |
|------|---------|-------------|
| `v0-multipage-draft.jsx` | 1.0.0 | Multipage JSX draft |
| `v1-initial-prototype.html` | 1.1.0 | First HTML prototype |
| `v2-enhanced-layout.html` | 1.2.0 | Enhanced layout + nav |
| `v3-domains-added.html` | 1.3.0 | Domains, sponsors, contact |
| `v4-vehicles-section.html` | 1.4.0 | Past & current vehicles |
| `v5-achievements-refined.html` | 1.5.0 | Achievements & awards |
| `v6-underwater-scene.html` | 1.6.0 | Underwater theme |
| `v7-animations-cursor.html` | 1.7.0 | Animations & custom cursor |
| `v8-gallery-faculty.html` | 1.8.0 | Gallery & faculty section |
| `v9-final-monolith.html` | 1.9.0 | Final polished prototype |

See `versions/README.md` for detailed notes on each version.