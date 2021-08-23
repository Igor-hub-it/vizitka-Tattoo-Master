var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}


var mainSliderSwitchItem1 = documebt.getElementById('main-slider-switch-item1')
var mainSliderSwitchItem2 = documebt.getElementsByClassName('main-slider-switch-item2')

mainSliderSwitchItem1.onclick = showCurSlide();
mainSliderSwitchItem1.onclick = showCurSlide();

function showCurSlide () {
  // slides[n].className = 'slide'
  alert('саси');
}

document.getElementsByClassName('main-slider-switch-item').onclick = function () {
  showCurSlide (n);
}



import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

import "tailwindcss/tailwind.css"