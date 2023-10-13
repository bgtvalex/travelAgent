import ScrollReveal from 'scrollreveal'

// Базовые настройки
ScrollReveal({
  distance: '60px',
  duration: 2800,
})

ScrollReveal().reveal(`.discover__form`, {
  origin: 'bottom',
})

ScrollReveal().reveal(`.discover__desc`, {
  origin: 'top',
})

ScrollReveal().reveal(`.hint-discover`, {
  origin: 'left',
})

ScrollReveal().reveal(`.discover__picture-scroll`, {
  origin: 'right',
})

export default ScrollReveal
