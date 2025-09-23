class SideAReadNow {
  constructor() {
    this.elementsToShow = document.querySelectorAll('.readnow1-title, .readnow1-text');
    this.ppl2 = document.getElementById('ppl2');
    this.ppl1 = document.getElementById('ppl1');
    this.kite1 = document.getElementById('kite1');
    this.kite2 = document.getElementById('kite2');

    this.handleScroll = this.handleScroll.bind(this);
    this.handleParallax = this.handleParallax.bind(this);
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.handleParallax();
    });

    // Run once on load
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

    if (this.ppl2) this.ppl2.style.transform = `translateY(${scrollPosition * 0.03}px)`;
    if (this.ppl1) this.ppl1.style.transform = `translateY(${scrollPosition * 0.03}px)`;
    if (this.kite1) this.kite1.style.transform = `translateY(${scrollPosition * 0.02}px)`;
    if (this.kite2) this.kite2.style.transform = `translateY(${scrollPosition * 0.04}px)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const readNow = new SideAReadNow();
  readNow.init();
});