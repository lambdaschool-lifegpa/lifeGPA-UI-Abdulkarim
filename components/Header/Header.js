class Header {
  constructor(element) {
    this.element = element;
    this.backToTop = document.querySelector('#back-to-top');
    this.hambuger = this.element.querySelector('#hamburger-icon');
    this.mobileNav = this.element.querySelector('.mobile-nav');
    this.hambuger.addEventListener('click', this.toggleActive);
    window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.backToTop.style.visibility = 'visible';
      this.backToTop.style.opacity = '1';
    } else {
      this.backToTop.style.visibility = 'hidden';
      this.backToTop.style.opacity = '0';
    }
  });
  }

  toggleActive = () => {
    this.hambuger.classList.toggle('active');
    this.mobileNav.classList.toggle('active');
  }
}

let header = document.querySelector('.header');
header = new Header(header);