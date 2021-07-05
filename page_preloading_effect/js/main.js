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
// (function() {
$('document').ready(function () {
	var support =
		{ animations : Modernizr.cssanimations },
		container = document.querySelector( '.ip-container' ),
		header = container.querySelector( '.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		//Modernizr.prefixed takes a string css value in the DOM style camelCase form and returns the version of that property that the browser actually supports
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	var onEndInitialAnimation = function() {
		if( support.animations ) {
			this.removeEventListener( animEndEventName, onEndInitialAnimation );
		}
		startLoading();
	};
	// disable scrolling
	window.addEventListener( 'scroll', noscroll );

	// initial animation - only when site loads for the first time
	if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
		sessionStorage.setItem( 'doNotShow', true );
		container.classList.add('loading');
		//Check if animation has ended
		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
	} else {
		startLoading();
	}

	function startLoading() {
		let time; // Time the animation plays
		if(container.classList.contains('loading')){
			time=3000; //if showing preloader
		} else {
			time = 500; //if showing only 'curtain up' animation
		}
		setTimeout(function (time) {
			if(container.classList.contains('loading')){
				container.classList.remove('loading');
			}
			container.classList.add('loaded');

			var onEndHeaderAnimation = function (ev) {
				if (support.animations) {
					if (ev.target !== header) return;
					this.removeEventListener(animEndEventName, onEndHeaderAnimation);
				}
				document.body.classList.add('layout-switch');

				//Enable scroll after preloader finishes
				window.removeEventListener('scroll', noscroll);
			};

			//Check if curtain up animation has finished:
			if (support.animations) {
				header.addEventListener(animEndEventName, onEndHeaderAnimation);
			} else {
				onEndHeaderAnimation();
			}
		}, time);
	}
	//function to desable scroll
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
});
