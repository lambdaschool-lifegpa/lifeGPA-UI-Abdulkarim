class Testimonial {
  constructor(element) {
    this.element = element;
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton = this.element.querySelector('.left-button');
    this.currentIndex = 0;
    this.testimonials = this.element.querySelectorAll('.testimonial');
    this.rightButton.addEventListener('click', this.slideRight);
    this.leftButton.addEventListener('click', this.slideLeft);
  }

  slideLeft = () => {
    this.currentIndex < 1 ? this.currentIndex = this.testimonials.length - 1 : this.currentIndex--
    this.testimonials.forEach(testimonial => testimonial.style.display = 'none');
    this.testimonials[this.currentIndex].style.display = 'block';
    TweenMax.from(this.testimonials[this.currentIndex], 1, {x: 100, opacity:0})
  }

  slideRight = () => {
    this.currentIndex > this.testimonials.length - 2 ? this.currentIndex = 0 : this.currentIndex++
    this.testimonials.forEach(testimonial => testimonial.style.display = 'none');
    this.testimonials[this.currentIndex].style.display = 'block';
    TweenMax.from(this.testimonials[this.currentIndex], 2, {x: -100, opacity:0})
  }
}

let testimonial = document.querySelector('.testimonials');
testimonial = new Testimonial(testimonial);