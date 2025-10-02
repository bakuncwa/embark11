// (SIDE A) About Ad Astra JS

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
      <p class="paragraph-1">
        Ad Astra is De La Salle-College of Saint Benilde's (DLS-CSB)
        official student organization tasked to produce the College yearbook every academic year, capturing in text and images the graduating batches'
        dreams and aspirations, momentous events in school, various
        curricular and extracurricular activities, including messages from
        their administrators<br>and mentors.
      </p>
      
      <p class="paragraph-2">
        Ad Astra currently has three major publications produce every
        <br>academic year:
      </p>

      <div class="publications-list">
        <p class="publication-item">
          1. AD ASTRA, the College's official yearbook for graduating
          students;
        </p>
        <p class="publication-item">
          2.
          <img
            src="../../assets/images/side-a/about/side-a-about-aa-embark-logo.png"
            alt="Embark Logo"
            class="embark-logo"
          />, the College's official socio-cultural magazine for Frosh
          students; and
        </p>
        <p class="publication-item">
          3. BEYOND, the organization's online content on various social
          media platforms.
        </p>
      </div>
    `,
    title: "About Ad Astra",
  },
  {
    html: `
      <p class="paragraph-1">
        The organization caters to the special interests of students in publication-related activities, such as writing and copyediting, layout and graphic design, photography and videography, graphic illustration, marketing and publicity, web development, and customer support.
      </p>

      <p class="paragraph-2">
        Ad Astra is an organization under the Student Publications Unit (SPU) of the Center for Student Life (CSL). It has a sister organization in SPU named the Benildean Press Corps, which is the student-journalists' organization of<br>DLS-CSB.
      </p>
    `,
    title: "About Ad Astra",
  },
  {
    html: `
      <p class="paragraph-1">
        <img
          src="../../assets/images/side-a/about/side-a-about-aa-embark-logo.png"
          alt="Embark Logo"
          class="embark-logo-small"
        /><span class="embark-number">11</span> is the annual sociocultural Frosh magazine of De La Salle-College of Saint Benilde, produced by Ad Astra: The Benildean Yearbook.
      </p>

      <p class="paragraph-2">
        The 11th volume of <img
          src="../../assets/images/side-a/about/side-a-about-aa-embark-logo.png"
          alt="Embark Logo"
          class="embark-logo-small"
        />hinges on the themes of parallels and polarity. A beginning and end, a villain and a hero, the self and the other. What if there weren't opposites to begin with? What if these all exist in a continuum, constantly shifting and changing one another?
      </p>

      <p class="paragraph-3">
        We rarely do think of the spectrum between two ends: the means between the extremes. In that in-between, that liminal space, should we find meaning.
      </p>

      <p class="paragraph-4">
        <img
          src="../../assets/images/side-a/about/side-a-about-aa-embark-logo.png"
          alt="Embark Logo"
          class="embark-logo-small"
        /> <span class="embark-number-inline">11</span> is a call for action. We must look deeper, think critically, and question the structures we've long accepted. In a world of binaries, choosing to see the in-between is already an act of defiance.
      </p>
    `,
    title:
      'About     <img src="../../assets/images/side-a/about/side-a-about-embark-logo.png" alt="Embark Logo" class="embark-logo-title" /><span class="embark-number-title">11</span>',
  },
];

// Content initialization
function initializeContent() {
  const aboutDescription = document.querySelector(".about-description");
  const aboutTitle = document.querySelector(".about-title");

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
      dot.style.background = "#3394d8";
    } else {
      dot.style.background = "#d9d9d9";
    }
  });

  const slides = document.querySelectorAll(".content-slide");
  const aboutTitle = document.querySelector(".about-title");

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
          e.target.style.background = "#5ba3e0";
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
          e.target.style.background = "#3394d8";
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

  const repelSelectors = [".pinwheel-swirl", ".about-girl"];

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
      this.style.outline = "2px solid #3394d8";
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
        e.target.style.outline = "2px solid #3394d8";
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
