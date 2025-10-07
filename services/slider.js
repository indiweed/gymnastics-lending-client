document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.uk-slider-items .uk-width-1-2');
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('uk-active');
            } else {
                slide.classList.remove('uk-active');
            }
        });
    }

updateSlides();
});