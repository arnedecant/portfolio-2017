jQuery(document).ready(function($) {
	$("body").on('mousemove', function(event) {
		var x = event.clientX;
		var windowWidth = $(window).width();
		var relX = (x / windowWidth * 100) - 50; //minus 50% because we start from center
		var units = '%';

		// document.documentElement.style.setProperty('--left-percentage', relX + units);
	});
});