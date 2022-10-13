$(document).ready(function () {
  // 안내창 기능
  // 추가기능(스크롤바 없애기)
  $("html").css("overflow", "hidden");
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  modalClose.click(function () {
    modalWrap.stop().fadeOut(200);
    // 추가기능(스크롤바 살리기)
    $("html").css("overflow", "auto");
  });
  // 배경눌렀을때 닫기
  let modalMain = $(".modal-main");
  // 내용배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function (event) {
    $(this).stop().fadeOut(200);
    $("html").css("overflow", "auto");
  });
});

window.onload = function () {
  new Swiper(".sw-infom", {
    speed: 1000,
    navigation: {
      prevEl: ".sw-infom-prev",
      nextEl: ".sw-infom-next",
    },
    pagination: {
      el: ".sw-infom-pg",
      type: "fraction",
    },
  });

  $(window).scroll(function () {
    let header = $(".header");
    let temp = $(window).scrollTop();
    if (temp > 0) {
      header.addClass("header-fix");
    }
    if (temp == 0) {
      header.removeClass("header-fix");
    }
  });

  // 모바일 메뉴 보이기 기능
  let icons_2 = $(".icons-2");
  icons_2.click(function (event) {
    event.preventDefault();
    mb_wrap.show();
    mb_wrap.addClass("mb-wrap-open");
  });

  // 모바일 메뉴 숨기기 기능
  let mb_close = $(".mb-close");
  let mb_wrap = $(".mb-wrap");
  mb_close.click(function (event) {
    event.preventDefault();
    mb_wrap.hide();
    mb_submenu.hide();
    mb_wrap.removeClass("mb-wrap-open");
  });

  // 상단 광고 닫기
  let topad_close = $(".topad-close");
  let topad = $(".topad");
  let header_up = $(".header-up");

  topad_close.click(function () {
    topad.addClass("topad-none");
    $("header").addClass("header-up");
  });
};
