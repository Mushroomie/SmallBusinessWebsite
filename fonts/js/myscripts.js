$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
    $('nav').removeClass('transparent');
  } else {
    $('nav').addClass('transparent');
  }
});