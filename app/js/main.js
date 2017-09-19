jQuery(document).ready(function($){
	nameParallax();

	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}

	function nameParallax() {
		var $button = $("a.cta");
		var buttonValues = {
			left: $button.offset().left,
			top: $button.offset().top,
			width: $button.outerWidth(),
			height: $button.outerHeight(),
			x: $button.offset().left + ($button.outerWidth() / 2),
			y: $button.offset().top + ($button.outerHeight() / 2),
			hover: false
		};

		var htmlH1 = "";
		var $h1 = $("h1.split-letters");
		var words = $h1.text().split(" ");

		for (var i = 0, word; word = words[i]; i++) {
			var letters = word.split("");
			var htmlWord = '';

			htmlWord += '<span class="word">';
			for (var j = 0, letter; letter = letters[j]; j++) {
				htmlWord += '<span class="letter">' + letter + '</span>';
			}
			htmlWord += '</span>';
			htmlWord += '<span class="space">&nbsp;</span>';

			htmlH1 += htmlWord;
		}

		$h1.html(htmlH1);

		$("main").on('mousemove', function(event) {
			$("main").addClass("mouseMoved");
		});

		$("h1 span.letter").each(function(index, value) {
			var $span = $(this);
			var velocity = Math.random() * 2 - 1;
			var values = {
				left: $span.offset().left,
				top: $span.offset().top,
				width: $span.outerWidth(),
				height: $span.outerHeight(),
				vx: velocity,
				vy: velocity
			};

			$("main").on('mousemove', function(event) {
				var x = event.clientX;
				var y = event.clientY;

				var xRel = x - buttonValues.x;
				var yRel = y - buttonValues.y;

				var newTop = yRel * values.vy + values.top;
				var newLeft = xRel * values.vx + values.left;

				if (buttonValues.hover) {
					$span.css({
						top: values.top,
						left: values.left
					});
				} else {
					$span.css({
						top: newTop,
						left: newLeft
					});
				}
			});

			$button.on('mouseenter', function() {
				$("main").addClass('noAnimation');
				buttonValues.hover = true;
			});
			$button.on('mouseleave', function() {
				$("main").removeClass('noAnimation');
				buttonValues.hover = false;
			});
		});
	}
});