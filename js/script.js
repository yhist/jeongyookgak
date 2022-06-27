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
  });

  // 모바일 메뉴 보이기 기능
  let icons_2 = $('.icons-2'); 
  icons_2.click(function (event) {
    event.preventDefault();
    mb_wrap.show();
    mb_wrap.addClass('mb-wrap-open')
  });

  // 모바일 메뉴 숨기기 기능
  let mb_close = $('.mb-close');
  let mb_wrap = $('.mb-wrap');
  mb_close.click(function (event) {
    event.preventDefault();
    mb_wrap.hide();
    mb_submenu.hide();
    mb_wrap.removeClass('mb-wrap-open');
  });

};