$(document).ready(function() {
  $('.btn-menubar').on('click', function() {
    $(this).parent().toggleClass("menubar-act");
    $(this).parent().siblings().toggleClass('main-menu-act');
    if ($(this).parent().hasClass('menubar-act')) {
      $(this).text('메인메뉴 닫기');
    } else {
      $(this).text('메인메뉴 열기');
    }
  });
  $('.menubar').on('click', function() {
    $(this).parent().toggleClass("menubar-act");
    $(this).parent().siblings().toggleClass('main-menu-act');
    if ($(this).parent().hasClass('menubar-act')) {
      $('.btn-menubar').text('메인메뉴 닫기');
    } else {
      $('.btn-menubar').text('메인메뉴 열기');
    }
  });
  $('.main-menu >li:last-child li:last-child a').on('focusout', function() {
    $('.main-menu').removeClass('main-menu-act');
    $('.menubar-container').removeClass("menubar-act");
    $('.btn-menubar').text('메인메뉴 열기');
  });
});