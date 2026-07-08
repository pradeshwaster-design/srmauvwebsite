# Contributing to Team SRM AUV Website

Thank you for your interest in contributing to the official Team SRM AUV website! We welcome contributions from team members, alumni, and the open-source community.

---

## 🤝 How to Contribute

### 1. Reporting Issues
- Check if the issue already exists in [Issues](https://github.com/pradeshwaster-design/srmauvwebsite/issues)
- Use the appropriate issue template (Bug Report, Feature Request, Documentation)
- Provide clear reproduction steps, screenshots, and environment details

### 2. Suggesting Features
- Open a Feature Request issue with detailed description
- Explain the use case and benefit to the team/community
- Discuss implementation approach before starting work

### 3. Code Contributions

#### Setup
```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR-USERNAME/srmauvwebsite.git
cd srmauvwebsite

# Install dependencies
npm install

# Create a feature branch
git checkout -b feature/your-feature-name
```

#### Development Guidelines
- **Code Style**: Follow existing patterns in the codebase
- **Components**: Keep components small, focused, and reusable
- **Styling**: Use Tailwind CSS utility classes; avoid custom CSS unless necessary
- **Performance**: Optimize images, lazy-load where appropriate
- **Accessibility**: Maintain semantic HTML, proper ARIA labels, color contrast

#### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add new hero animation
fix: resolve mobile navbar toggle issue
docs: update README with deployment instructions
style: fix formatting in TeamLeads.jsx
refactor: extract common button component
```

#### Pull Request Process
1. Ensure `npm run lint` passes
2. Ensure `npm run build` succeeds
3. Update documentation if needed
4. Request review from team leads
5. Address review feedback
6. Squash and merge after approval

---

## 🏗 Project Structure Guidelines

### Adding New Sections
1. Create component in `src/sections/YourSection.jsx`
2. Import and add to `src/App.jsx`
3. Follow existing section patterns (scroll reveal, responsive design)

### Adding Team Members
1. Add photo to `public/team/firstname-lastname.jpg`
2. Update `src/sections/TeamLeads.jsx` with member data
3. Follow existing data structure

### Modifying Styles
- Prefer Tailwind utilities over custom CSS
- Use CSS variables in `src/index.css` for theme values
- Maintain dark/light mode compatibility

---

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Code Review Checklist

- [ ] Code follows project conventions
- [ ] No console.log or debugger statements
- [ ] Components are properly typed (if using TypeScript)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Accessibility standards maintained
- [ ] No unnecessary dependencies added
- [ ] Documentation updated if needed

---

## 🏷 Versioning

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

---

## 📞 Getting Help

- **Team Leads**: Contact via Discord/Slack
- **Technical Questions**: Open a GitHub Discussion
- **Urgent Issues**: Tag `@team-leads` in issue

---

## 📜 Code of Conduct

By participating, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md) — be respectful, inclusive, and collaborative.

---

> **Team SRM AUV** • SRM Institute of Science and Technology, Chennai