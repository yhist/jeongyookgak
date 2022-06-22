$(document).ready();

window.onload = function () {
  new Swiper('.sw-infom', {
    loop: true, 
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  })
}