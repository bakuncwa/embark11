// (SIDE B) Credits JS

let currentIndexCreds = 0;

document.addEventListener("DOMContentLoaded", function () {
  initializeContentCreds();
  initializeNavigationCreds();
  initializeDotIndicatorsCreds();
});

// -----------------------------
// Content data for different slides
// -----------------------------
const contentDataCreds = [
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <h3 class="team-subheading">Directors</h3>

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
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <h3 class="team-subheading">Staffers + Apprentices</h3>
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
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <h3 class="team-subheading">Staffers + Apprentices</h3>
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
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <h3 class="team-subheading">Staffers + Apprentices</h3>

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
  },
  {
    html: `
      <div class="editorial-team paragraph-1-creds">
        <h3 class="team-subheading">Staffers + Apprentices</h3>

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
  }
];

// -----------------------------
// Content initialization
// -----------------------------
function initializeContentCreds() {
  const credsDescription = document.querySelector(".credits-description");
  const credsTitle = document.querySelector(".credits-title");

  credsDescription.innerHTML = "";

  contentDataCreds.forEach((content, index) => {
    const slide = document.createElement("div");
    slide.classList.add("content-slide-creds");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = content.html;
    credsDescription.appendChild(slide);
  });

  credsTitle.innerHTML = contentDataCreds[0].title;

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
      dot.style.background = "#F69B6C";
    } else {
      dot.style.background = "#d9d9d9";
    }
  });

  const credsSlides = document.querySelectorAll(".content-slide-creds");
  const credsTitle = document.querySelector(".credits-title");

  credsSlides.forEach((slide) => slide.classList.remove("active"));

  setTimeout(() => {
    if (credsSlides[currentIndexCreds]) {
      credsSlides[currentIndexCreds].classList.add("active");
      credsTitle.innerHTML = contentDataCreds[currentIndexCreds].title;
    }
  }, 50);

  console.log(`Switched to content ${currentIndexCreds + 1}, direction: ${direction}`);
}

// -----------------------------
// Navigation controls
// -----------------------------
function initializeNavigationCreds() {
  const leftButton = document.querySelector(".left-button-creds");
  const rightButton = document.querySelector(".right-button-creds");

  leftButton.addEventListener("click", function () {
    const newIndex =
      currentIndexCreds > 0 ? currentIndexCreds - 1 : contentDataCreds.length - 1;
    updateSlideCreds(newIndex, "left");
  });

  rightButton.addEventListener("click", function () {
    const newIndex =
      currentIndexCreds < contentDataCreds.length - 1 ? currentIndexCreds + 1 : 0;
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
          e.target.style.background = "#F69B6C";
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
          e.target.style.background = "#F69B6C";
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
      this.style.outline = "2px solid #F69B6C";
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
        e.target.style.outline = "2px solid #F69B6C";
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