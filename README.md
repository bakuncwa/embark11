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
    - Initial Checking: September 22 | Target Release Date: September 24 
- **Navbar + Switch Function**: Luds (DONE)
- **Landing/Hero**: Hazel
- **Pre-Read Now**: Luds
- **Read Now 1**: Gabby
- **Read Now 2**: Gabby
- **EMBARKs**: Kurt
- **About Ad Astra + EMBARK 11**: Luds (IN-PROGRESS)
- **SPU + EB**: Kurt
- **Editorial Team**: Gabby
- **Footer**: Hazel

### Shared Responsibilities
- Toggle switch functionality
- Shared components (navbar, footer)
- Base CSS variables and utilities
- Common JS utilities

## File Structure Guide (as of Sept. 25)

```
embark11/
Volume serial number is 1662-C742
C:.
│   .gitignore
│   index.html
│   README.md
│   teaser.html
│
├───assets
│   ├───fonts
│   └───images
│       │   readnow1bg-a.png
│       │   readnow1kite1-a.png
│       │   readnow1kite2-a.png
│       │   readnow1ppl1-a.png
│       │   readnow1ppl2-a.png
│       │   readnow1sphere-a.png
│       │   readnow1star-a.png
│       │   readnow1text-a.png
│       │   readnow1title-a.png
│       │
│       ├───shared
│       │   ├───backgrounds
│       │   ├───icons
│       │   │   └───social-icons
│       │   └───logos
│       │           side-a-navbar-ad-astra-logo.png
│       │           side-a-navbar-embark-logo.png
│       │           side-b-navbar-embark-logo.png
│       │
│       ├───side-a
│       │   ├───about
│       │   ├───decorative
│       │   ├───hero
│       │   └───team
│       │       ├───directors
│       │       ├───eb
│       │       └───spu
│       └───side-b
│           ├───about
│           ├───decorative
│           ├───hero
│           └───team
│               ├───directors
│               ├───eb
│               └───spu
├───css
│       teaser.css
│
├───data
│   ├───content
│   ├───shared
│   └───team
├───docs
├───img
│       favicon.png
│       teasaer-a5Mobile.png
│       teaser-a1.png
│       teaser-a2.png
│       teaser-a3.png
│       teaser-a4.png
│       teaser-a5.png
│       teaser-b1.png
│       teaser-b2.png
│       teaser-b3.png
│       teaser-b4.png
│       teaser-b5.png
│       teaser-logo.png
│       teasera-a5-mobile.png
│       teasera-a6.png
│
├───pages
│   ├───side-a
│   │       navbar.html
│   │       readnow.html
│   │
│   └───side-b
│           navbar.html
│
├───scripts
│   ├───components
│   ├───shared
│   │   └───components
│   ├───side-a
│   │   ├───components
│   │   │       navbar.js
│   │   │       readnow1.js
│   │   │
│   │   └───pages
│   └───side-b
│       └───components
│               navbar.js
│
└───styles
    │   styles.css
    │
    ├───shared
    │   └───components
    ├───side-a
    │   ├───components
    │   │       navbar.css
    │   │       readnow1.css
    │   │
    │   └───pages
    └───side-b
        ├───components
        │       navbar.css
        │       readnow1.css
        │
        └───pages
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

#### ASSET OPTIMIZATION
- **TINYPNG**: https://tinypng.com/

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
- **Last Updated**: September 25, 2025
- **[EMBARK 11] GitHub Guide GDocs**: https://docs.google.com/document/d/1xzlTQJBSVEaB0Um6BlJxnjtuLAp2pO4wN1_bYwpMWjI/edit?usp=sharing
