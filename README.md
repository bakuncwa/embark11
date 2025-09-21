# EMBARK Volume 11

Hi E11 Devs! Here's our initial setup and project structure for our references and guide with the files and directories.

Some directories are still subject to change and samples/templates only. You may also add or omit anything (if applicable).

**[EMBARK 11] GitHub Guide GDocs**: https://docs.google.com/document/d/1xzlTQJBSVEaB0Um6BlJxnjtuLAp2pO4wN1_bYwpMWjI/edit?usp=sharing

## Project Overview

EMBARK Vol. 11:
- **Side A (Light Side)**
- **Side B (Dark Side)**

## Repository Info

- **Repository**: https://github.com/bakuncwa/embark11
- **Main Branch**: `main`

## Team Structure and Assigned Tasks

### Development Teams
- **Side A**:
  - Focus: `pages/side-a/` and related light theme assets
  - Light theme styling, Side A interactions
  
- **Side B**:
  - Focus: `pages/side-b/` and related dark theme assets
  - Dark theme styling, Side B interactions

### 📌 Web Delegations 📌
- **Teaser Page**: Hazel
    - Initial Checking: September 22 | Release Date: September 24 
- **Navbar + Switch Function**: Luds (DONE)
- **Landing**: Hazel
- **About Ad Astra + EMBARK 11**: Luds (IN-PROGRESS)
- **About EMBARK 11**: Gabby
- **Read Now 1**: Gabby
- **Read Now 2**: Gabby
- **EMBARKs**: Kurt
- **SPU + EB**: Kurt
- **Editorial Team**: Ludrein
- **Footer**: Hazel

### Shared Responsibilities
- Toggle switch functionality
- Shared components (navbar, footer)
- Base CSS variables and utilities
- Common JS utilities

## File Structure Guide (as of Sept. 15)

```
embark11/
├── index.html                  # Main entry point (redirects to teaser)
├── teaser.html                 # Teaser/landing page
├── README.md                   # This documentation file
├── .gitignore                  # Git ignore rules
│
├── pages/
│   ├── side-a/
│   │   └── index.html          # Side A main page
│   └── side-b/
│       └── index.html          # Side B main page
│
├── assets/
│   ├── fonts/                  # Web fonts for both sides (e.g. Sora, Poppins)
│   └── images/
│       ├── shared/             # Images used by both sides
│       │   ├── logos/          # EMBARK and Ad Astra logos
│       │   ├── backgrounds/    # Shared background images
│       │   └── icons/          # Icons and social media icons
│       ├── side-a/             # Side A specific images
│       │   ├── hero/           # Hero section images
│       │   ├── about/          # About section images
│       │   ├── decorative/     # Decorative elements
│       │   └── team/           # Team member photos
│       │       ├── spu/        # SPU team photos
│       │       ├── eb/         # EB team photos
│       │       └── directors/  # Directors and staff photos
│       └── side-b/             # Dark side specific images
│           ├── hero/           # Hero section images
│           ├── about/          # About section images
│           ├── decorative/     # Decorative elements
│           └── team/           # Team member photos
│               ├── spu/        # SPU team photos
│               ├── eb/         # EB team photos
│               └── directors/  # Directors and staff photos
│
├── styles/
│   ├── shared/
│   │   └── components/             # Shared component base styles
│   │       ├── footer.css          # Base footer structure
│   │       ├── navbar.css          # Base navbar structure
│   │       └── toggle-switch.css   # Toggle switch functionality
│   ├── side-a/
│   │   ├── components/             # Light theme component styles
│   │   │   ├── footer-theme.css    # Light footer theme
│   │   │   └── navbar-theme.css    # Light navbar theme
│   │   └── pages/                  # Side A page-specific styles
│   └── side-b/
│       ├── components/             # Dark theme component styles
│       │   ├── footer-theme.css    # Dark footer theme
│       │   └── navbar-theme.css    # Dark navbar theme
│       └── pages/                  # Side B page-specific styles
│
├── scripts/
│   ├── shared/
│   │   └── components/             # Shared JavaScript components
│   │       ├── footer.js           # Footer functionality
│   │       ├── navbar.js           # Navbar interactions
│   │       └── toggle-switch.js    # Side switching logic
│   ├── side-a/                     # Light side specific JavaScript
│   └── side-b/                     # Dark side specific JavaScript
│
├── data/
│   ├── shared/                 # Shared configuration data
│   ├── content/                # Content data files (e.g. website copies)
│   └── team/                   # Team member data (if applicable)
│
└── docs/                       # Additional documentation
```

## Website Structure

Both Side A and Side B contain the same 10 sections:

1. **Navbar** (with toggle switch to switch between sides)
2. **Hero Section** (main banner with title and key messaging)
3. **Read Now Flip** (preview section before main read now)
4. **Read Now** (call-to-action section)
5. **About Ad Astra + EMBARK 11** (info. about the org. + current volume)
6. **About Ad Astra** (info. about the organization)
7. **EMBARK Team: SPU** (SPU Associates)
8. **EMBARK Team: EB** (Editorial Board team members)   # single section for SPU + EB  
9. **EMBARK Team: Directors + Staffers** (Directors and staff)
10. **Footer** (contact info. and links)

## Development Workflow

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bakuncwa/embark11.git
   cd embark11
   ```

3. **Navigate to your assigned area**:
   - Side A - Work primarily in `pages/side-a/` and `styles/side-a/`
   - Side B - Work primarily in `pages/side-b/` and `styles/side-b/`

### Git Workflow

1. **Before starting work**:
   ```bash
   git pull origin main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-section-name
   # Examples:
   # git checkout -b feature/side-a-hero
   # git checkout -b feature/side-b-team-section
   # git checkout -b feature/toggle-functionality
   ```

3. **Make your changes and commit**:
   ```bash
   git add .
   git commit -m "descriptive message about your changes"
   ```

4. **Push your branch**:
   ```bash
   git push -u origin feature/your-section-name
   ```

5. **Create a Pull Request** on GitHub for code review

### Component Development Strategy

#### Shared Components (Footer, Navbar)
1. **Base Structure** - create the base HTML structure and core CSS in `shared/components/`
2. **Theme Styling** - each team styles their theme version in their respective `components/` folder
3. **Functionality** - add JS interactions in `shared/components/`

#### Example - Footer Implementation:
```html
<!-- Both sides include base + theme -->
<link rel="stylesheet" href="../../styles/shared/components/footer.css">
<link rel="stylesheet" href="../../styles/side-a/components/footer-theme.css">
```

#### Asset Organization
- **Shared assets** - logos, icons used by both sides go in `assets/images/shared/`
- **Side-specific assets** - theme-specific images go in respective `side-a/` or `side-b/` folders
- **Optimize images** - use appropriate formats (WebP when possible, with fallbacks)
- **Consistent naming** - use descriptive, kebab-case file names

## Troubleshooting

**Git conflicts**:
- Communicate with the devs. about file changes
- Pull latest changes before starting work
- Use feature branches to avoid conflicts

## Resources and References

### Design Resources
- **[E11] FIGMA FILE**: https://www.figma.com/design/HwenAFyBThaoM9GEokSwuX/EMBARK-11?node-id=262-204&t=8qV0e49RHjJVTllQ-1
- **[E11] PITCH DECK**: https://docs.google.com/presentation/d/1GQ6B15Mf4u0DZls6ioRQOep94nt3mbnh1e6fMuHvelc/edit#slide=id.g3203186aec0_0_5
- **[E11] WEB ASSETS**: https://drive.google.com/drive/folders/1xJ63M-fALzeR2Ent54Rw2Tji-7Kz9aiQ
- **[E11] WEBSITE COPIES**: https://docs.google.com/document/d/16GPqIF4yAp9lQLSuBwYXxLCZMKaoGHhYAel0AFp9MZI/edit?tab=t.0
- **[E11] CREDITS**: https://docs.google.com/document/d/15Z42PnOMi6drb3cmVoC383lvMdD5tkXTH3m-zSwUcjU/edit?tab=t.0

#### GOOGLE FONTS TO EMBED/IMPORT IN CSS
- **SORA**: https://fonts.google.com/specimen/Sora
- **POPPINS**: https://fonts.google.com/specimen/Poppins

### Development Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [W3C HTML Validator](https://validator.w3.org/) - HTML validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS validation

### Team Communication
- Use repository Issues for bug reports and feature requests
- Create Pull Requests (PR) for code review
- Document any major decisions

---

- **Repository**: https://github.com/bakuncwa/embark11
- **Last Updated**: September 21, 2025
- **[EMBARK 11] GitHub Guide GDocs**: https://docs.google.com/document/d/1xzlTQJBSVEaB0Um6BlJxnjtuLAp2pO4wN1_bYwpMWjI/edit?usp=sharing
