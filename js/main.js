$(document).ready(function () {

	//display info bubble
	$(".info").tipTip({maxWidth: "auto", defaultPosition:"top"});

	$('.parameters').click(function() {
			$(this).parent().next("ul").toggle('slow', function() {			
		});
	});
});
