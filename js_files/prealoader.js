//Global variables
let support =
	{ animations : Modernizr.cssanimations },
	container = document.querySelector( '.ip-container' ),
	header = container.querySelector( '.ip-header' ),
	animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
	//Modernizr.prefixed takes a string css value in the DOM style camelCase form and returns the version of that property that the browser actually supports
	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			
$('document').ready(function () {
	let onEndInitialAnimation = function() {
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
});


//function to desable scroll
function noscroll() {
	window.scrollTo( 0, 0 );
}
