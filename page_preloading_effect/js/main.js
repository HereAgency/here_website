/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var support = 
		{ animations : Modernizr.cssanimations },
		container = document.querySelector( '.ip-container' ),
		header = container.querySelector( 'div.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}
			startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		// classie.add( container, 'loading' );
		container.classList.add('loading');

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}
	function startLoading() {
		// simulate loading something.. (logo for 2s)
		interval = setInterval(function () {
			
			// classie.remove(container, 'loading');
			// classie.add(container, 'loaded');
			container.classList.remove('loading');
			container.classList.add('loaded');
			clearInterval(interval);

			var onEndHeaderAnimation = function (ev) {
				if (support.animations) {
					if (ev.target !== header) return;
					this.removeEventListener(animEndEventName, onEndHeaderAnimation);
				}

				// classie.add(document.body, 'layout-switch');
				document.body.classList.add('layout-switch');
				window.removeEventListener('scroll', noscroll);
			};

			if (support.animations) {
				header.addEventListener(animEndEventName, onEndHeaderAnimation);
			} else {
				onEndHeaderAnimation();
			}
		}, 2500);
	}	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
	init();

})();
