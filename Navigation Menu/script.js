$(document).ready(function() {

    $(".mainmenu").addClass("js").before('<div id="menu">&#9776;</div>');
    $("#menu").click(function() {
        $(".mainmenu").toggle();
    });

    checkWidth();
    $(window).resize(checkWidth);

    function checkWidth() {

      var windowsize = $(window).innerWidth();
        if (windowsize > 880) {
            $(".mainmenu").removeAttr("style");
            $(".submenu").removeAttr("style");
        }

        if (windowsize < 880) {
            $(".aboutusmenubutton").click(function() {
                $("#aboutusmenu").toggle();
                return false;
            });
            $(".servicesmenubutton").click(function() {
                $("#servicesmenu").toggle();
                return false;
            });
            $(".programsmenubutton").click(function() {
                $("#programsmenu").toggle();
                return false;
            });

            $("#aboutusmenu").click(function() {
              $("#aboutusmenu").toggle();
              $(".mainmenu").toggle();
            });
            $("#servicesmenu").click(function() {
              $("#servicesmenu").toggle();
              $(".mainmenu").toggle();
            });
            $("#programsmenubutton").click(function() {
              $("#programsmenu").toggle();
              $(".mainmenu").toggle();
            });
        }
    }

});
