// (SIDE A) PRE-READ NOW ASSETS

class PreReadNowAssets {
  constructor() {
    this.assets = {
      leftCamera: document.querySelector(".left-camera"),
      leftNoise: document.querySelector(".left-noise"),
      leftGirl: document.querySelector(".left-girl"),
      rightNoise: document.querySelector(".right-noise"),
      rightBoy: document.querySelector(".right-boy"),
    };

    this.init();
  }

  init() {
    this.checkReducedMotion();
    this.setupIntersectionObserver();
    this.setupParallaxEffect();
  }

  checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      Object.values(this.assets).forEach((asset) => {
        if (asset) {
          asset.style.animation = "none";
          asset.style.opacity = "1";
          asset.style.transform = "none";
        }
      });
    }
  }

  setupIntersectionObserver() {
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

  setupParallaxEffect() {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateParallax() {
    const scrollY = window.scrollY;
    const parallaxSpeed = 0.3;

    if (this.assets.leftCamera) {
      this.assets.leftCamera.style.transform = `translateY(${
        scrollY * parallaxSpeed
      }px)`;
    }

    if (this.assets.rightNoise) {
      this.assets.rightNoise.style.transform = `translateY(${
        scrollY * parallaxSpeed * 0.5
      }px)`;
    }

    if (this.assets.rightBoy) {
      this.assets.rightBoy.style.transform = `translateY(${
        scrollY * parallaxSpeed * 0.7
      }px)`;
    }

    if (this.assets.leftNoise) {
      this.assets.leftNoise.style.transform = `translateY(${
        scrollY * parallaxSpeed * 0.4
      }px)`;
    }
  }

  toggleFloatingAnimation(pause = false) {
    if (this.assets.leftGirl) {
      if (pause) {
        this.assets.leftGirl.style.animationPlayState = "paused";
      } else {
        this.assets.leftGirl.style.animationPlayState = "running";
      }
    }
  }

  setFloatingSpeed(duration = 3) {
    if (this.assets.leftGirl) {
      const currentAnimation = this.assets.leftGirl.style.animation;
      this.assets.leftGirl.style.animation = currentAnimation.replace(
        /floatGirl \d+s/,
        `floatGirl ${duration}s`
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const preReadNowAssets = new PreReadNowAssets();

  window.preReadNowAssets = preReadNowAssets;
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = PreReadNowAssets;
}
