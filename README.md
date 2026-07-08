<div align="center">
  <img src="public/vite.svg" alt="Team SRM AUV Logo" width="120" height="120" style="margin-bottom: 1rem;">
  
  # Team SRM AUV — Official Website
  
  **Building intelligent autonomous underwater vehicles for the future of marine robotics**
  
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
  
  [Live Demo](https://teamsrmauv.netlify.app/) • [Report Bug](https://github.com/pradeshwaster-design/srmauvwebsite/issues) • [Request Feature](https://github.com/pradeshwaster-design/srmauvwebsite/issues)
</div>

---

## 📖 About

**Team SRM AUV** is a multidisciplinary student engineering team from **SRM Institute of Science and Technology, Chennai**, dedicated to designing and building **autonomous underwater vehicles (AUVs)** for international competitions like **RoboSub**.

This is the **official production website** — a modern, performant, single-page application showcasing our team, vehicles, research domains, achievements, and sponsorship opportunities.

---

## ✨ Features

| Section | Description |
|---------|-------------|
| 🎯 **Hero** | Dynamic particle background, scroll progress indicator, animated entrance |
| 👥 **Team Overview** | Team stats, mission statement, core values |
| 🧑‍💼 **Team Leads** | Leadership profiles with photos and roles |
| 🔬 **Domains of Expertise** | Mechanical, Electrical, Software, Systems Engineering |
| 🎓 **Faculty Guidance** | Advisor profiles and research backgrounds |
| 🏗 **Infrastructure** | Lab facilities, testing pools, fabrication capabilities |
| 🚢 **Past Vehicles** | Historical AUV designs with specifications |
| ⚡ **Current Project** | Latest vehicle under development |
| 🏆 **Competitions** | RoboSub participation history and results |
| 🥇 **Achievements** | Awards, publications, and milestones |
| 🤝 **Sponsors** | Current partner showcase |
| 💡 **Why Sponsor** | Value proposition for potential sponsors |
| 📬 **Contact** | Get in touch form and social links |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 (with React 19 Compiler ready) |
| **Build Tool** | Vite 7 (Lightning-fast HMR & builds) |
| **Styling** | Tailwind CSS v4 (Zero-config, modern CSS) |
| **Language** | JavaScript (ESM) / JSX |
| **Linting** | ESLint 9 (Flat config) + React Hooks + Refresh |
| **Deployment** | Vercel / Netlify / GitHub Pages ready |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/pradeshwaster-design/srmauvwebsite.git
cd srmauvwebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on source files |

---

## 📁 Project Structure

```
srmauvwebsite/
├── .gitignore              # Comprehensive gitignore
├── README.md               # This file
├── LICENSE                 # MIT License
├── CONTRIBUTING.md         # Contribution guidelines
├── CHANGELOG.md            # Version history
├── package.json            # Project metadata & dependencies
├── package-lock.json       # Locked dependency versions
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint flat configuration
├── index.html              # Vite entry point
├── public/
│   ├── vite.svg            # Favicon / logo
│   └── team/               # Team member photos (add your images here)
├── src/
│   ├── main.jsx            # App entry point
│   ├── App.jsx             # Root component & routing
│   ├── index.css           # Global styles + Tailwind imports
│   ├── assets/             # Static assets (images, fonts)
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│ │   ├── ParticleBackground.jsx
│ │   └── ScrollProgress.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useScrollReveal.js
│   │   └── useCountUp.js
│   └── sections/           # Page sections (13 total)
│       ├── HeroSection.jsx
│       ├── TeamOverview.jsx
│       ├── TeamLeads.jsx
│       ├── DomainsOfExpertise.jsx
│       ├── FacultyGuidance.jsx
│       ├── Infrastructure.jsx
│       ├── PastVehicles.jsx
│       ├── CurrentProject.jsx
│       ├── Competitions.jsx
│       ├── Achievements.jsx
│       ├── Sponsors.jsx
│       ├── WhySponsor.jsx
│       └── Contact.jsx
└── versions/               # Archived prototype versions
    ├── README.md
    ├── v1-initial-prototype.html
    ├── v2-enhanced-layout.html
    ├── v3-domains-added.html
    ├── v4-vehicles-section.html
    ├── v5-achievements-refined.html
    ├── v6-underwater-scene.html
    ├── v7-animations-cursor.html
    ├── v8-gallery-faculty.html
    ├── v9-final-monolith.html
    └── v0-multipage-draft.jsx
```

---

## 👥 Team SRM AUV

| Role | Name |
|------|------|
| **Team Captain** | Preetham |
| **Mechanical Lead** | [Name] |
| **Electrical Lead** | [Name] |
| **Software Lead** | [Name] |
| **Systems Lead** | [Name] |

> **Note**: Team lead photos are referenced in `src/sections/TeamLeads.jsx` as `/team/preetham.jpg`, etc. Add photos to `public/team/` to display them correctly.

---

## 🏛 Institution

**SRM Institute of Science and Technology**  
Chennai, Tamil Nadu, India  
[www.srmist.edu.in](https://www.srmist.edu.in)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

---

## 📦 Version History

See [CHANGELOG.md](CHANGELOG.md) for the complete evolution from v1 prototype → v9 final monolith → production Vite app.

---

## 🔗 Links

- **Competition**: [RoboSub](https://www.robosub.org/)
- **Team Repository**: [github.com/pradeshwaster-design/srmauvwebsite](https://github.com/pradeshwaster-design/srmauvwebsite)
- **Live Site**: [https://teamsrmauv.netlify.app/](https://teamsrmauv.netlify.app/)

---

<div align="center">
  <sub>Built with ❤️ by Team SRM AUV • SRM Institute of Science and Technology</sub>
</div>