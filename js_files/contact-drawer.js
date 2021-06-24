// LOCK SCROLL TOGGLE

function toggleScrolling() {
  $('html').toggleClass('no-scroll');
}

// CONTACT DRAWER HANDLER

// Drawer Globals
let docHeight = window.innerHeight;
const overlay = $(".overlay"); 
const contactDrawer = $(".contact-drawer");
let drawerHeight = contactDrawer.css( "height" );
let drawerInitialPosition = contactDrawer.css("top", docHeight);

// Buttons and Panels
let buttonPanel = $('#button-panel')
let startPanel = $('#start-panel');
let workPanel = $('#work-panel');
let callPanel = $('#call-panel');
let startButton = $('#start-button');
let workButton = $('#work-button');
let callButton = $('#call-button');

function contactDrawerOpen(){
  if(contactDrawer.hasClass("open-drawer")){
    return
  }
  else{
    //Block Scroll
    toggleScrolling();
    //Reveal Overlay
    overlay.removeClass("hidden");
    setTimeout(function () {
      overlay.removeClass("visually-hidden");
    }, 20);
    //Move drawer up
    contactDrawer.addClass("open-drawer");
    contactDrawer.css({"transform":"translateY(-40vw)", "opacity":"1"}, 400);
    setTimeout(function () {
      buttonPanel.fadeIn(400);
    }, 400);
    
  }
}

function contactDrawerClose(){
  if(contactDrawer.hasClass("open-drawer") && contactDrawer.hasClass("expanded-drawer")){
    //Hide Overlay
    overlay.addClass("visually-hidden");
    setTimeout(function () {
      overlay.addClass("hidden");
    }, 20);
    //Hide Drawer
    contactDrawer.removeClass("open-drawer expanded-drawer");
    contactDrawer.css({"height":"40vw","transform":"translateY(100vh)", "opacity":"0"});
    //Toggle Scrolling back on
    setTimeout(function () {
      toggleScrolling()
    }, 380);
    resetPanels()
  }
  else if(contactDrawer.hasClass("open-drawer")){
    //Hide Overlay
    overlay.addClass("visually-hidden");
    setTimeout(function () {
      overlay.addClass("hidden");
    }, 20);
    //Hide Drawer
    contactDrawer.removeClass("open-drawer");
    contactDrawer.css({"transform":"translateY(40vw)", "opacity":"0"}, 400);
    //Toggle Scrolling back on
    setTimeout(function () {
      toggleScrolling()
    }, 380);
    resetPanels()
  }
  else{
    return  
  }
}

function contactDrawerExpand(){
  let openDrawer = contactDrawer.hasClass("open-drawer");
  if(openDrawer && startButton.hasClass("clicked")){
    buttonPanel
      .fadeOut(400, function(){
      contactDrawer.addClass("expanded-drawer");
      contactDrawer.css({"height":"100vh","transform":"translateY(-100vh)"});
      setTimeout( function() {
        startPanel.fadeIn();
      }, 400);
    }
              )
  }
  else{
    return  
  }
}

function goBack(panelA, panelB, panelC){
  let expandedDrawer = contactDrawer;
  if (panelA.hasClass("open-panel")){
    panelA.fadeOut(400);
    setTimeout( function() {
      expandedDrawer.removeClass("expanded-drawer");
      expandedDrawer.css({"height":"45vw","transform":"translateY(0)"});
    }, 400);
    setTimeout( function() {

    })
  }
  else if (panelB.hasClass("open-panel")){
    panelB.fadeOut(400);

  }
  else{
    panelC.fadeOut(400);
  }
}

function resetPanels(){
  let panels = $('.contact-panel');
  panels.fadeOut();
}

$("#link-1").on("click", function(evt){
  evt.preventDefault();
  contactDrawerOpen()
});
$(".contact-close").on("click", function(){
  contactDrawerClose();
});
$(".drawer-col").on("click", function(event){
  $(this).addClass("clicked");
  contactDrawerExpand();
});
$(".contact-close").on("click", function(){
  contactDrawerClose();
});
