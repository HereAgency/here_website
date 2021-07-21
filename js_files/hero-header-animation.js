function heroHeadAnimation() {
    //local timeline
    let tlHero = gsap.timeline();

    //Header elements selectors
    let mainWrapper = document.querySelectorAll('.main-text-wrapper-header');
    let blurbWrapper = document.querySelectorAll('.desc-text-wrapper-header');
    let homeWorkHeading = document.querySelectorAll('.section-heading.cs-animation');
	
    // GSAP timeline to animate the text
    tlHero
      .fromTo(mainWrapper, {
		opacity: 0,
		y: 64,
		skewY: "3deg",
	}, {
        	duration: 0.4,
		opacity: 1,
		y: 0,
		skewY: "0deg",
   		ease: Power1.easeOut,	
      }, '>');
    if (blurbWrapper){
	tlHero
		.fromTo(blurbWrapper, {
		opacity: 0,
		y: 64,
		skewY: "3deg",
	}, {
		duration: 0.4,
		delay: 0.1,
		opacity: 1,
		y: 0,
		skewY: "0deg",
		ease: Power1.easeOut,	
	}, '>');
    }	
	
    if (homeWorkHeading){
	tlHero
		.fromTo(homeWorkHeading, {
		opacity: 0,
		y: 64,
		skewY: "3deg",
	}, {
		duration: 0.4,
		delay: 0.1,
		opacity: 1,
		y: 0,
		skewY: "0deg",
		ease: Power1.easeOut,	
	}, '>');
    }
}
