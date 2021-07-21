function navBarAnimation() {
    //local timeline
    let tlNav = gsap.timeline();

    //Header elements selectors
    let navBar = document.querySelectorAll('.navbar');
    let navBarMobile = document.querySelectorAll('.mobile-menu-section');
    let navMobileHeight = document.querySelectorAll('.container.is--nav');
	
    //Responsive
    var isDesktop = window.matchMedia("(min-width: 501px)");
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
	
	
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
