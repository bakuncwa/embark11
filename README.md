# EMBARK Volume 11

Hi E11 Devs! Here's our project setup and file structure for our references and guide with the files and directories.

Some directories are still subject to change and samples/templates only. You may also add or omit anything (if applicable).

**[EMBARK 11] GitHub Guide GDocs**: https://docs.google.com/document/d/1xzlTQJBSVEaB0Um6BlJxnjtuLAp2pO4wN1_bYwpMWjI/edit?usp=sharing

## Team Structure and Assigned Tasks

### Development Teams
- **Side A**:
  - Focus: `pages/side-a/` and related light theme assets
  - Light theme styling, Side A interactions
  
- **Side B**:
  - Focus: `pages/side-b/` and related dark theme assets
  - Dark theme styling, Side B interactions

### 📌 Web Delegations 📌 | WEBSITE RELEASE DATE: OCTOBER 3, 2025
- **Teaser Page**: Hazel
    - Initial Checking: September 22 | Target Release Date: September 24 
- **Navbar + Switch Function**: Luds 
- **Landing/Hero**: Hazel
- **Pre-Read Now**: Luds
- **Read Now 1**: Gabby
- **Read Now 2**: Gabby
- **EMBARKs**: Kurt
- **About Ad Astra + EMBARK 11**: Luds
- **SPU + EB**: Kurt
- **Editorial Team**: Gabby
- **Footer**: Hazel

### Shared Responsibilities
- Toggle switch functionality
- Shared components (navbar, footer)
- Base CSS variables and utilities
- Common JS utilities

## File Structure Guide (as of Sept. 29)

```
embark11/
Volume serial number is 1662-C742
C:.
│   .gitignore
│   README.md
│   teaser.html
│
├───assets
│   └───images
│       │   credits-bars2-a.png
│       │   credits-bg-b.png
│       │   credits-pinwheel1-a.png
│       │   creditslogo-ab.png
│       │   creditsvendor1-a.png
│       │   creditsvendor1-b.png
│       │   creditsvendor2-a.png
│       │   creditsvendor2-b.png
│       │   hero-blob1-a.png
│       │   hero-blob2-a.png
│       │   hero-blob2-b.png
│       │   hero-character1-a.png
│       │   hero-character2-a.png
│       │   hero-circle-b.png
│       │   hero-EMBARK-a.png
│       │   hero-EMBARK-b.png
│       │   hero-hand-b-mobile.png
│       │   hero-hand-b.png
│       │   hero-hills-a.png
│       │   hero-paths-b.png
│       │   prev-kite.png
│       │   prev-leftside.png
│       │   prev-mobile-bg.png
│       │   prev-rightside.png
│       │   prev-volume10.png
│       │   prev-volume7.png
│       │   prev-volume8.png
│       │   prev-volume9.png
│       │   prevb-background.png
│       │   prevb-left.png
│       │   prevb-mobile-bg.png
│       │   prevb-right.png
│       │   readnow1bg-a.png
│       │   readnow1kite1-a.png
│       │   readnow1kite1-b.png
│       │   readnow1kite2-a.png
│       │   readnow1kite2-b.png
│       │   readnow1ppl1-a.png
│       │   readnow1ppl1-b.png
│       │   readnow1ppl2-a.png
│       │   readnow1sphere-a.png
│       │   readnow1sphere-b.png
│       │   readnow1star-a.png
│       │   readnow1text-a.png
│       │   readnow1text-b.png
│       │   readnow1text-embark-logo-a.png
│       │   readnow1text-embark-logo-b.png
│       │   readnow1title-a.png
│       │   readnow1title-b.png
│       │   readnow2boat-a.png
│       │   readnow2boat-b.png
│       │   readnow2footprint-a.png
│       │   readnow2footprint-b.png
│       │   readnow2text-embark-logo-a.png
│       │   readnow2text-embark-logo-b.png
│       │   readnow2title-a.png
│       │   readnow2title-b.png
│       │   spu-a-bg.png
│       │   spu-bg-b.png
│       │   spu-bianca.png
│       │   spu-brix.png
│       │   spu-elmer.png
│       │   spu-gaby.png
│       │   spu-hazel.png
│       │   spu-irish.png
│       │   spu-jurela.png
│       │   spu-kobe.png
│       │   spu-left-banner.png
│       │   spu-left-confetti.png
│       │   spu-limmy.png
│       │   spu-max.png
│       │   spu-mscathy.png
│       │   spu-msdayan.png
│       │   spu-msriza.png
│       │   spu-right-banner.png
│       │   spu-right-confetti.png
│       │   spu-shaine.png
│       │   spu-shane.png
│       │
│       ├───shared
│       │   ├───backgrounds
│       │   ├───icons
│       │   │   │   side-a-facebook.png
│       │   │   │   side-a-instagram.png
│       │   │   │   side-a-mail.png
│       │   │   │   side-a-tiktok.png
│       │   │   │   side-a-x.png
│       │   │   │   side-b-facebook.png
│       │   │   │   side-b-instagram.png
│       │   │   │   side-b-mail.png
│       │   │   │   side-b-tiktok.png
│       │   │   │   side-b-x.png
│       │   │   │
│       │   │   └───social-icons
│       │   └───logos
│       │           side-a-footer-ad-astra-logo.png
│       │           side-a-navbar-ad-astra-logo.png
│       │           side-a-navbar-embark-logo.png
│       │           side-b-footer-ad-astra-logo.png
│       │           side-b-navbar-embark-logo.png
│       │
│       ├───side-a
│       │   ├───about
│       │   │       side-a-about-aa-embark-logo.png
│       │   │       side-a-about-aa-noise-rectangle.png
│       │   │       side-a-about-embark-logo.png
│       │   │       side-a-about-girl.png
│       │   │       side-a-about-pinwheel-swirl.png
│       │   │       side-a-about-wave.png
│       │   │       side-a-left-btn.svg
│       │   │       side-a-mobile-about-bottom-assets.png
│       │   │       side-a-right-btn.svg
│       │   │
│       │   └───pre-readnow
│       │           side-a-pre-readnow-left-camera.png
│       │           side-a-pre-readnow-left-girl.png
│       │           side-a-pre-readnow-left-noise.png
│       │           side-a-pre-readnow-right-boy.png
│       │           side-a-pre-readnow-right-noise.png
│       │
│       └───side-b
│           ├───about
│           │       side-b-about-aa-bg.png
│           │       side-b-about-aa-embark-logo.png
│           │       side-b-about-aa-logo.png
│           │       side-b-about-aa-noise-rectangle.png
│           │       side-b-about-left-frame-path.png
│           │       side-b-about-right-frame-path.png
│           │       side-b-left-btn.svg
│           │       side-b-mobile-about-bottom-assets.png
│           │       side-b-mobile-about-top-assets.png
│           │       side-b-right-btn.svg
│           │
│           ├───hero
│           │       side-b-hero-bg.png
│           │
│           └───pre-readnow
│                   side-b-pre-readnow-bg.png
│                   side-b-pre-readnow-left-coin-1.png
│                   side-b-pre-readnow-left-coin-2.png
│                   side-b-pre-readnow-left-face.png
│                   side-b-pre-readnow-right-coin-3.png
│                   side-b-pre-readnow-right-coin-4.png
│                   side-b-pre-readnow-right-face.png
│
├───css
│       teaser.css
│
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
│   │       about-aa.html
│   │       credits.html
│   │       footer.html
│   │       hero.html
│   │       index.html
│   │       navbar.html
│   │       pre-readnow.html
│   │       prev-embarks.html
│   │       readnow.html
│   │       spu-a.html
│   │
│   └───side-b
│           about-aa.html
│           credits.html
│           footer.html
│           hero.html
│           index.html
│           navbar.html
│           pre-readnow.html
│           prev-embarks.html
│           readnow.html
│           spu-b.html
│
├───scripts
│   ├───side-a
│   │   └───components
│   │           about-aa.js
│   │           credits.js
│   │           hero.js
│   │           navbar.js
│   │           pre-readnow.js
│   │           prev-embarks.js
│   │           readnow1.js
│   │           SPU-EB-a.js
│   │
│   └───side-b
│       └───components
│               about-aa.js
│               credits.js
│               hero.js
│               navbar.js
│               pre-readnow.js
│               prev-embarks-b.js
│               readnow1.js
│               SPU-EB-b.js
│
└───styles
    │   styles.css
    │
    ├───shared
    │   └───components
    ├───side-a
    │   ├───components
    │   │       footer.css
    │   │       hero.css
    │   │       navbar.css
    │   │       prev-embarks.css
    │   │       readnow1.css
    │   │       readnow2.css
    │   │       SPU-EB-a.css
    │   │
    │   └───pages
    │           about-ad-astra.css
    │           about-decorative-assets.css
    │           credits-decorative-assets.css
    │           credits.css
    │           index.css
    │           pre-readnow-assets.css
    │           pre-readnow.css
    │
    └───side-b
        ├───components
        │       footer.css
        │       hero.css
        │       navbar.css
        │       prev-embarks-b.css
        │       readnow1.css
        │       readnow2.css
        │       SPU-EB-b.css
        │
        └───pages
                about-ad-astra.css
                about-decorative-assets.css
                credits.css
                index.css
                pre-readnow-assets.css
                pre-readnow.css
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

#### GRAINY BACKGROUND WITH CSS AND SVG FILTERS
- **Grainy Backgrounds with CSS and SVG Filters**: https://www.youtube.com/watch?v=vi-vi4_UpqM
- **Grainy Gradient playground**: https://grainy-gradients.vercel.app/
- **URL-encoder for SVG**: https://yoksel.github.io/url-encoder/

### Development Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [W3C HTML Validator](https://validator.w3.org/) - HTML validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS validation

  
#### Asset Organization
- **Shared assets** - logos, icons used by both sides go in `assets/images/shared/`
- **Side-specific assets** - theme-specific images go in respective `side-a/` or `side-b/` folders
- **Optimize images** - use appropriate formats (WebP when possible, with fallbacks)
- **Consistent naming** - use descriptive, kebab-case file names

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
   
## Troubleshooting

**Git conflicts**:
- Communicate with the devs. about file changes
- Pull latest changes before starting work
- Use feature branches to avoid conflicts

### Team Communication
- Use repository Issues for bug reports and feature requests
- Create Pull Requests (PR) for code review
- Document any major decisions

---

- **Repository**: https://github.com/bakuncwa/embark11
- **Last Updated**: October 4, 2025
- **[EMBARK 11] GitHub Guide GDocs**: https://docs.google.com/document/d/1xzlTQJBSVEaB0Um6BlJxnjtuLAp2pO4wN1_bYwpMWjI/edit?usp=sharing
