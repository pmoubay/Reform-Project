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


$(function() {

	// Get the form.
	var form = $('#ajax-feedback');

	// Get the messages div.
	var formMessages = $('#form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});
});

});
