const style = getComputedStyle(document.body);
const config = {
	narvi: {
		in: {
			base: {
				duration: 1,
				easing: 'linear',
				opacity: 1
			},
			path: {
				duration: 800,
				easing: 'easeOutQuint',
				rotate: [0,90],
				opacity: {
					value: 1,
					duration: 200,
					easing: 'linear'
				}
			},
			content: {
				duration: 600,
				easing: 'easeOutQuint',
				translateX: [50,0],
				opacity: {
					value: 1,
					duration: 100,
					easing: 'linear'
				}
			},
			trigger: {
				translateX: [
				{value: '-30%', duration: 100, easing: 'easeInQuint'},
				{value: ['30%','0%'], duration: 250, easing: 'easeOutQuint'}
				],
				opacity: [
				{value: 0, duration: 100, easing: 'easeInQuint'},
				{value: 1, duration: 250, easing: 'easeOutQuint'}
				],
				color: [
				{value: style.getPropertyValue('--color-trigger-highlight'), duration: 1, delay: 100, easing: 'easeOutQuint'}
				]
			}
		},
		out: {
			base: {
				duration: 100,
				delay: 400,
				easing: 'linear',
				opacity: 0
			},
			path: {
				duration: 500,
				delay: 0,
				easing: 'easeInOutQuint',
				rotate: 0,
				opacity: {
					value: 0,
					duration: 50,
					delay: 210,
					easing: 'linear'
				}
			},
			content: {
				duration: 500,
				easing: 'easeInOutQuint',
				translateX: 100,
				opacity: {
					value: 0,
					duration: 50,
					delay: 210,
					easing: 'linear'
				}
			},
			trigger: {
				translateX: [
				{value: '30%', duration: 200, easing: 'easeInQuint'},
				{value: ['-30%','0%'], duration: 200, easing: 'easeOutQuint'}
				],
				opacity: [
				{value: 0, duration: 200, easing: 'easeInQuint'},
				{value: 1, duration: 200, easing: 'easeOutQuint'}
				],
				color: [
				{value: style.getPropertyValue('--color-trigger-default'), duration: 1, delay: 200, easing: 'easeOutQuint'}
				]
			}
		}
	},
};