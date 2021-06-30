//PAGE TRANSITION - CURTAIN UP

  //select all internal pages:
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
        var currentPage = window.location.href;
        var hostName = window.location.hostname;
        var pageProtocol = window.location.protocol;
        var hostNameURL = pageProtocol + "//" + hostName + "/";
        var workSection = '/#work';
        console.log("HostNameURL: "+hostNameURL);
        console.log("Clicked on: "+linkURL);
        console.log('currentPage: '+currentPage);
        console.log('hostNameURL+workSection: ' + hostNameURL+workSection);
        
        //If current page is Home page or work section and the user clicks on "work", don't trigger page transition:
        if( ((currentPage === hostNameURL) || (currentPage === (hostNameURL + workSection)) )
           && (linkURL === hostNameURL+workSection) ){
          return;
        } else{
          e.preventDefault();
          pageAnimation(linkURL);        
        }
      }
    });
  }
  function pageAnimation(linkURL){
    // console.log(e);
    let pageLoader = document.querySelector('.pg-trans-anim');
    let pgTl = gsap.timeline();
    
    //TIMELINE TO ANIMATE THE CURTAIN BEFORE UNLOAD THE PAGE:
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
//           console.log('navigating');
          window.location = linkURL;
        }
       },'>')
      .to(pageLoader,{
        duration:1,
        display:'none'
      }, '>');
  }
  // ******END PAGE ANIMATION ***********
  
