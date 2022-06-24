$(document).ready();

window.onload = function () {
  new Swiper('.sw-infom', {

    speed: 1000,
    navigation: {
      prevEl: '.sw-infom-prev',
      nextEl: '.sw-infom-next'
    },

    pagination: {
      el: '.sw-infom-pg',
      type: 'fraction'
    }
  });

  $(window).scroll(function(){
    let header = $('.header');
    let temp = $(window).scrollTop();
    if (temp > 0){
      header.addClass('header-fix');
    }
    if (temp == 0){
      header.removeClass('header-fix');
    }
  })




};