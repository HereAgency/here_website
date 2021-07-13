//PAGE TRANSITION - CURTAIN UP

  //Select only links to internal pages:
  let links = document.querySelectorAll("[href^='/']");
  if (links){
    links.forEach ((link) => {
      link.onclick = (e) => {
        let linkURL;
        if (!e.currentTarget.href){
          linkURL = e.target.href;
        }else {
          linkURL = e.currentTarget.href;
        }
        let currentPage = window.location.href;
        let hostName = window.location.hostname;
        let pageProtocol = window.location.protocol;
        let hostNameURL = pageProtocol + "//" + hostName;
        let workSection = '/#work';
        
        //If current page is Home page or work section and the user clicks on "work", don't trigger page transition:
        if( ((currentPage == (hostNameURL + "/")) || (currentPage == (hostNameURL + workSection)) )
           && (linkURL == hostNameURL+workSection) )
           || (e.currentTarget.id == "lets-talk"){
          return;
        } else {
          e.preventDefault();
          pageAnimation(linkURL);        
        }
      }
    });
  }
  function pageAnimation(linkURL){
    let pageLoader = document.querySelector('.pg-trans-anim');
    let pgTl = gsap.timeline();

    // Timeline to animate the curtain before unload the page
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
          window.location = linkURL;
        }
       },'>')
      .to(pageLoader,{
        duration:1,
        display:'none'
      }, '>');
  } 
