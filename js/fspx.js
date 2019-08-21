/**
 * Listen to scroll to change header opacity class
 */

var startY = $('.navbar').height() * 2;

function checkScroll() {
  if ($(window).scrollTop() > startY) {
    console.log('scrolled');
    $('.navbar').addClass('scrolled');
  } else {
    console.log('not scrolled');
    $('.navbar').removeClass('scrolled');
  }
}

if ($('.navbar').length > 0) {
  $(window).on('scroll load resize', function() {
    checkScroll();
  });
}

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});
