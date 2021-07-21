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
			}, {
        duration: 0.5,
				opacity: 1,
      }, '>')
      .fromTo(navBarMobile, {
				opacity: 0,
			}, {
        duration: 0.5,
				opacity: 1,
      }, '>');
}
