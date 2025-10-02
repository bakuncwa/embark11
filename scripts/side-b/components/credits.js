// (SIDE B) Credits JS

let currentIndex = 0;

// Repel effect config
const repelConfig = {
  maxDistance: 150,
  maxOffset: 30,
  smoothness: 1,
  enabled: true,
};

const repelElements = new Map();

document.addEventListener("DOMContentLoaded", function () {
  initializeContent();
  initializeNavigation();
  initializeDotIndicators();
  initializeRepelEffect();
});

// Content data for different slides
const contentData = [
{
  html: `
    <div class="editorial-team paragraph-1">
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
    <div class="editorial-team paragraph-1">
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
            <p>Andrei Esguerra</p>
            <p>Amrish Guido</p>
        </div>
        <div>
            <p>Tommy Mallari</p>
            <p>Sem Malvar</p>
            <p>Shaine Mias</p>
            <p>Jurela Oh</p>
        </div>
        <div>
            <p>Ella Oreta</p>
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
    <div class="editorial-team paragraph-1">
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
    <div class="editorial-team paragraph-1">
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
      <div class="team-section">
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
    <div class="editorial-team paragraph-1">
      <h3 class="team-subheading">Staffers + Apprentices</h3>

      <!-- Video -->
      <div class="team-section">
        <h3 class="section-title">Video</h3>
        <div class="team-grid two-cols">
          <div>
            <p>Irish Cristobal</p>
          </div>
          <div>
            <p>Shane Picardal</p>
          </div>
        </div>
      </div>

      <!-- Web Development -->
      <div class="team-section">
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

// Content initialization
function initializeContent() {
  const aboutDescription = document.querySelector(".credits-description");
  const aboutTitle = document.querySelector(".credits-title");

  aboutDescription.innerHTML = "";

  contentData.forEach((content, index) => {
    const slide = document.createElement("div");
    slide.classList.add("content-slide");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = content.html;
    aboutDescription.appendChild(slide);
  });

  aboutTitle.innerHTML = contentData[0].title;

  if (!document.querySelector(".dot-indicators")) {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("dot-indicators");

    contentData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot-indicator");
      if (index === 0) dot.classList.add("active");
      dot.setAttribute("data-index", index);
      dot.setAttribute("aria-label", `Page ${index + 1}`);
      dot.setAttribute("role", "button");
      dot.setAttribute("tabindex", "0");
      dotContainer.appendChild(dot);
    });

    aboutDescription.parentNode.appendChild(dotContainer);
  }
}

// Slide update management
function updateSlide(newIndex, direction = "none") {
  if (newIndex < 0 || newIndex >= contentData.length) return;

  currentIndex = newIndex;

  const dotIndicators = document.querySelectorAll(".dot-indicator");
  dotIndicators.forEach((dot, i) => {
    dot.classList.remove("active");
    dot.style.background = "";

    if (i === currentIndex) {
      dot.classList.add("active");
      dot.style.background = "#F69B6C";
    } else {
      dot.style.background = "#d9d9d9";
    }
  });

  const slides = document.querySelectorAll(".content-slide");
  const aboutTitle = document.querySelector(".credits-title");

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  setTimeout(() => {
    if (slides[currentIndex]) {
      slides[currentIndex].classList.add("active");
      aboutTitle.innerHTML = contentData[currentIndex].title;
    }
  }, 50);

  console.log(
    `Switched to content ${currentIndex + 1}, direction: ${direction}`
  );
}

// Navigation controls
function initializeNavigation() {
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  leftButton.addEventListener("click", function () {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : contentData.length - 1;
    updateSlide(newIndex, "left");
  });

  rightButton.addEventListener("click", function () {
    const newIndex =
      currentIndex < contentData.length - 1 ? currentIndex + 1 : 0;
    updateSlide(newIndex, "right");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      leftButton.click();
    } else if (e.key === "ArrowRight") {
      rightButton.click();
    }
  });
}

// Dot indicators management
function initializeDotIndicators() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot-indicator")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      updateSlide(index, "dot");
      console.log(`Dot ${index + 1} clicked`);
    }
  });

  document.addEventListener(
    "mouseenter",
    function (e) {
      if (e.target.classList.contains("dot-indicator")) {
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
      if (e.target.classList.contains("dot-indicator")) {
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

// Repel effect implementation
function initializeRepelEffect() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return;
  }

  const repelSelectors = [".left-frame-path", ".right-frame-path"];

  repelSelectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.pointerEvents = "auto";

      const computedStyle = window.getComputedStyle(element);
      const originalTransform = computedStyle.transform;

      repelElements.set(element, {
        originalTransform:
          originalTransform !== "none" ? originalTransform : "",
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
      });

      element.style.transition =
        "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }
  });

  let animationId;

  document.addEventListener("mousemove", function (e) {
    if (!repelConfig.enabled) return;

    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    animationId = requestAnimationFrame(() => {
      updateRepelEffect(e.clientX, e.clientY);
    });
  });

  document.addEventListener("mouseleave", function () {
    resetRepelEffect();
  });

  window.addEventListener("blur", function () {
    resetRepelEffect();
  });
}

function updateRepelEffect(mouseX, mouseY) {
  repelElements.forEach((data, element) => {
    const rect = element.getBoundingClientRect();

    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const deltaX = elementCenterX - mouseX;
    const deltaY = elementCenterY - mouseY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < repelConfig.maxDistance) {
      const directionX = deltaX / distance;
      const directionY = deltaY / distance;

      const strength = Math.pow(
        (repelConfig.maxDistance - distance) / repelConfig.maxDistance,
        2
      );

      data.targetX = directionX * repelConfig.maxOffset * strength;
      data.targetY = directionY * repelConfig.maxOffset * strength;
    } else {
      data.targetX = 0;
      data.targetY = 0;
    }

    data.currentX += (data.targetX - data.currentX) * repelConfig.smoothness;
    data.currentY += (data.targetY - data.currentY) * repelConfig.smoothness;

    applyRepelTransform(element, data);
  });
}

function applyRepelTransform(element, data) {
  const repelTransform = `translate(${data.currentX}px, ${data.currentY}px)`;

  if (data.originalTransform) {
    element.style.transform = `${data.originalTransform} ${repelTransform}`;
  } else {
    element.style.transform = repelTransform;
  }
}

function resetRepelEffect() {
  repelElements.forEach((data, element) => {
    data.targetX = 0;
    data.targetY = 0;

    const resetAnimation = () => {
      data.currentX += (0 - data.currentX) * 0.15;
      data.currentY += (0 - data.currentY) * 0.15;

      applyRepelTransform(element, data);

      if (Math.abs(data.currentX) > 0.1 || Math.abs(data.currentY) > 0.1) {
        requestAnimationFrame(resetAnimation);
      } else {
        element.style.transform = data.originalTransform;
        data.currentX = 0;
        data.currentY = 0;
      }
    };

    requestAnimationFrame(resetAnimation);
  });
}

// Utility and accessibility features
function toggleRepelEffect() {
  repelConfig.enabled = !repelConfig.enabled;
  if (!repelConfig.enabled) {
    resetRepelEffect();
  }
  console.log(`Repel effect ${repelConfig.enabled ? "enabled" : "disabled"}`);
}

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".about-card");
  if (card) {
    card.style.transition = "transform 0.3s ease";
  }
});

// Accessibility improvements
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-button");

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
    if (e.target.classList.contains("dot-indicator")) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.target.click();
      }
    }
  });

  document.addEventListener(
    "focus",
    function (e) {
      if (e.target.classList.contains("dot-indicator")) {
        e.target.style.outline = "2px solid #F69B6C";
        e.target.style.outlineOffset = "2px";
      }
    },
    true
  );

  document.addEventListener(
    "blur",
    function (e) {
      if (e.target.classList.contains("dot-indicator")) {
        e.target.style.outline = "none";
      }
    },
    true
  );
});

window.toggleRepelEffect = toggleRepelEffect;
