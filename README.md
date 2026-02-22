# Tattvasim — Quantum-Powered Drug Discovery Website

A faithful static HTML/CSS/JS replica of **[tattvasim.netlify.app](https://tattvasim.netlify.app)**, reverse-engineered from the original build artifacts.

## 📁 Project Structure

```
tattvasim-replica/
├── index.html          # Home page
├── services.html       # Services page (all 6 service offerings)
├── case-studies.html   # Industry case studies (7 detailed studies)
├── team.html           # Team & advisors
├── contact.html        # Contact form with success state
├── style.css           # Complete design system (CSS variables, all styles)
├── main.js             # Interactivity (nav scroll, hamburger, animations)
├── favicon.ico         # Original favicon
└── assets/
    ├── tattvasim-logo-ddbl-6zo.png   # Official logo
    └── hero-quantum-deg37c3t.jpg     # Hero background image
```

## 🚀 Deploy to GitHub Pages

### Option 1 — GitHub CLI (fastest)
```bash
cd tattvasim-replica
git init
git add .
git commit -m "Initial commit: Tattvasim website replica"
gh repo create tattvasim-website --public --source=. --remote=origin --push
# Then enable GitHub Pages in repo Settings → Pages → Branch: main
```

### Option 2 — Manual GitHub
```bash
git init
git add .
git commit -m "Initial commit: Tattvasim website replica"
git remote add origin https://github.com/YOUR_USERNAME/tattvasim-website.git
git branch -M main
git push -u origin main
```
Then go to: **Settings → Pages → Source: Deploy from branch → Branch: main → / (root)**

### Option 3 — Netlify (one command)
```bash
npx netlify-cli deploy --dir=. --prod
```

## ✨ Pages & Features

| Page | Description |
|------|-------------|
| `index.html` | Hero with animated orbs, services overview, workflow, case studies preview, domains grid |
| `services.html` | All 6 services with full descriptions and capability lists |
| `case-studies.html` | 7 real case studies (Kinase Inhibitor, PROTAC, ADC, Metalloenzyme, MOF Design, MOF Electrodes, Green Hydrogen) |
| `team.html` | Dr. Chirag N. Patel, Dr. Krunal M. Modi, scientific advisors |
| `contact.html` | Contact form with validation and success state |

## 🎨 Design System

Built with CSS custom properties matching the original Tailwind design tokens:
- **Colors**: Primary deep navy, Accent purple (`hsl(265,70%,55%)`), Highlight teal (`hsl(175,65%,45%)`), Signal green (`hsl(155,75%,45%)`)
- **Typography**: Outfit (display) + JetBrains Mono
- **Animations**: fade-up, float, orbital-spin, pulse-glow
- **Responsive**: Mobile-first, breakpoints at 640px, 768px, 1024px

## 🌐 Tech Stack

Pure HTML5 + CSS3 + Vanilla JS — **no framework dependencies**, no build step required.
