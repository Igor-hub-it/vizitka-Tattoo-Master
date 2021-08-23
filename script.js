const slides = document.querySelectorAll('#slides .slide');
const slides_amount = slides.length;
const slider_btns_area = document.querySelector('.main-slider-switch');
const interval = 4000

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, interval);

for (let i = 0; i < slides_amount; i++) {
  let btn = document.createElement('div');
  btn.className = 'main-slider-switch-item w-14 h-1 bg-white cursor-pointer ml-4 rounded';
  if (i == 0) btn.className += ' active';
  btn.addEventListener('click', () => {
    clearInterval(slideInterval);
    hideSlide(currentSlide);
    currentSlide = i;
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, interval);
  })
  slider_btns_area.append(btn);
}

const slider_btns = document.querySelectorAll('.main-slider-switch-item');

function hideSlide(idx) {
  slides[idx].classList.remove('showing');
  slider_btns[idx].classList.remove('active');
}
function showSlide(idx) {
  slides[idx].classList.add('showing');
  slider_btns[idx].classList.add('active');
}
function nextSlide() {
  hideSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides_amount;
  showSlide(currentSlide);
}