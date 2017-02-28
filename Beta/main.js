function main(){
  //$('.submenu').hide();
  $('.aboutusmenu').hide();
  $('.servicesmenu').hide();
  $('.programsmenu').hide();

  $('.aboutusmenubutton').on('mouseenter',function(){
    $(this).toggleClass('active');
    $('.aboutusmenu').slideDown('slow');
  });
  $('.aboutusmenubutton').on('mouseleave',function(){
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
}

$(document).ready(main);
