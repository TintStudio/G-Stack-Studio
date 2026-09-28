# G-Stack Studio - Marketing & Agency Website

The official, ultra-modern SaaS website for **G-Stack Studio** (The Ultimate Automated Google Authority Stacking & Local SEO Suite).

Designed specifically for deployment on **Vercel**.

---

## 🚀 Tech Stack & Design Architecture

- **Semantic HTML5 & Vanilla JavaScript**: Ultra-lightweight, zero bundle dependencies, near-instant load times (< 0.5s).
- **Tailwind CSS (CDN)**: Modern Dark Mode (`#09090b` zinc/slate background, electric blue `#0284c7` and cyan `#38bdf8` accents, subtle glassmorphic borders).
- **Lucide Icons**: Crisp SVG iconography across all components.
- **Custom CSS (`css/custom.css`)**: Glassmorphism (`backdrop-blur`), ambient radial glow pulses, animated gradient borders, and custom scrollbars.
- **Core Interactions (`js/main.js`)**:
  - Responsive mobile drawer navigation.
  - Interactive FAQ accordions with smooth chevron transitions.
  - Interactive Architecture Mode Selector (Single Authority Hub vs Inside Main Folder vs Separate Folders).
  - Pricing Billing Switcher (Monthly vs Lifetime Master Pass).
  - Interactive ROI Calculator (Calculates monthly agency labor hours saved and dollar margins).
  - Real-time simulated stack generation thread engine in hero mockup.
  - Interactive client feedback toasts.

---

## 📁 Website Architecture

1. `index.html` — High-converting main landing page featuring:
   - Authority pill badge & dual conversion CTAs.
   - Interactive live dashboard preview mockup with animated progress simulation.
   - "Manual Stacking vs G-Stack Studio" comparison table.
   - 6 Bento-Grid core pillar cards.
   - 3-Step "Intake to Live" execution flow.
   - Interactive Architecture Mode selector.
   - Pricing highlights, FAQ accordion, and closing CTA banner.
2. `features.html` — In-depth breakdown of all **20 Google Cloud Assets**:
   - Google Drive Root Hub, Google Sites Portal, Master Sheets Directory, Docs Keyword Silos, Custom MyMaps with KML/GPX, Calendar, Slides, Forms, PDFs, Drawings, 13-Subfolder Silos, RSS Feeds, and Geotagged Galleries.
   - 3 Multi-Architecture Silo Modes with folder tree diagrams.
   - Circular Silo Interlinking diagram and crawl loop mechanics.
   - Local OAuth Privacy flow diagram.
3. `pricing.html` — Transparent licensing tiers:
   - **Starter Agency** ($97/mo or $297 Lifetime).
   - **Unlimited Agency Pro** ($197/mo or $497 Lifetime).
   - **Enterprise Fleet** ($397/mo or $997 Lifetime).
   - Interactive Agency ROI Calculator.
   - 30+ row technical feature matrix.
4. `privacy.html` — Google OAuth API Services User Data Policy & GDPR/CCPA Compliant Disclosures:
   - Explicit confirmation of zero external cloud credential/token logging.
   - Explanations for all requested Google scopes (`drive`, `documents`, `spreadsheets`, `calendar`).
   - Local token file (`token.json`) storage details.
   - Contact details for Google App Verification.
5. `terms.html` — Comprehensive Terms of Service & EULA:
   - Commercial agency rights and unlimited client stack monetization.
   - Asset ownership confirmation (client retains 100% of Drive assets).
   - 30-Day Money-Back Guarantee.
   - SEO algorithmic rankings disclaimer.
6. `contact.html` — Agency Support & Sales Desk:
   - Interactive contact and onboarding inquiry form with client feedback.
   - Support email, office headquarters, and live operational status monitor.
7. `vercel.json` — Production deployment configuration with clean URLs and security headers.

---

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
# In the project directory:
vercel
```

### Option 2: Git Repository Import
1. Push this directory to your GitHub / GitLab repository.
2. In the [Vercel Dashboard](https://vercel.com/new), click **Add New Project** and select the repository.
3. Leave the build settings as default (Framework Preset: **Other** / Static).
4. Click **Deploy**. Your website will be live worldwide on Vercel's Edge Network in seconds.
