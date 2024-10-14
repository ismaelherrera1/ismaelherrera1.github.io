let customCurrentSlide = 0;

function customShowSlide(index) {
    const slides = document.querySelectorAll('.custom-carousel-item');
    if (index >= slides.length) {
        customCurrentSlide = 0;
    } else if (index < 0) {
        customCurrentSlide = slides.length - 1;
    } else {
        customCurrentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === customCurrentSlide) ? '1' : '0';
    });
}

function customNextSlide() {
    customShowSlide(customCurrentSlide + 1);
}

function customPrevSlide() {
    customShowSlide(customCurrentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    customShowSlide(customCurrentSlide);
});

