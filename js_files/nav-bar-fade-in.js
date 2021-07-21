function navBarAnimation() {
    //Header elements selectors
    let navBar = document.querySelectorAll('.navbar');
    let navBarMobile = document.querySelectorAll('.mobile-menu-section');
    let navMobileHeight = document.querySelectorAll('.container.is--nav');
	
    //Local timeline
    let tlNav = gsap.timeline();
	
    //Responsive
    let isDesktop = window.matchMedia("(min-width: 501px)");
	
    // GSAP timeline to animate the text
    //Desktop
    if (x.matches) {
	tlNav
    	.fromTo(navBar, {
		opacity: 0,
		yPercent: -100,
      	}, {
		duration: 0.5,
		opacity: 1,
		yPercent: 0,
		ease: Power1.easeOut
      	});
    }
    //Mobile
    else {
	tlNav
	//Fade in
	.fromTo(navBarMobile, {
		opacity: 0,
	}, {
		duration: 0.5,
		opacity: 1,
		ease: Power1.easeOut
	})
	//Slide from top
      	.fromTo(navMobileHeight, {
		yPercent: -100,
	    }, {
		duration: 0.5,
		yPercent: 0,
		ease: Power1.easeOut
    	}, '<');
    }
}
