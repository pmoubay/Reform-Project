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

/**** ABOUT US JS ****/
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

/**** CONTACT US JS ****/
$( document ).ready( function() {

$('body').noisy({
    intensity: 0.2,
    size: 200,
    opacity: 0.28,
    randomColors: false, // true by default
    color: '#000000'
});

	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(45.3825011,-75.7430444);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 11,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		var contentString = '111 Sherwood Drive Ottawa Ontario, Canada K1Y 3V1 ';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 500
		});

		//Pin the Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: 'image title'
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resizing
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});

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
