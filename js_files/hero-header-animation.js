function heroHeadAnimation() {
    //local timeline
    let tlHero = gsap.timeline();

    //Header elements selectors
    let mainWrapper = document.querySelector('.text-wrapper-header.main-text-wrapper-header');
    let blurbWrapper = document.querySelector('.text-wrapper-header.desc-text-wrapper-header');
	
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
      }, '>');
	if (blurbWrapper){
		tlHero
			.fromTo(blurbWrapper, {
			opacity: 0,
			y: 64,
			skewY: "3deg",
		}, {
			duration: 0.4,
			delay: 0.25,
			opacity: 1,
			y: 0,
			skewY: "0deg",
		}, '>');
	}	
}
