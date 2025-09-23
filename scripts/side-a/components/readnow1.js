class SideAReadNow {
  constructor() {
    this.elementsToShow = document.querySelectorAll('.readnow-title');
    this.floatingGirl = document.getElementById('ppl2');
    this.bubble1 = document.getElementById('ppl1');
    this.bubble2 = document.getElementById('kite1');
    this.bubble3 = document.getElementById('kite2');

    this.handleScroll = this.handleScroll.bind(this);
    this.handleParallax = this.handleParallax.bind(this);
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.handleParallax();
    });

    this.handleScroll();
    this.handleParallax();
  }

  handleScroll() {
    this.elementsToShow.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      element.classList.toggle('visible', isVisible);
    });
  }

  handleParallax() {
    const scrollPosition = window.pageYOffset;

    if (this.floatingGirl) {
      const offset = scrollPosition * 0.05;
      this.floatingGirl.style.transform = `translate(-50%, ${offset - 50}%)`;
    }

    if (this.bubble1) this.bubble1.style.transform = `translateY(${scrollPosition * 0.03}px)`;
    if (this.bubble2) this.bubble2.style.transform = `translateY(${scrollPosition * 0.02}px)`;
    if (this.bubble3) this.bubble3.style.transform = `translateY(${scrollPosition * 0.04}px)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const readNow = new ReadNowEffects();
  readNow.init();
});