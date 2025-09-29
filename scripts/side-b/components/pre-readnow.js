// (SIDE B) PRE-READ NOW ASSETS
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    console.log("Reduced motion enabled - skipping all effects");
    return;
  }

  // COIN ROTATION
  function initializeCoinEffects() {
    const coins = document.querySelectorAll(
      ".left-coin-1, .left-coin-2, .right-coin-3, .right-coin-4"
    );

    if (coins.length > 0) {
      coins.forEach((coin) => {
        coin.addEventListener("mouseenter", function () {
          this.style.animationPlayState = "paused";
        });

        coin.addEventListener("mouseleave", function () {
          this.style.animationPlayState = "running";
        });
      });
      console.log("Coin effects initialized for", coins.length, "coins");
    }
  }

  function initializeAll() {
    console.log("Pre-ReadNow Assets: Initializing...");
    initializeCoinEffects();
    console.log("Pre-ReadNow Assets: Ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAll);
  } else {
    initializeAll();
  }
})();
