$(document).ready(function () {
  const linkTrigger = $(".text-wrapper-header a");
  const hoverImg = "#home-hero-image-";
  var imgId = 0;

  linkTrigger.mouseenter(function() {
    imgId = this.id.slice(-1);

    // SHOW IMAGE AND ANIMATE TO MOVE RIGHT
    var tl = gsap.timeline();
		var img = document.querySelector(hoverImg + imgId + "");
		// GSAP timeline to animate the reveal box and the image
    // 		//First make the revealBox visible
		tl
		.to(img, {
      duration:0.3,
      opacity:1
		})
    .from(img, {
      duration: 1,
      y: 50,
      ease: "power4",
		}, "<");
    
    // IMAGE MOVEMENT
//     this.addEventListener("mousemove", function(n) {
//       document.querySelector(hoverImg + imgId + "").style.left =  n.offsetX+ "px";
// 	console.log(-100 + n.offsetX/3 + "px");
//     });
    
  });
  linkTrigger.mouseleave(function() {
    imgId = this.id.slice(-1);
    
    // IMAGE TRANSLATE AND FADE OUT
    var tl = gsap.timeline();
		var img = document.querySelector(hoverImg + imgId + "");
		// GSAP timeline to animate the reveal box and the image
	tl
	.to(img, {
		duration: 1,
		y: -50,
		ease: "power4",
	})
	.to(img, {
	      duration:0.3,
	      opacity:0
	}, "<")
  	.to(img, {
		duration: 0.01,
		y: 50,
		ease: "power4",
	}, ">");
  });
});
