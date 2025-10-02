const hills = document.getElementById("hero-hills");
const b1 = document.getElementById("hero-blob1");
const b2 = document.getElementById("hero-blob2");
const section = document.getElementById("hero-page");
const heroButton = document.querySelector(".hero-button");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

// Add click event to navigate to Side A
heroButton.addEventListener("click", () => {
  window.location.href = "../side-a/index.html";
});

function updateImageB1() {
  if (window.innerWidth < 597) {
    b1.src = "../../assets/images/hero-hand-b-mobile.png";
  } else {
    b1.src = "../../assets/images/hero-hand-b.png";
  }
}

hills.style.zIndex = "1";

function scrollAnimation() {
  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const viewportBottom = scrollY + window.innerHeight;
  const hillsHeight = hills.offsetHeight;

  const scrollInSection = scrollY - sectionTop;

  
  if (viewportBottom >= sectionBottom) {
    
    hills.style.position = "absolute";
    hills.style.width = "100%";

    b1.style.position = "absolute";
    b1.style.left = "0px";
    b1.style.top = "40%";

    b2.style.position = "absolute";
    b2.style.right = "-20px";
    b2.style.top = "43%";
  } else {
    
    hills.style.position = "fixed";
    hills.style.width = "100%";

    b1.style.position = "fixed";
    b1.style.transform = `translateX(${scrollInSection * 1}px)`;
    b1.style.top = "9%";
    b1.style.left = "0px";

    b2.style.position = "fixed";
    b2.style.transform = `translateX(-${scrollInSection * 1}px)`;
    b2.style.top = "15%";
    b2.style.right = "-20px";
  }

  if (window.matchMedia("(max-width: 1024px").matches) {
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";
      hills.style.width = "100%";
    } else {
      
      hills.style.position = "fixed";
      hills.style.width = "101%";
    }
  }

  if (window.matchMedia("(max-width: 768px").matches) {
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";
      hills.style.width = "101%";

      b1.style.left = "0px";
      b1.style.top = "39%";
    } else {
      
      hills.style.position = "fixed";
      hills.style.width = "101%";

      b1.style.transform = `translateX(${scrollInSection * 0.4}px)`;
      b2.style.transform = `translateX(-${scrollInSection * 0.4}px)`;
    }
  }

  if (window.matchMedia("(max-width: 597px").matches) {
    hills.style.right = "0px";
    hills.style.width = "200%";
    hills.style.bottom = "0px";
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";

      b1.style.bottom = "14%";
      b1.style.left = "-10px";

      b2.style.top = "63%";
    } else {
      
      hills.style.position = "fixed";

      b1.style.transform = `translateX(${scrollInSection * 0.4}px)`;
      b1.style.bottom = "20%";
      b1.style.left = "-10px";

      b2.style.top = "45%";
      b2.style.transform = `translateX(-${scrollInSection * 0.4}px)`;
    }
  }

  if (window.matchMedia("(max-width: 425px").matches) {
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";

      b2.style.top = "70%";
      b2.style.bottom = "43%";
    } else {
      
      hills.style.position = "fixed";

      b2.style.top = "55%";
    }
  }

  if (window.matchMedia("(max-width: 375px").matches) {
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";
    } else {
      
      hills.style.position = "fixed";
    }
  }

  if (window.matchMedia("(max-width: 320px").matches) {
    
    if (viewportBottom >= sectionBottom) {
      
      hills.style.position = "absolute";
    } else {
      
      hills.style.position = "fixed";

      b2.style.top = "";
      b2.style.bottom = "15%";
    }
  }
}

updateImageB1();
scrollAnimation();
window.addEventListener("scroll", scrollAnimation);
window.addEventListener("resize", () => {
  scrollAnimation();
  updateImageB1();
});
