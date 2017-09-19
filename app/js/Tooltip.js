class Tooltip {
		constructor(el, config) {
			this.DOM = {};
			this.DOM.el = el;
			this.type = this.DOM.el.getAttribute('data-type');
			this.DOM.trigger = this.DOM.el.querySelector('.tooltip__trigger');
			this.DOM.triggerSpan = this.DOM.el.querySelector('.tooltip__trigger-text');
			this.DOM.base = this.DOM.el.querySelector('.tooltip__base');
			this.DOM.shape = this.DOM.base.querySelector('.tooltip__shape');
			if( this.DOM.shape ) {
				this.DOM.path = this.DOM.shape.childElementCount > 1 ? Array.from(this.DOM.shape.querySelectorAll('path')) : this.DOM.shape.querySelector('path');
			}
			this.DOM.deco = this.DOM.base.querySelector('.tooltip__deco');
			this.DOM.content = this.DOM.base.querySelector('.tooltip__content');

			this.DOM.letters = this.DOM.content.querySelector('.tooltip__letters');
			if( this.DOM.letters ) {
				// Create spans for each letter.
				charming(this.DOM.letters);
				// Redefine content.
				this.DOM.content = this.DOM.letters.querySelectorAll('span');
			}
			this.initEvents(config);
		}
		initEvents(config) {
			this.mouseenterFn = () => {
				this.mouseTimeout = setTimeout(() => {
					this.isShown = true;
					this.show(config);
				}, 75);
			}
			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( this.isShown ) {
					this.isShown = false;
					this.hide(config);
				}
			}
			this.DOM.trigger.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.trigger.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.trigger.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.trigger.addEventListener('touchend', this.mouseleaveFn);
		}
		show() {
			this.animate('in', config);
		}
		hide() {
			this.animate('out', config);
		}
		animate(dir, config) {
			if ( config[this.type][dir].base ) {
				anime.remove(this.DOM.base);
				let baseAnimOpts = {targets: this.DOM.base};
				anime(Object.assign(baseAnimOpts, config[this.type][dir].base));
			}
			if ( config[this.type][dir].shape ) {
				anime.remove(this.DOM.shape);
				let shapeAnimOpts = {targets: this.DOM.shape};
				anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape));
			}
			if ( config[this.type][dir].path ) {
				anime.remove(this.DOM.path);
				let shapeAnimOpts = {targets: this.DOM.path};
				anime(Object.assign(shapeAnimOpts, config[this.type][dir].path));
			}
			if ( config[this.type][dir].content ) {
				anime.remove(this.DOM.content);
				let contentAnimOpts = {targets: this.DOM.content};
				anime(Object.assign(contentAnimOpts, config[this.type][dir].content));
			}
			if ( config[this.type][dir].trigger ) {
				anime.remove(this.DOM.triggerSpan);
				let triggerAnimOpts = {targets: this.DOM.triggerSpan};
				anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger));
			}
			if ( config[this.type][dir].deco ) {
				anime.remove(this.DOM.deco);
				let decoAnimOpts = {targets: this.DOM.deco};
				anime(Object.assign(decoAnimOpts, config[this.type][dir].deco));
			}
		}
		destroy() {
			this.DOM.trigger.removeEventListener('mouseenter', this.mouseenterFn);
			this.DOM.trigger.removeEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.trigger.removeEventListener('touchstart', this.mouseenterFn);
			this.DOM.trigger.removeEventListener('touchend', this.mouseleaveFn);
		}
	}