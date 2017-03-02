
//Variables
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
    aboutusmenu.slideToggle('slow');
  });
  
  btnServices.on('click',function(){
	if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
	if(programsmenu.is(':visible')) programsmenu.slideUp('slow');
    $(this).toggleClass('active');
    servicesmenu.slideToggle('slow');
  });
  
  btnPrograms.on('click',function(){
	if(servicesmenu.is(':visible')) servicesmenu.slideUp('slow');
	if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
    $(this).toggleClass('active');
    programsmenu.slideToggle('slow');
  });
  
  $('.banner').on('click',function(){
	  if(aboutusmenu.is(':visible')) aboutusmenu.slideUp('slow');
	  if(servicesmenu.is(':visible')) servicesmenu.slideUp('slow');
	  if(programsmenu.is(':visible')) programsmenu.slideUp('slow');
  });
  
}

$(document).ready(main);