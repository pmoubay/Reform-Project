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
