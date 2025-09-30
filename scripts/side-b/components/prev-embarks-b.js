document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".volumes-section-b");
  const container = document.querySelector(".cards-container");
  const cards = Array.from(container.querySelectorAll(".card"));

  container.style.visibility = "hidden";

  function computeStackTransforms() {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const rotations = [-8, -3, 3, 8];

    cards.forEach((card, i) => {
      const r = rotations[i % rotations.length];
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      let tx = centerX - cardCenterX;
      let ty = centerY - cardCenterY;

      tx += (i - cards.length / 2) * 5;
      ty += (i - cards.length / 2) * 2;

      card.style.setProperty("--tx", `${tx}px`);
      card.style.setProperty("--ty", `${ty}px`);
      card.style.setProperty("--rot", `${r}deg`);
      card.style.setProperty("--scale", `0.98`);
      card.style.setProperty("--i", `${i}`);
      card.style.setProperty("--z", `${cards.length - i}`);
    });

    container.style.visibility = "visible";
  }

  setTimeout(computeStackTransforms, 50);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!container.classList.contains("spread")) computeStackTransforms();
    }, 120);
  });

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => container.classList.add("spread"), 150);
        } else {
          container.classList.remove("spread");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  obs.observe(section);

  const sectionRect = section.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
    setTimeout(() => container.classList.add("spread"), 150);
  }
});
