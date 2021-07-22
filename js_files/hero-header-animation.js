function heroHeadAnimation() {
	//local timeline
	let tlHero = gsap.timeline();

	//Header elements selectors
	let mainWrapper = document.querySelectorAll('.main-text-wrapper-header');
	let blurbWrapper = document.querySelectorAll('.desc-text-wrapper-header');

	//Home page selectors for Mobile
	let homeMainWrapper = document.querySelectorAll('.home-main-text-animation');
	let homeBlurbWrapper = document.querySelectorAll('.home-desc-text-animation');
	
	//Mobile section header
	let homeWorkHeading = document.querySelectorAll('.section-heading.cs-animation');
	let agencyWorkHeading = document.querySelectorAll('.ha-heading.team-header-mb');

	//Check screen size
	let isMobile = window.matchMedia("(max-width: 500px)");

	// MOBILE
	if(isMobile.matches){
		//All other pages mobile
		tlHero
			.fromTo(mainWrapper, {
			opacity: 0,
			y: 64,
			skewY: "10deg",
		}, {
			duration: 0.4,
			opacity: 1,
			y: 0,
			skewY: "0deg",
			ease: Power1.easeOut,	
		}, '>');
		// If there's blurb heading:
		if (blurbWrapper){
			tlHero
				.fromTo(blurbWrapper, {
				opacity: 0,
				y: 64,
				skewY: "10deg",
			}, {
				duration: 0.4,
				delay: 0.1,
				opacity: 1,
				y: 0,
				skewY: "0deg",
				ease: Power1.easeOut,	
			}, '>');
		}
		if (agencyWorkHeading){
			tlHero
				.fromTo(agencyWorkHeading, {
				opacity: 0,
				y: 64,
				skewY: "10deg",
			}, {
				duration: 0.4,
				delay: 0.1,
				opacity: 1,
				y: 0,
				skewY: "0deg",
				ease: Power1.easeOut,	
			}, '>');
		}
		//If page is Home page:
		if (homeWorkHeading && isMobile.matches){
			tlHero
				.fromTo(homeMainWrapper, {
				opacity: 0,
				y: 64,
				skewY: "10deg",
			}, {
				duration: 0.4,
				opacity: 1,
				y: 0,
				skewY: "0deg",
				ease: Power1.easeOut,	
			}, '>')
				.fromTo(homeBlurbWrapper, {
				opacity: 0,
				y: 64,
				skewY: "10deg",
			}, {
				duration: 0.4,
				delay: 0.1,
				opacity: 1,
				y: 0,
				skewY: "0deg",
				ease: Power1.easeOut,	
			}, '>')
				.fromTo(homeWorkHeading, {
				opacity: 0,
				y: 64,
				skewY: "10deg",
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
	// DESKTOP:
	else {
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
		// If there's blurb heading:
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
	}
}
