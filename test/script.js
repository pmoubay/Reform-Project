$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

nav.navbar.shrink {
  min-height: 35px;
}

nav.navbar{
  background-color:#ccc;
   // Animation
   -webkit-transition: all 0.4s ease;
   transition: all 0.4s ease;
}
