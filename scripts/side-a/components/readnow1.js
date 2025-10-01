class SideAReadNow {
  constructor() {
    this.elementsToShow = document.querySelectorAll('.readnow1-title, .readnow1-text, .readnow2-title, .readnow2-text');
    this.ppl2 = document.getElementById('ppl2');
    this.ppl1 = document.getElementById('ppl1');
    this.footprint = document.getElementById('footprint');
    this.boat = document.getElementById('boat');
    this.kite1 = document.getElementById('kite1');
    this.kite2 = document.getElementById('kite2');
    this.flipButton = document.querySelector('.readnow2-link');
    this.iframe = document.querySelector('.iframe');
    
    // Store both URLs
    this.sideAUrl = 'https://indd.adobe.com/view/82b148dc-7a5d-49c6-9201-ebf8e64e7a90?startpage=1&allowFullscreen=true';
    this.sideBUrl = 'https://indd.adobe.com/view/8df8b680-ea2b-4857-8955-7e16d402a9b0?startpage=1&allowFullscreen=true';
    this.isShowingSideA = true; // Track current state

    this.handleScroll = this.handleScroll.bind(this);
    this.handleParallax = this.handleParallax.bind(this);
    this.handleFlipNarrative = this.handleFlipNarrative.bind(this);
  }

  init() {
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.handleParallax();
    });

    // Add click handler for flip button
    if (this.flipButton) {
      this.flipButton.addEventListener('click', this.handleFlipNarrative);
    }

    // Run once on load
    this.handleScroll();
    this.handleParallax();
  }

  handleFlipNarrative(e) {
    e.preventDefault();
    
    if (this.iframe) {
      // Toggle between the two URLs
      if (this.isShowingSideA) {
        this.iframe.src = this.sideBUrl;
        this.isShowingSideA = false;
      } else {
        this.iframe.src = this.sideAUrl;
        this.isShowingSideA = true;
      }
      
      // Optional: Scroll to iframe smoothly
      this.iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
    if (this.footprint) this.footprint.style.transform = `translateY(${scrollPosition * 0.03}px)`;
    if (this.boat) this.boat.style.transform = `translateY(${scrollPosition * 0.03}px)`;
    if (this.kite1) this.kite1.style.transform = `translateY(${scrollPosition * 0.02}px)`;
    if (this.kite2) this.kite2.style.transform = `translateY(${scrollPosition * 0.04}px)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const readNow = new SideAReadNow();
  readNow.init();
});