class Header {
  constructor(element) {
    this.element = element;
    this.hambuger = this.element.querySelector('#hamburger-icon');
    this.hambuger.addEventListener('click', this.toggleActive);
  }

  toggleActive = () => {
    this.hambuger.classList.toggle('active');
  }
}

let header = document.querySelector('.header');
header = new Header(header);