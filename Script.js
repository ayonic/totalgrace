const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slide-button');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    buttons[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    buttons[currentSlide].classList.add('active');
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        buttons[currentSlide].classList.remove('active');
        currentSlide = i;
        slides[currentSlide].classList.add('active');
        buttons[currentSlide].classList.add('active');
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    });
}
