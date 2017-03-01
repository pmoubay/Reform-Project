$(document).ready(main);
function main(){
  //$('.submenu').hide();
  $('.aboutusmenu').hide();
  $('.servicesmenu').hide();
  $('.programsmenu').hide();

  $('.aboutusmenubutton').on('mouseenter',function(){
    $(this).toggleClass('active');
    $('.aboutusmenu').slideDown('slow');
  });
  /*$('.aboutusmenubutton').on('mouseleave',function(){
    $('.aboutusmenubutton').toggleClass('inactive');
    $('.aboutusmenu').slideUp('slow');
  });*/

  $('.aboutusmenubutton').click(function(){
    $('.aboutusmenubutton').slideDown('slow');
  });

  $('.banner').click(function(){
    $('.aboutusmenubutton').toggleClass('inactive');
    $('.aboutusmenu').slideUp('slow');
  })

  $('.ourStoryImage').click(function(){
    $('.aboutusmenubutton').toggleClass('inactive');
    $('.aboutusmenu').slideUp('slow');
  });

  $('.ourPhilosophyImage').click(function(){
    $('.aboutusmenubutton').toggleClass('inactive');
    $('.aboutusmenu').slideUp('slow');
  });

  $('.ourTeamImage').click(function(){
    $('.aboutusmenubutton').toggleClass('inactive');
    $('.aboutusmenu').slideUp('slow');
  });

  $('.servicesmenubutton').on('mouseenter',function(){
    $(this).toggleClass('active');
    $('.servicesmenu').slideDown('slow');
  });
  $('.servicesmenubutton').on('mouseleave',function(){
      $('.servicesmenubutton').toggleClass('inactive');
      $('.servicesmenu').slideUp('slow');
  });

  $('.programsmenubutton').on('mouseenter',function(){
    $(this).toggleClass('active');
    $('.programsmenu').slideDown('slow');
  });
  $('.programsmenubutton').on('mouseleave',function(){
      $('.programsmenubutton').toggleClass('inactive');
      $('.programsmenu').slideUp('slow');
  });

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});
}
