import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

let swiper

function swiperFunc () {
  const config = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 32,
    grabCursor: true,
    freeMode: true,
    speed: 5000,
    // autoplay: {
    // delay: 0,
    // disableOnInteraction: true,
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  }
  const swiper = new Swiper('#swiper-testimonials', config)
} 

const breakpoint = window.matchMedia('(max-width:1023px)')

const breakpointChecker = function () {
  if (breakpoint.matches  === true) {
    swiperFunc()
    return
  } else if (breakpoint.matches === false) {
    if (swiper !== undefined) swiper.destroy(true, true)
    return
  }
}

breakpoint.addListener(breakpointChecker)
breakpointChecker()

export default swiperFunc