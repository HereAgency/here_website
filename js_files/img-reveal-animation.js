$('document').ready(function () {
  //Triggers images when in viewport:
  inView('.img-trigger').on('enter', function (elImg) {
    if (elImg.classList.contains('hasClassTriggered')) {//Check if element has already revealed
      return;
    } else {
      revealImage(elImg);// Call function to animate image revealer
      elImg.classList.add('hasClassTriggered'); // Make sure each image triggers the animation only once
    }
  });
  
  function revealImage(element) {
    var reveal = element.querySelector('.img-revealer');
    var img = element.querySelector('.img-trigger img');
    var tl = gsap.timeline(); //Local timeline

    tl.to(reveal, { // Make the revealer visibile
      duration: 0.01,
      opacity: 1,
    })
      .from(reveal, { //Animate the reveal box from the bottom to the full height
      duration: 0.5,
      transform: 'scale3d(1,0,1)',
      transformOrigin: '50% 100%',
      ease: Power4.easeOut,
    }, '>')
      .to(img, { // Make the image visibile
      duration: 0.01,
      opacity: 1,
    },'>')
      .to(reveal, { //Animate the reveal box from full height to the top with no height
      duration: 0.5,
      transform: 'scale3d(1,0,1)',
      transformOrigin: '50% 0%',
      ease: Power4.easeOut,
    },'>');
  }
}); 
