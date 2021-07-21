function navBarAnimation() {
    //Header elements selectors
    let navBar = document.querySelectorAll('.navbar');
    let navBarMobile = document.querySelectorAll('.mobile-menu-section');
    let navMobileHeight = document.querySelectorAll('.mobile-menu.is--nav');
	
    //Local timeline
    let tlNav = gsap.timeline();
	
    //Responsive
    let isMobile = window.matchMedia("(max-width: 500px)");
	
    // GSAP timeline to animate the text

    //Mobile
    if (isMobile.matches) {
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
		top: -64,
	    }, {
		duration: 0.5,
		top: 0,
		ease: Power1.easeOut
    	}, '<');
    }
    //Desktop
	else {
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
}
