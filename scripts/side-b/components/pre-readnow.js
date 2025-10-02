// (SIDE B) PRE-READ NOW

class PreReadNowAssets {
  constructor() {
    this.assets = {
      leftFace: document.querySelector(".left-face"),
      leftCoin1: document.querySelector(".left-coin-1"),
      leftCoin2: document.querySelector(".left-coin-2"),
      rightFace: document.querySelector(".right-face"),
      rightCoin3: document.querySelector(".right-coin-3"),
      rightCoin4: document.querySelector(".right-coin-4"),
    };

    this.textElements = {
      line1: document.querySelectorAll(".text-line")[0],
      line2: document.querySelectorAll(".text-line")[1],
    };

    this.init();
  }

  init() {
    this.checkReducedMotion();

    if (!this.prefersReducedMotion) {
      this.setupGSAPAnimations();
      this.setupParallaxEffect();
    } else {
      // Fallback for reduced motion
      this.setupBasicIntersectionObserver();
    }
  }

  checkReducedMotion() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (this.prefersReducedMotion) {
      Object.values(this.assets).forEach((asset) => {
        if (asset) {
          asset.style.animation = "none";
          asset.style.opacity = "1";
          asset.style.transform = "none";
        }
      });

      if (this.textElements.line1) this.textElements.line1.style.opacity = "1";
      if (this.textElements.line2) this.textElements.line2.style.opacity = "1";
    }
  }

  setupGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(this.textElements.line1, {
      x: "-100vw",
      opacity: 0,
    });

    gsap.set(this.textElements.line2, {
      x: "100vw",
      opacity: 0,
    });

    gsap.to(this.textElements.line1, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".pre-readnow",
        start: "top 65%",
        end: "top 25%",
        scrub: 3,
        markers: false,
      },
    });

    gsap.to(this.textElements.line2, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".pre-readnow",
        start: "top 65%",
        end: "top 25%",
        scrub: 3,
        markers: false,
      },
    });
  }

  setupParallaxEffect() {
    if (this.assets.leftFace) {
      gsap.to(this.assets.leftFace, {
        y: 200,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.rightFace) {
      gsap.to(this.assets.rightFace, {
        y: 150,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.leftCoin1) {
      gsap.to(this.assets.leftCoin1, {
        y: 180,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.leftCoin2) {
      gsap.to(this.assets.leftCoin2, {
        y: 120,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.rightCoin3) {
      gsap.to(this.assets.rightCoin3, {
        y: 160,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.rightCoin4) {
      gsap.to(this.assets.rightCoin4, {
        y: 140,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }

  setupBasicIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, options);

    Object.values(this.assets).forEach((asset) => {
      if (asset) {
        observer.observe(asset);
      }
    });
  }

  pauseAnimations() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
  }

  resumeAnimations() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
  }

  refreshScrollTrigger() {
    ScrollTrigger.refresh();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const preReadNowAssets = new PreReadNowAssets();

  window.preReadNowAssets = preReadNowAssets;
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = PreReadNowAssets;
}
