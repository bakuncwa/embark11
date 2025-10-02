// (SIDE A) PRE-READ NOW

class PreReadNowAssets {
  constructor() {
    this.assets = {
      leftCamera: document.querySelector(".left-camera"),
      leftNoise: document.querySelector(".left-noise"),
      leftGirl: document.querySelector(".left-girl"),
      rightNoise: document.querySelector(".right-noise"),
      rightBoy: document.querySelector(".right-boy"),
    };

    this.textElements = {
      line1: document.querySelector(".line-1"),
      line2: document.querySelector(".line-2"),
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
    if (this.assets.leftCamera) {
      gsap.to(this.assets.leftCamera, {
        y: 200,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.rightNoise) {
      gsap.to(this.assets.rightNoise, {
        y: 150,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.rightBoy) {
      gsap.to(this.assets.rightBoy, {
        y: 180,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.leftNoise) {
      gsap.to(this.assets.leftNoise, {
        y: 120,
        scrollTrigger: {
          trigger: ".pre-readnow",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    if (this.assets.leftGirl) {
      gsap.to(this.assets.leftGirl, {
        y: 100,
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
