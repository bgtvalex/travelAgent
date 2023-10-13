import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('#slider-popular', {
  slidesPerView: 1,
  spaceBetween: 32,
  freeMode: true,
  navigation: {
    prevEl: '#sliderPrev',
    nextEl: '#sliderNext',
  },
  loop: true,
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
})

export default swiper
