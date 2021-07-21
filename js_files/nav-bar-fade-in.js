function navBarAnimation() {
    //local timeline
    let tlNav = gsap.timeline();

    //Header elements selectors
    let navBar = document.querySelectorAll('.navbar');
    let navBarMobile = document.querySelectorAll('.mobile-menu-section');
	
    // GSAP timeline to animate the text
    tlNav
      .fromTo(navBar, {
	opacity: 0,
	yPercent: -100,
    }, {
	duration: 0.5,
	opacity: 1,
	yPercent: 0,
	ease: Power1.easeOut
    }, '>')
      .fromTo(navBarMobile, {
	opacity: 0,
	yPercent: -100,
    }, {
        duration: 0.5,
	opacity: 1,
	yPercent: 0,
	ease: Power1.easeOut
    }, '>');
}
