// Side A Navbar JavaScript
class SideANavbar {
  constructor() {
    this.currentSide = "A";
    this.isTransitioning = false;
    this.init();
  }

  init() {
    this.setupToggleSwitch();
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setupVerticalFlipEffect();
  }

  setupVerticalFlipEffect() {
    const navbarLinks = document.querySelectorAll(".navbar-menu a");

    navbarLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        if (!this.isTransitioning) {
          link.style.transform = "scaleY(-1)";
        }
      });

      link.addEventListener("mouseleave", () => {
        if (!this.isTransitioning) {
          link.style.transform = "scaleY(1)";
        }
      });
    });
  }

  setupToggleSwitch() {
    const desktopToggle = document.querySelector(".desktop-toggle");
    const mobileToggle = document.querySelector(".mobile-toggle");

    if (desktopToggle) {
      desktopToggle.addEventListener("click", () => {
        this.handleToggleSwitch(desktopToggle);
      });
    }

    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => {
        this.handleToggleSwitch(mobileToggle);
      });
    }
  }

  handleToggleSwitch(toggleSwitch) {
    if (this.isTransitioning) return;

    if (this.currentSide === "A") {
      this.switchToSide("B", toggleSwitch);
    } else {
      this.switchToSide("A", toggleSwitch);
    }
  }

  switchToSide(side, toggleSwitch) {
    if (this.currentSide === side || this.isTransitioning) return;

    this.isTransitioning = true;

    if (side === "B") {
      toggleSwitch.classList.add("side-b");
    } else {
      toggleSwitch.classList.remove("side-b");
    }

    this.syncToggles(side === "B");
    this.transformNavbar(side);
  }

  syncToggles(isSideB) {
    const desktopToggle = document.querySelector(".desktop-toggle");
    const mobileToggle = document.querySelector(".mobile-toggle");

    if (desktopToggle) {
      if (isSideB) {
        desktopToggle.classList.add("side-b");
      } else {
        desktopToggle.classList.remove("side-b");
      }
    }

    if (mobileToggle) {
      if (isSideB) {
        mobileToggle.classList.add("side-b");
      } else {
        mobileToggle.classList.remove("side-b");
      }
    }
  }

  transformNavbar(targetSide) {
    const navbar = document.querySelector(".navbar");
    const logoImg = document.querySelector(".logo-image");

    if (!navbar || !logoImg) {
      this.isTransitioning = false;
      return;
    }

    navbar.classList.add("navbar-transitioning");

    if (targetSide === "B") {
      this.transformToSideB(navbar, logoImg);
    } else {
      this.transformToSideA(navbar, logoImg);
    }

    this.currentSide = targetSide;

    setTimeout(() => {
      navbar.classList.remove("navbar-transitioning");
      this.isTransitioning = false;
    }, 500);
  }

  transformToSideB(navbar, logoImg) {
    navbar.style.background = "#561487";

    logoImg.src =
      "../../assets/images/shared/logos/side-b-navbar-embark-logo.png";
    logoImg.alt = "EMBARK Logo Side B";

    const navbarLinks = document.querySelectorAll(".navbar-menu a");
    navbarLinks.forEach((link) => {
      link.style.setProperty("--hover-color", "#f69b6c");
    });

    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.background = "rgba(86, 20, 135, 0.95)";
    }

    const burgerLines = document.querySelectorAll(".burger-line");
    burgerLines.forEach((line) => {
      line.style.setProperty("--hover-color", "#f69b6c");
    });

    const toggleSwitches = document.querySelectorAll(".toggle-switch");
    toggleSwitches.forEach((toggle) => {
      toggle.style.background = "#110349";
    });

    this.loadSideBStyles();
  }

  transformToSideA(navbar, logoImg) {
    navbar.style.background = "#f05f7d";

    logoImg.src =
      "../../assets/images/shared/logos/side-a-navbar-embark-logo.png";
    logoImg.alt = "EMBARK Logo";

    const navbarLinks = document.querySelectorAll(".navbar-menu a");
    navbarLinks.forEach((link) => {
      link.style.removeProperty("--hover-color");
    });

    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.background = "rgba(240, 95, 125, 0.95)";
    }

    const burgerLines = document.querySelectorAll(".burger-line");
    burgerLines.forEach((line) => {
      line.style.removeProperty("--hover-color");
    });

    const toggleSwitches = document.querySelectorAll(".toggle-switch");
    toggleSwitches.forEach((toggle) => {
      toggle.style.background = "#561487";
    });

    this.removeSideBStyles();
  }

  loadSideBStyles() {
    if (document.querySelector("#side-b-navbar-styles")) {
      return;
    }

    const sideBStyles = document.createElement("link");
    sideBStyles.id = "side-b-navbar-styles";
    sideBStyles.rel = "stylesheet";
    sideBStyles.href = "../../styles/side-b/components/navbar.css";
    document.head.appendChild(sideBStyles);
  }

  removeSideBStyles() {
    const sideBStyles = document.querySelector("#side-b-navbar-styles");
    if (sideBStyles) {
      sideBStyles.remove();
    }
  }

  setupMobileMenu() {
    const burgerMenuBtn = document.querySelector(".burger-menu-btn");
    const navbarMenu = document.querySelector(".navbar-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (!burgerMenuBtn) return;

    burgerMenuBtn.addEventListener("click", () => {
      if (this.isTransitioning) return;

      const isActive = burgerMenuBtn.classList.contains("active");

      burgerMenuBtn.classList.toggle("active");

      if (dropdownMenu) {
        if (isActive) {
          this.closeDropdown(dropdownMenu);
        } else {
          this.openDropdown(dropdownMenu);
        }
      }

      if (navbarMenu) {
        navbarMenu.classList.toggle("active");
      }
    });

    if (dropdownMenu) {
      dropdownMenu.addEventListener("click", (e) => {
        if (e.target === dropdownMenu) {
          this.closeDropdown(dropdownMenu);
          burgerMenuBtn.classList.remove("active");
        }
      });
    }

    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.closeDropdown(dropdownMenu);
        burgerMenuBtn.classList.remove("active");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        if (navbarMenu) navbarMenu.classList.remove("active");
        if (dropdownMenu) this.closeDropdown(dropdownMenu);
        burgerMenuBtn.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        dropdownMenu &&
        dropdownMenu.classList.contains("active")
      ) {
        this.closeDropdown(dropdownMenu);
        burgerMenuBtn.classList.remove("active");
      }
    });
  }

  openDropdown(dropdownMenu) {
    dropdownMenu.classList.add("active");
    const dropdownContent = dropdownMenu.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.transform = "translateY(-10px)";
      dropdownContent.style.opacity = "0";

      requestAnimationFrame(() => {
        dropdownContent.style.transform = "translateY(0)";
        dropdownContent.style.opacity = "1";
      });
    }
  }

  closeDropdown(dropdownMenu) {
    const dropdownContent = dropdownMenu.querySelector(".dropdown-content");
    if (dropdownContent) {
      dropdownContent.style.transform = "translateY(-10px)";
      dropdownContent.style.opacity = "0";

      setTimeout(() => {
        dropdownMenu.classList.remove("active");
        dropdownContent.style.transform = "translateY(0)";
        dropdownContent.style.opacity = "1";
      }, 200);
    } else {
      dropdownMenu.classList.remove("active");
    }
  }

  setupScrollEffect() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SideANavbar();
});

const transitionCSS = `
  .navbar-transitioning {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  .navbar-transitioning .logo-image {
    transition: opacity 0.3s ease !important;
  }
  
  .navbar-transitioning .navbar-menu a {
    transition: color 0.3s ease !important;
  }
  
  .navbar-transitioning .toggle-switch {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  .page-transition {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .dropdown-content {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease !important;
  }

  @media (min-width: 1440px) {
    .dropdown-content {
      top: 110px !important;
    }
  }

  @media (min-width: 1920px) {
    .dropdown-content {
      top: 125px !important;
    }
  }
  
  .navbar-menu a:hover {
    color: var(--hover-color, #ffe495);
  }
  
  .burger-menu-btn:hover .burger-line {
    background: var(--hover-color, #ffe495);
  }
`;

const style = document.createElement("style");
style.textContent = transitionCSS;
document.head.appendChild(style);
