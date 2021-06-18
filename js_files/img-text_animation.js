$('document').ready(function () {  
  
    //Triggers images and texts (only once) when in viewport:
    inView.threshold(0.2);//triggers when element is 20% in viewport
    inView('.text-wrapper').on('enter', function (elText) {
      console.log("text-wrapper");
      console.log(elText);
      if (elText.classList.contains('hasClassTriggered')) {
        return;
      } else {
        textTrigger(elText);
        elText.classList.add('hasClassTriggered');
      }
    });
    //images with revealer:
    inView('.image-wrapper').on('enter', function (elImg) {
      if (elImg.classList.contains('hasClassTriggered')) {
        return;
      } else {
        revealImage(elImg);
        elImg.classList.add('hasClassTriggered');
      }
    });

    //CS Blocks with revealer:
    inView('.cs-img-animation').on('enter', function (elLink) {
        if (elLink.classList.contains('hasClassTriggered')) {
          return;
        } else {
            revealCsImage(elLink);
            elLink.classList.add('hasClassTriggered');
        }
      });


    //Images/sections fade in
    
    inView('.fadein-wrapper').on('enter', function(elFadein) {
  //   inView('.fadeIn-wrapper').on('enter', function(elFadein) {
      if (elFadein.classList.contains('hasClassTriggered')) {
        return;
      } else {
        fadeInElement(elFadein);
        elFadein.classList.add('hasClassTriggered');
      }
    });
    
  //   inView('.slideUp-wrapper').on('enter', function (el) {
  //     if (el.classList.contains('hasClassTriggered')) {
  //       return;
  //     } else {
  //       console.log("trigger");
  //       ListSlideUp(el);
  //       el.classList.add('hasClassTriggered');
  //     }
  //   });
  
    function textTrigger(element) {
    //local timeline
    var tlText = gsap.timeline();
    let preTitle = element.querySelector('.title-animation');
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
      .to(preTitle, {
        duration: 0.7,
        opacity: 1,
      }, '>')
      .from(childSplit.lines,{
        duration: 0.6,
        yPercent: 100,
        ease: 'power4',
        stagger: 0.15,
      },'<');
      
  //     var tlSlideUp = gsap.timeline();
  //     var slideUpItems = element.querySelectorAll('.slideup-animation');
  
  //     console.log(slideUpItems);
  //     tlSlideUp
  //       .to(slideUpItems, {
  //         duration: 0.2,
  //         opacity: 1,
  //       })
  //       .from(slideUpItems, {
  //         duration: 0.6,
  //         yPercent: 100,
  //         ease: 'power4',
  //         stagger: 0.15,
  //       },'<');
    }
  
    // function revealImage(element) {
    // var reveal = element.querySelector('.revealer');
    // var img = element.querySelector('.img-animation');
          
    // var tl = gsap.timeline();
    // tl.to(
    //   reveal, 
    //   {
    //   duration: 0.01,
    //   opacity: 1,
    // })
    //   //Animate the reveal box from the bottom to the full height
    //   .from(
    //     reveal,
    //     {
    //       duration: 0.5,
    //       transform: 'scale3d(1,0,1)',
    //       transformOrigin: '50% 100%',
    //       ease: Power4.easeOut,
    //     },
    //     '>'
    //   )
    //   // Make the image visibile
    //   .to(
    //     img,
    //     {
    //       duration: 0.01,
    //       opacity: 1,
    //     },
    //     '>'
    //   )
    //   //Animate the reveal box from full height to the top with no height
    //   .to(
    //     reveal,
    //     {
    //       duration: 0.5,
    //       transform: 'scale3d(1,0,1)',
    //       transformOrigin: '50% 0%',
    //       ease: Power4.easeOut,
    //     },
    //     '>'
    //   );
      
      
    // var tlSlideUp = gsap.timeline();
    // var slideUpItems = element.querySelector('.cs-list-item-text.sildeup-animation');
  
    // console.log(slideUpItems);
    // tlSlideUp
    //   .to(slideUpItems, {
    //     duration: 0.2,
    //     opacity: 1,
    //   })
    //   .from(slideUpItems, {
    //     duration: 0.6,
    //     yPercent: 100,
    //     ease: 'power4',
    //     stagger: 0.15,
    //   },'<');
    
    // }

    function fadeInElement(element) {
      console.log("fadeInElement()");
      var elFadeIn = element.querySelector('.fadeIn-animation');
  
      //local timeline
      var tl = gsap.timeline();
      
      tl.to(
        elFadeIn, 
        {
          duration: 1,
          opacity: 1,
        });
    }
    // function ListSlideUp(element) {
  //     console.log("ListSlideUp()");
  //   //local timeline
  //   var tlSlideUp = gsap.timeline();
  //   var slideUpItems = element.querySelector('.cs-list-item-text.sildeup-animation');
  
  //   console.log(slideUpItems);
  //   tlSlideUp
  //     .to(slideUpItems, {
  //       duration: 0.2,
  //       opacity: 1,
  //     })
  //     .from(slideUpItems, {
  //       duration: 0.6,
  //       yPercent: 100,
  //       ease: 'power4',
  //       stagger: 0.15,
  //     },'<');
    // }

  function revealCsImage(element) {
    var reveal = element.querySelector('.revealer');
    var img = element.querySelector('.cs-img-animation');
    console.log(img);      
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
      //Make the cs block invisble by default via script
    //   .from(
    //       img,
    //       {
    //         duration:0.01,
    //         opacity:0,
    //       }
    //   )

      // Make the cs block visibile
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
