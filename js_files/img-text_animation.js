$('document').ready(function () {
//   Triggers the header animation after 4s (We're gonna change how we trigger the header animation)
//   setTimeout(() => {
//     textHeader();
//   }, 4000);

  
//   function textHeader() {
//   //Hide loader div
//     document.querySelector('.ip-container').style.display= "none";
//     window.removeEventListener('scroll', noscroll);
    
//   //local timeline
//   var tlTextHeader = gsap.timeline();

//   var navbarItems = document.querySelectorAll('.nav-item-fadein');
//   var text = document.querySelectorAll('.text-animation-header');
//   var splitLine = document.querySelector('.split-child');
 
//   const childSplit = new SplitText(text, {
//     type: 'lines',
//     linesClass: 'split-child',
//   });
//   const parentSplit = new SplitText(text, {
//     linesClass: 'split-parent',
//   });
//   // GSAP timeline to animate the text
//   tlTextHeader
//     .to(navbarItems, {
//       duration: 1, 
//       opacity:1,
//     })
//     .from(navbarItems, {
//       duration: 1,
//       y: -50,
//       ease: 'power4',
//     }, '<')
//     .to(text, {
//       duration:1,
//       opacity: 1,
//     },'<')
//     .from(childSplit.lines, {
//       duration: 1,
//       yPercent: 100,
//       ease: 'power4',
//       stagger: 0.15,
//     }, '<' );
//   }
  
  //Triggers images and texts (only once) when in viewport:
  inView('.text-wrapper').on('enter', function (elText) {
    if (elText.classList.contains('hasClassTriggered')) {
      return;
    } else {
      textTrigger(elText);
      elText.classList.add('hasClassTriggered');
    }
  });
  inView.threshold(0.2);
  inView('.image-wrapper').on('enter', function (elImg) {
    if (elImg.classList.contains('hasClassTriggered')) {
      return;
    } else {
      revealImage(elImg);
      elImg.classList.add('hasClassTriggered');
    }
  });
//PAGE TRANSITION LOADING ANIMATION
  let links = document.querySelectorAll('a');
  if (links){
    links.forEach ((link) => {
      link.onclick = (e) => {
        console.log('link clicked');
        let linkURL;
        if (!e.currentTarget.href){
             console.log(e.target.href);
            linkURL = e.target.href;
           }else {
             console.log(e.currentTarget.href);
             linkURL = e.currentTarget.href;
           }
        e.preventDefault();
        pageAnimation(linkURL);
      }
    });
  }
  function pageAnimation(linkURL){
    // console.log(e);
    let pageLoader = document.querySelector('.pg-trans-anim');
    let pgTl = gsap.timeline();
    
    pgTl
      .to(pageLoader, {
        duration: 0.01,
        display: 'block'
      })
      .from(pageLoader,{
        duration: 0.8,
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 100%',
        ease: Power4.easeOut,
        onComplete: function(){
          console.log('navigating');
          window.location = linkURL;
        }
       },'>')
        //Animate the reveal box from full height to the top with no height
      .to(pageLoader, {
        duration: 0.8,
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 0%',
        ease: Power4.easeOut,
      },'>')
      .to(pageLoader,{
        duration:0.01,
        display:'none'
      }, '>');
  }
  // ******END PAGE TRANSITION******

  function textTrigger(element) {
  //local timeline
  var tlText = gsap.timeline();

  var text = element.querySelector('.text-animation');
  var splitLine = element.querySelector('.split-child');
  //SplitText to work with animation line by line
  // const childSplit = nestedLinesSplit(text, {
  //   type: "lines",
  //   linesClass: "split-child"
  // });
  const childSplit = new SplitText(text, {
    type: 'lines',
    linesClass: 'split-child',
  });
  const parentSplit = new SplitText(text, {
    linesClass: 'split-parent',
  });
  // GSAP timeline to animate the text
  //Make the text appear first

  tlText
    .to(text, {
      duration: 0.2,
      opacity: 1,
    })
    .from(childSplit.lines,{
      duration: 0.6,
      yPercent: 100,
      ease: 'power4',
      stagger: 0.15,
    },'>');
  }

  function revealImage(element) {
  var reveal = element.querySelector('.revealer');
  var img = element.querySelector('.img-animation');
  // GSAP timeline to animate the reveal box and the image
  // 		//First make the revealBox visible

  //local timeline
  var tl = gsap.timeline();
  tl.to(
    reveal, 
    {
    duration: 0.01,
    opacity: 1,
  })
    //Animate the reveal box from the bottom to the full height
    .from(
      reveal,
      {
        duration: 0.5,
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 100%',
        ease: Power4.easeOut,
      },
      '>'
    )
    // Make the image visibile
    .to(
      img,
      {
        duration: 0.01,
        opacity: 1,
      },
      '>'
    )
    //Animate the reveal box from full height to the top with no height
    .to(
      reveal,
      {
        duration: 0.5,
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 0%',
        ease: Power4.easeOut,
      },
      '>'
    );
}
});
