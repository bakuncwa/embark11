// (SIDE B) Credits JS - Responsive Version

let currentIndexCreds = 0;

document.addEventListener("DOMContentLoaded", function () {
  initializeContentCreds();
  initializeNavigationCreds();
  initializeDotIndicatorsCreds();
  initializeResponsiveText();
});

// -----------------------------
// Content data for different slides
// -----------------------------
const contentDataCreds = [
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <div class="team-grid">
          <div class="team-item">
            <h4>Chief Copy Editor</h4>
            <p>Max Soliman</p>
          </div>
          <div class="team-item">
            <h4>Layout Editor</h4>
            <p>Shaine Mias</p>
          </div>
          <div class="team-item">
            <h4>Copy Editor</h4>
            <p>Limmy Limbo</p>
          </div>
          <div class="team-item">
            <h4>Photo Editor</h4>
            <p>Hazel Anne Miranda</p>
          </div>
          <div class="team-item">
            <h4>Creative Director</h4>
            <p>Jurela Ann Oh</p>
          </div>
          <div class="team-item">
            <h4>Marketing Editor</h4>
            <p>Irish Goco</p>
          </div>
          <div class="team-item">
            <h4>Art Director</h4>
            <p>Shaine Mias</p>
          </div>
          <div class="team-item">
            <h4>Project Manager</h4>
            <p>Shakira Cudal</p>
          </div>
        </div>
      </div>
    `,
    title: "Editorial Team",
    subheading: "Directors",
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <div class="team-section">
          <h3 class="section-title">Art & Design</h3>
          <div class="team-grid two-cols">
            <div>
                <p>Pontrie Buenaventura</p>
                <p>Rose Buquiron</p>
                <p>Jasper Cabaron</p>
                <p>Gab Charvet</p>
            </div>
            <div>
                <p>Charm Chua</p>
                <p>Dres Deña</p>
                <p>Amrish Guido</p>
                <p>Tommy Mallari</p>
            </div>
            <div>
                <p>Sem Malvar</p>
                <p>Shaine Mias</p>
                <p>Jurela Oh</p>
                <p>Ella Oreta</p>
            </div>
            <div>
                <p>Gabriel Rosales</p>
                <p>Kring Sangual</p>
                <p>Kas Tongco</p>
            </div>
          </div>
        </div>
      </div>
    `,
    title: "Editorial Team",
    subheading: "Staffers + Apprentices",
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <div class="team-section">
          <h3 class="section-title">Writers</h3>
          <div class="team-grid two-cols">
            <div>
                <p>Gabrielle Ysabel Almirol</p>
                <p>Prince Chris Jayzmier Balaoro</p>
                <p>Ariana Nicole Barroquillo</p>
            </div>
            <div>
                <p>Keziah Cuison</p>
                <p>Thoby Go</p>
                <p>Kurt Andrei Haciñas</p>
            </div>
            <div>
                <p>Limmy Limbo</p>
                <p>Shaine Mias</p>
                <p>Hazel Anne Miranda</p>
            </div>
            <div>
                <p>Tam Radaza</p>
                <p>Brix Rañeses</p>
                <p>Max Soliman</p>
                <p>Kobe Uy</p>
            </div>
          </div>
        </div>
      </div>
    `,
    title: "Editorial Team",
    subheading: "Staffers + Apprentices",
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <!-- Photo -->
        <div class="team-section">
          <h3 class="section-title">Photo</h3>
          <div class="team-grid two-cols">
            <div>
              <p>Vonne Aquino</p>
              <p>Kristina Corazon Batino</p>
              <p>Shakira Cudal</p>
              <p>Marshel Escalera</p>
            </div>
            <div>
              <p>Jacob Hao</p>
              <p>Hazel Anne Miranda</p>
              <p>Therese Offemaria</p>
              <p>Brix Rañeses</p>
            </div>
          </div>
        </div>

        <!-- Marketing -->
        <div class="team-section paragraph-1-creds">
          <h3 class="section-title">Marketing</h3>
          <div class="team-grid two-cols">
              <div>
                  <p>Reine Albania</p>
                  <p>Ehra Gail Dizon</p>
              </div>
              <div>
                  <p>Irish Goco</p>
                  <p>Maruel Lui</p>
              </div>
          </div>
        </div>
    `,
    title: "Editorial Team",
    subheading: "Staffers + Apprentices",
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <!-- Video -->
        <div class="team-section paragraph-1-creds">
          <h3 class="section-title">Video</h3>
          <div class="team-grid two-cols">
            <div>
              <p>Irish Cristobal</p>
              <p>Jilyanne Sio</p>
            </div>
            <div>
              <p>Shane Picardal</p>
            </div>
          </div>
        </div>

        <!-- Web Development -->
        <div class="team-section paragraph-1-creds">
          <h3 class="section-title">Web Development</h3>
          <div class="team-grid two-cols">
              <div>
                  <p>Gabrielle Ysabel Almirol</p>
                  <p>Hazelle Ann Gamoras</p>
              </div>
              <div>
                  <p>Kurt Andrei Haciñas</p>
                  <p>Ludrein Reimar Salvador</p>
              </div>
          </div>
        </div>
    `,
    title: "Editorial Team",
    subheading: "Staffers + Apprentices",
  },
];

// -----------------------------
// Content initialization
// -----------------------------
function initializeContentCreds() {
  const credsDescription = document.querySelector(".credits-description");
  const credsTitle = document.querySelector(".credits-title");
  const teamSubheading = document.querySelector(".team-subheading-fixed");

  credsDescription.innerHTML = "";

  contentDataCreds.forEach((content, index) => {
    const slide = document.createElement("div");
    slide.classList.add("content-slide-creds");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = content.html;
    credsDescription.appendChild(slide);
  });

  credsTitle.innerHTML = contentDataCreds[0].title;
  if (teamSubheading) {
    teamSubheading.innerHTML = contentDataCreds[0].subheading;
  }

  if (!document.querySelector(".dot-indicators-creds")) {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("dot-indicators-creds");

    contentDataCreds.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-indicator-creds");
      if (index === 0) dot.classList.add("active");
      dot.setAttribute("data-index", index);
      dot.setAttribute("aria-label", `Page ${index + 1}`);
      dot.setAttribute("role", "button");
      dot.setAttribute("tabindex", "0");
      dotContainer.appendChild(dot);
    });

    credsDescription.parentNode.appendChild(dotContainer);
  }
}

// -----------------------------
// Responsive text sizing
// -----------------------------
function initializeResponsiveText() {
  adjustTextSize();

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      adjustTextSize();
    }, 250);
  });

  // Handle orientation changes
  window.addEventListener("orientationchange", function () {
    setTimeout(adjustTextSize, 100);
  });
}

function adjustTextSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isLandscape = width > height;

  const root = document.documentElement;

  // Mobile Portrait (up to 480px)
  if (width <= 480 && !isLandscape) {
    root.style.setProperty("--credits-title-size", "clamp(1.5rem, 5vw, 2rem)");
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.1rem, 4vw, 1.3rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(0.95rem, 3.5vw, 1.1rem)"
    );
    root.style.setProperty("--team-item-h4-size", "clamp(0.85rem, 3vw, 1rem)");
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(0.8rem, 2.8vw, 0.95rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(0.8rem, 3vw, 1.2rem)");
    root.style.setProperty("--content-padding", "clamp(1rem, 4vw, 1.5rem)");
  }
  // Mobile Landscape (up to 812px wide, short height)
  else if (width <= 812 && isLandscape && height <= 480) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(1.2rem, 3vh, 1.5rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(0.95rem, 2.5vh, 1.1rem)"
    );
    root.style.setProperty("--section-title-size", "clamp(0.85rem, 2vh, 1rem)");
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(0.75rem, 1.8vh, 0.9rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(0.7rem, 1.6vh, 0.85rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(0.6rem, 2vh, 1rem)");
    root.style.setProperty("--content-padding", "clamp(0.8rem, 2vh, 1.2rem)");
  }
  // Tablets (481px - 768px)
  else if (width > 480 && width <= 768) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(1.8rem, 4vw, 2.2rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.3rem, 3vw, 1.5rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.1rem, 2.5vw, 1.3rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(0.95rem, 2vw, 1.1rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(0.9rem, 1.8vw, 1.05rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(1rem, 2.5vw, 1.5rem)");
    root.style.setProperty("--content-padding", "clamp(1.5rem, 3vw, 2rem)");
  }
  // Small Laptops (769px - 1024px)
  else if (width > 768 && width <= 1024) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(2rem, 3.5vw, 2.5rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.4rem, 2.5vw, 1.7rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.2rem, 2vw, 1.4rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(1rem, 1.6vw, 1.15rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(0.95rem, 1.5vw, 1.1rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(1.2rem, 2vw, 1.8rem)");
    root.style.setProperty("--content-padding", "clamp(1.8rem, 2.5vw, 2.5rem)");
  }
  // Desktop (1025px - 1440px)
  else if (width > 1024 && width <= 1440) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(2.2rem, 3vw, 2.8rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.5rem, 2.2vw, 1.8rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.3rem, 1.8vw, 1.5rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(1.05rem, 1.4vw, 1.2rem)"
    );
    root.style.setProperty("--team-item-p-size", "clamp(1rem, 1.3vw, 1.15rem)");
    root.style.setProperty("--team-grid-gap", "clamp(1.5rem, 2vw, 2rem)");
    root.style.setProperty("--content-padding", "clamp(2rem, 2.5vw, 3rem)");
  }
  // Large Desktop (1441px - 1919px)
  else if (width > 1440 && width <= 1919) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(2.5rem, 2.8vw, 3rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.6rem, 2vw, 1.9rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.4rem, 1.6vw, 1.6rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(1.1rem, 1.3vw, 1.25rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(1.05rem, 1.2vw, 1.2rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(1.8rem, 2vw, 2.3rem)");
    root.style.setProperty("--content-padding", "clamp(2.5rem, 2.8vw, 3.5rem)");
  }
  // Ultra Wide (1920px - 2559px)
  else if (width > 1919 && width <= 2559) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(2.8rem, 2.5vw, 3.2rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.8rem, 1.8vw, 2rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.5rem, 1.5vw, 1.7rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(1.15rem, 1.2vw, 1.3rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(1.1rem, 1.15vw, 1.25rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(2rem, 2.2vw, 2.5rem)");
    root.style.setProperty("--content-padding", "clamp(3rem, 3vw, 4rem)");
  }
  // Extra Ultra Wide (2560px+)
  else if (width > 2559) {
    root.style.setProperty(
      "--credits-title-size",
      "clamp(3rem, 2.2vw, 3.5rem)"
    );
    root.style.setProperty(
      "--team-subheading-size",
      "clamp(1.9rem, 1.6vw, 2.2rem)"
    );
    root.style.setProperty(
      "--section-title-size",
      "clamp(1.6rem, 1.4vw, 1.8rem)"
    );
    root.style.setProperty(
      "--team-item-h4-size",
      "clamp(1.2rem, 1.1vw, 1.4rem)"
    );
    root.style.setProperty(
      "--team-item-p-size",
      "clamp(1.15rem, 1.05vw, 1.3rem)"
    );
    root.style.setProperty("--team-grid-gap", "clamp(2.2rem, 2vw, 2.8rem)");
    root.style.setProperty("--content-padding", "clamp(3.5rem, 2.8vw, 4.5rem)");
  }

  // Apply styles to elements
  applyResponsiveStyles();
}

function applyResponsiveStyles() {
  const credsTitle = document.querySelector(".credits-title");
  const teamSubheadings = document.querySelectorAll(".team-subheading");
  const sectionTitles = document.querySelectorAll(".section-title");
  const teamItemH4s = document.querySelectorAll(".team-item h4");
  const teamItemPs = document.querySelectorAll(".team-item p, .team-grid p");
  const teamGrids = document.querySelectorAll(".team-grid");
  const editorialTeams = document.querySelectorAll(".editorial-team");

  if (credsTitle) {
    credsTitle.style.fontSize = "var(--credits-title-size)";
  }

  teamSubheadings.forEach((el) => {
    el.style.fontSize = "var(--team-subheading-size)";
  });

  sectionTitles.forEach((el) => {
    el.style.fontSize = "var(--section-title-size)";
  });

  teamItemH4s.forEach((el) => {
    el.style.fontSize = "var(--team-item-h4-size)";
  });

  teamItemPs.forEach((el) => {
    el.style.fontSize = "var(--team-item-p-size)";
    el.style.lineHeight = "1.5";
  });

  teamGrids.forEach((el) => {
    el.style.gap = "var(--team-grid-gap)";
  });

  editorialTeams.forEach((el) => {
    el.style.padding = "var(--content-padding)";
  });
}

// -----------------------------
// Slide update management
// -----------------------------
function updateSlideCreds(newIndex, direction = "none") {
  if (newIndex < 0 || newIndex >= contentDataCreds.length) return;

  currentIndexCreds = newIndex;

  const dotIndicators = document.querySelectorAll(".dot-indicator-creds");
  dotIndicators.forEach((dot, i) => {
    dot.classList.remove("active");
    dot.style.background = "";
    if (i === currentIndexCreds) {
      dot.classList.add("active");
      dot.style.background = "#3394D8";
    } else {
      dot.style.background = "#d9d9d9";
    }
  });

  const credsSlides = document.querySelectorAll(".content-slide-creds");
  const credsTitle = document.querySelector(".credits-title");
  const teamSubheading = document.querySelector(".team-subheading-fixed");

  credsSlides.forEach((slide) => slide.classList.remove("active"));

  setTimeout(() => {
    if (credsSlides[currentIndexCreds]) {
      credsSlides[currentIndexCreds].classList.add("active");
      credsTitle.innerHTML = contentDataCreds[currentIndexCreds].title;
      if (teamSubheading) {
        teamSubheading.innerHTML =
          contentDataCreds[currentIndexCreds].subheading;
      }
      adjustTextSize(); // Reapply responsive sizing after slide change
    }
  }, 50);

  console.log(
    `Switched to content ${currentIndexCreds + 1}, direction: ${direction}`
  );
}

// -----------------------------
// Navigation controls
// -----------------------------
function initializeNavigationCreds() {
  const leftButton = document.querySelector(".left-button-creds");
  const rightButton = document.querySelector(".right-button-creds");

  leftButton.addEventListener("click", function () {
    const newIndex =
      currentIndexCreds > 0
        ? currentIndexCreds - 1
        : contentDataCreds.length - 1;
    updateSlideCreds(newIndex, "left");
  });

  rightButton.addEventListener("click", function () {
    const newIndex =
      currentIndexCreds < contentDataCreds.length - 1
        ? currentIndexCreds + 1
        : 0;
    updateSlideCreds(newIndex, "right");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      leftButton.click();
    } else if (e.key === "ArrowRight") {
      rightButton.click();
    }
  });
}

// -----------------------------
// Dot indicators management
// -----------------------------
function initializeDotIndicatorsCreds() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot-indicator-creds")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      updateSlideCreds(index, "dot");
      console.log(`Dot ${index + 1} clicked`);
    }
  });

  document.addEventListener(
    "mouseenter",
    function (e) {
      if (e.target.classList.contains("dot-indicator-creds")) {
        if (!e.target.classList.contains("active")) {
          e.target.style.background = "#3394D8";
        }
      }
    },
    true
  );

  document.addEventListener(
    "mouseleave",
    function (e) {
      if (e.target.classList.contains("dot-indicator-creds")) {
        if (e.target.classList.contains("active")) {
          e.target.style.background = "#3394D8";
        } else {
          e.target.style.background = "#d9d9d9";
        }
      }
    },
    true
  );
}

// -----------------------------
// Accessibility & focus styling
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-button-creds");
  navButtons.forEach((button) => {
    button.addEventListener("focus", function () {
      this.style.outline = "2px solid #3394D8";
      this.style.outlineOffset = "4px";
    });
    button.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.target.classList.contains("dot-indicator-creds")) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.target.click();
      }
    }
  });

  document.addEventListener(
    "focus",
    function (e) {
      if (e.target.classList.contains("dot-indicator-creds")) {
        e.target.style.outline = "2px solid #3394D8";
        e.target.style.outlineOffset = "2px";
      }
    },
    true
  );

  document.addEventListener(
    "blur",
    function (e) {
      if (e.target.classList.contains("dot-indicator-creds")) {
        e.target.style.outline = "none";
      }
    },
    true
  );
});
