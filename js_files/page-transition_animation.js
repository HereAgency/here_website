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
        duration: 0.7,
        transform: 'scale3d(1,0,1)',
        transformOrigin: '50% 100%',
        ease: Power4.easeOut,
        onComplete: function(){
          console.log('navigating');
          window.location = linkURL;
        }
       },'>')
        //Animate the reveal box from full height to the top with no height
//       .to(pageLoader, {
//         duration: 0.8,
//         transform: 'scale3d(1,0,1)',
//         transformOrigin: '50% 0%',
//         ease: Power4.easeOut,
//       },'>')
      .to(pageLoader,{
        duration:1,
        display:'none'
      }, '>');
  }
  // ******END PAGE ANIMATION ***********
  
