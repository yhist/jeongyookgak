$(document).ready();

window.onload = function () {
  new Swiper('.sw-infom', {
    loop: true, 
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    speed: 1000,
    navigation: {
      prevEl: '.sw-infom-prev',
      nextEl: '.sw-infom-next'
    },

    pagination: {
      el: '.sw-infom-pg',
      type: 'fraction'
    }
  })
}