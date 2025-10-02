document.addEventListener("DOMContentLoaded", () => {
  const portraitCards = document.querySelectorAll(".portrait-card");

  // Repel effect configuration
  const repelStrength = 5; 
  const repelRadius = 150; 
  const smoothness = 0.3; 

  portraitCards.forEach((card) => {
    const img = card.querySelector("img");
    if (!img) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationFrameId = null;

    function animate() {
      currentX += (targetX - currentX) * smoothness;
      currentY += (targetY - currentY) * smoothness;

      // Apply transform
      img.style.transform = `translate(${currentX}px, ${currentY}px)`;

      // Continue animation if not at target
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        animationFrameId = null;
      }
    }

    function handleMouseMove(e) {
      const rect = img.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;
      const imgCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - imgCenterX;
      const deltaY = e.clientY - imgCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < repelRadius) {
        const strength = (1 - distance / repelRadius) * repelStrength;

        const angle = Math.atan2(deltaY, deltaX);

        targetX = -Math.cos(angle) * strength;
        targetY = -Math.sin(angle) * strength;
      } else {

        targetX = 0;
        targetY = 0;
      }

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    function handleMouseLeave() {
      targetX = 0;
      targetY = 0;
      
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    img.style.transition = "none";
    img.style.willChange = "transform";
  });
});