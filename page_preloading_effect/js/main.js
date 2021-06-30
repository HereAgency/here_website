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
		header = container.querySelector( '.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
	    	//Modernizr.prefixed takes a string css value in the DOM style camelCase form and returns the version of that property that the browser actually supports
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	
	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) { 
				console.log('line 23 '+support.animations);		
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}
			console.log('call startLoading()');
			startLoading();
		};
		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		container.classList.add('loading');

		//Detects whether or not elements can be animated using CSS
		if( support.animations ) {
			console.log('line 37 '+support.animations);
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}
	function startLoading() {
		console.log('entered startloading()');
		// simulate loading something.. (logo for 2.6s)
		let time=2600;
		setTimeout(function (time) {
			container.classList.remove('loading');
			container.classList.add('loaded');

			var onEndHeaderAnimation = function (ev) {
				if (support.animations) {
					if (ev.target !== header) return;
					this.removeEventListener(animEndEventName, onEndHeaderAnimation);
				}
				document.body.classList.add('layout-switch');
				window.removeEventListener('scroll', noscroll);
			};
			if (support.animations) {
				header.addEventListener(animEndEventName, onEndHeaderAnimation);
			} else {
				onEndHeaderAnimation();
			}
		}, time);
	}
	//Enable the scroll after loader finishes
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
	init();

})();
