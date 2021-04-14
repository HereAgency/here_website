
(function() {
	var support = 
		{ animations : Modernizr.cssanimations },
	    	pageName = document.querySelector('[page-name]').getAttribute('page-name'),
		container = document.querySelector( '.ip-container' ),
		header = container.querySelector( 'div.ip-header' ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	console.log(pageName);
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
		let time;
		if(pageName === 'home'){
			time=2600;
		} else {
			time=400;
		}
		setTimeout(function (time) {
			container.classList.remove('loading');
			container.classList.add('loaded');
// 			clearInterval(interval);

			var onEndHeaderAnimation = function (ev) {
				if (support.animations) {
					if (ev.target !== header) return;
					this.removeEventListener(animEndEventName, onEndHeaderAnimation);
				}
				document.body.classList.add('layout-switch');
				window.removeEventListener('scroll', noscroll);
				textHeader();
			};
			if (support.animations) {
				header.addEventListener(animEndEventName, onEndHeaderAnimation);
			} else {
				onEndHeaderAnimation();
			}
		}, time);
	}
  	function textHeader() {
		//Hide preloader div:
		const preLoaderDiv = document.querySelector('.ip-container');
		preLoaderDiv.style.display = "none";
		
		//local timeline
		var tlTextHeader = gsap.timeline();
		//Selectors
		
		//Fade in header image -CS page:
		let imgHeader = document.querySelector('.cs-fayt-header-img');
		console.log(imgHeader);
		var navbarItems = document.querySelectorAll('.navbar .nav-item-fadein');
		var text = document.querySelectorAll('.text-animation-header');
		var splitLine = document.querySelector('.text-animation-header .split-child');
		
		const childSplit = new SplitText(text, {
			type: 'lines',
			linesClass: 'split-child',
		});
		const parentSplit = new SplitText(text, {
			linesClass: 'split-parent',
		});
		// GSAP timeline to animate navbar items and text
		tlTextHeader
			.to(navbarItems, {
				duration: 1, 
				opacity:1,
			})
			.from(navbarItems, {
				y: -50, 
				duration: 1,
			}, '<')
			.to(text, {
				duration:1,
				opacity: 1,
			},'<')
			.from(childSplit.lines, {
				duration: 1,
				yPercent: 100,
				ease: 'power4',
				stagger: 0.15,
			}, '<' )
			.to(imgHeader, {
				duration:1,
				opacity: 1,
			}, '<' );
  	}
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
	init();

})();
