var smoothState;

jQuery(document).ready(function($) {
	initSmoothState();
	init();
});

function initSmoothState() {
	let duration = document.documentElement.style.getPropertyValue('--animation-duration');
	duration = parseInt(duration); //removes 'ms', 's' or spaces

	const $page = $('#main');
	const options = {
		debug: false,
		blacklist: '.no-smooth, [data-cs-tab-toggle]',
		allowFormCaching: false,
		onStart: {
			duration: duration,
			render: function ($container) {
				$container.addClass('is-exiting');
				smoothState.restartCSSAnimations();
			}
		},
		onReady: {
			duration: duration,
			render: function ($container, $newContent) {
				$container.removeClass('is-exiting');
				$container.html($newContent);
				init();
			}
		}
	};

	smoothState = $page.smoothState(options).data('smoothState');
}

function init() {
	const tooltips = Array.from(document.querySelectorAll('.tooltip'));
	const init = (() => tooltips.forEach(t => new Tooltip(t, config)))();
}

function initMouseGradient() {
	$("body").on('mousemove', function(event) {
		var x = event.clientX;
		var windowWidth = $(window).width();
		var relX = (x / windowWidth * 100) - 50; //minus 50% because we start from center
		var units = '%';

		document.documentElement.style.setProperty('--left-percentage', relX + units);
	});
}