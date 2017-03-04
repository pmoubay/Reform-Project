$(document).ready(main);

  var aboutusmenu = $('.aboutusmenu');
  var servicesmenu = $('.servicesmenu');
  var programsmenu = $('.programsmenu');

  var btnAboutUs = $('.aboutusmenubutton');
  var btnServices = $('.servicesmenubutton');
  var btnPrograms = $('.programsmenubutton');

function main(){


  aboutusmenu.hide();
  servicesmenu.hide();
  programsmenu.hide();

  btnAboutUs.on('click',function(){
	if(servicesmenu.is(':visible')) servicesmenu.slideUp('slow');
	if(programsmenu.is(':visible')) programsmenu.slideUp('slow');
    $(this).toggleClass('active');
    aboutusmenu.toggle('fast');
  });

  btnServices.on('click',function(){
	if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
	if(programsmenu.is(':visible')) programsmenu.slideUp('slow');
    $(this).toggleClass('active');
    servicesmenu.slideToggle('fast');
  });

  btnPrograms.on('click',function(){
	if(servicesmenu.is(':visible')) servicesmenu.slideUp('slow');
	if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
    $(this).toggleClass('active');
    programsmenu.slideToggle('fast');
  });

  $('.banner').on('click',function(){
	  if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
	  if(servicesmenu.is(':visible')) servicesmenu.slideUp('slow');
	  if(programsmenu.is(':visible')) programsmenu.slideUp('slow');
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
