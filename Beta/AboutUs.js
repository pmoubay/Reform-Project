$(document).ready(function() {

    $(".mainmenu").addClass("js").before('<div id="menu">&#9776;</div>');
    $("#menu").click(function() {
        $(".mainmenu").toggle();
    });

    $(window).resize(function() {
        if (window.innerWidth > 880) {
            $(".mainmenu").removeAttr("style");
            $(".submenu").removeAttr("style");
        }

        if (window.innerWidth < 880) {
            $(".aboutusmenubutton").click(function() {
                $("#aboutusmenu").toggle();
            });
            $(".servicesmenubutton").click(function() {
                $("#servicesmenu").toggle();
            });
            $(".programsmenubutton").click(function() {
                $("#programsmenu").toggle();
            });
        }
    });
  });

$(document).ready(function() {
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
