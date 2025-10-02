const hills = document.getElementById("hero-hills");
const c1 = document.getElementById("hero-character1");
const c2 = document.getElementById("hero-character2");
const b1 = document.getElementById("hero-blob1");
const b2 = document.getElementById("hero-blob2");
const section = document.getElementById("hero-page");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

hills.style.transform = "rotate(4deg)";
hills.style.zIndex = "1";

function scrollAnimation() {
  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const viewportBottom = scrollY + window.innerHeight;
  const hillsHeight = hills.offsetHeight;

  const scrollInSection = scrollY - sectionTop;
  
  // If the bottom of the viewport has reached the bottom of the section
  if (viewportBottom >= sectionBottom) {
    // Stop being fixed — become absolute inside section
    hills.style.position = "absolute";
    hills.style.bottom = "-100px";
    hills.style.width = "100%";

    c1.style.position = "absolute";
    c1.style.left = "50px";

    c2.style.position = "absolute";
    c2.style.right = "100px";

    b1.style.position = "absolute";
    b1.style.left = "-100px";
    b1.style.bottom = "30%";

    b2.style.position = "absolute";
    b2.style.right = "-100px";
    b2.style.bottom = "43%";
  } else {
    // Keep it fixed
    hills.style.position = "fixed";
    hills.style.bottom = "-100px";
    hills.style.width = "101%";

    c1.style.position = "fixed";
    c1.style.transform = `translateX(-${scrollInSection * 0.5}px)`;

    c2.style.position = "fixed";
    c2.style.transform = `translateX(${scrollInSection * 0.5}px)`;

    b1.style.position = "fixed";
    b1.style.transform = `translateX(${scrollInSection * 1}px)`;
    b1.style.bottom = "46%";

    b2.style.position = "fixed";
    b2.style.transform = `translateX(-${scrollInSection * 1}px)`;
    b2.style.bottom = "60%";
  }

  if (window.matchMedia("(max-width: 1024px").matches) {
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";
      hills.style.bottom = "-50px";
      hills.style.width = "100%";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";
      hills.style.bottom = "-50px";
      hills.style.width = "101%";
    }
  }

  if (window.matchMedia("(max-width: 768px").matches) {
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";
      hills.style.bottom = "-25px";
      hills.style.width = "101%";

      b1.style.left = "-30px";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";
      hills.style.bottom = "-25px";
      hills.style.width = "101%";

      b1.style.transform = `translateX(${scrollInSection * 0.6}px)`;
    }
  }

  if (window.matchMedia("(max-width: 597px").matches) {
    hills.style.right = "-10px";
    hills.style.width = "150%";
    hills.style.bottom = "-50px";
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";

      c1.style.bottom = `40%`;
      c1.style.left = "-35px";

      c2.style.right = "10px";

      b1.style.bottom = "14%";
      b1.style.left = "-30px";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";

      c1.style.bottom = `60%`;
      c1.style.transform = `translateX(-${scrollInSection * 0.2}px)`;

      c2.style.transform = `translateX(${scrollInSection * 0.2}px)`;

      b1.style.transform = `translateX(0px)`;
      b1.style.transform = `translateY(-${scrollInSection * 0.6}px)`;
      b1.style.bottom = "20%";
      b1.style.left = "-30px";

      b2.style.transform = `translateY(${scrollInSection * 0.6}px)`;
    }
  }

  if (window.matchMedia("(max-width: 425px").matches) {
    hills.style.right = "-160px";
    hills.style.width = "200%";
    hills.style.bottom = "-50px";
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";

      c1.style.bottom = `40%`;

      c2.style.right = "0px";

      b2.style.bottom = "43%";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";

      c1.style.bottom = `63%`;

      b2.style.bottom = "65%";
    }
  }

  if (window.matchMedia("(max-width: 375px").matches) {
    hills.style.right = "-160px";
    hills.style.width = "200%";
    hills.style.bottom = "-20px";
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";
    }
  }

  if (window.matchMedia("(max-width: 320px").matches) {
    hills.style.right = "-160px";
    hills.style.width = "200%";
    hills.style.bottom = "-20px";
    // If the bottom of the viewport has reached the bottom of the section
    if (viewportBottom >= sectionBottom) {
      // Stop being fixed — become absolute inside section
      hills.style.position = "absolute";
    } else {
      // Keep it fixed
      hills.style.position = "fixed";
    }
  }
}

scrollAnimation();
window.addEventListener("scroll", scrollAnimation);
window.addEventListener("resize", scrollAnimation);
