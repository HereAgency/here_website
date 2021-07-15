$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
    $('#navbar').addClass('nav-scrolled');
  } else {
    $('#navbar').removeClass('nav-scrolled');
  }
});

//NAV COLOR CHANGE

var navOffset = $("#navbar").offset();
var sectionDivs = $(".ha-section");

$(document).scroll(function() {
  sectionDivs.each(function(k) {
    var sectionsOffset = $(this).offset();
    var _actPosition = sectionsOffset.top - $(window).scrollTop();
    if (_actPosition < (navOffset.top + $('#navbar').height()/2) && _actPosition + $(this).outerHeight() - $('#navbar').height()/2 > 0) {
      $("#navbar").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
      return false;
    }
  });
});

// LOCK SCROLL TOGGLE

function toggleScrolling() {
  $('html').toggleClass('no-scroll');
}

// CONTACT DRAWER HANDLER

// Drawer Globals
let mobileMedia = window.matchMedia("(max-width:500px)");
let getDocHeight = window.innerHeight;
const overlay = $(".overlay"); 
const contactDrawer = $(".contact-drawer");
let drawerHeight = contactDrawer.css( "height" );
let drawerInitialPosition = contactDrawer.css("top", getDocHeight);

// Buttons and Panels
let buttonPanel = $('#button-panel')
let drawerCol = $('.drawer-col');
let startPanel = $('#start-panel');
let workPanel = $('#work-panel');
let callPanel = $('#call-panel');
let startButton = $('#start-button');
let workButton = $('#work-button');
let callButton = $('#call-button');
let backButton = $('.contact-back');

function clearDrawerStyles(){
  contactDrawer.removeAttr('style');
}

function contactDrawerOpen(){
  console.log('contactDrawerOpen()');
  
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
    if(mobileMedia.matches){
      contactDrawer.css({"transform":"translateY(-100%)", "opacity":"1"}, 400); 
    } else {
      contactDrawer.css({"transform":"translateY(-40vw)", "opacity":"1"}, 400); 
    }
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
  //Hide back button
  hideBackButton();
}

function contactDrawerExpand(){
  let openDrawer = contactDrawer.hasClass("open-drawer");
    buttonPanel
      .fadeOut(400, function(){
        contactDrawer.addClass("expanded-drawer");
        contactDrawer.css({"height":"100vh","transform":"translateY(-100vh)"});

         // Open the right panel
        if(openDrawer && startButton.hasClass("clicked")){
          setTimeout( function() {
            console.log('startPanel');
            startPanel.fadeIn();
          }, 400);
        } else if(openDrawer && callButton.hasClass("clicked")){
          setTimeout( function() {
            console.log('callPanel');
            callPanel.fadeIn();
          }, 400);
        } else if(openDrawer && workButton.hasClass("clicked")){
          setTimeout( function() {
            console.log('workPanel');
            workPanel.fadeIn();
          }, 400);
        }else{
          return;
        }
      }
              );
  
  //Reveal back button
  setTimeout( function() {
    backButton.css({ "opacity":"1"}, 400);
  }, 800);
  setTimeout( function() {
    backButton.removeClass("hidden");
  }, 400);
}

function goBack(){
  let expandedDrawer = contactDrawer;
  if (expandedDrawer.hasClass("expanded-drawer")){
    setTimeout( function() {
      expandedDrawer.removeClass("expanded-drawer");
      if(!mobileMedia.matches){
        expandedDrawer.css({"height":"40vw","transform":"translateY(-40vw)", "opacity":"1"}, 400);
      }
    }, 400);
    //Show buttonPanel
    setTimeout(function () {
      buttonPanel.fadeIn(400);
    }, 400);

    hideBackButton();
    resetPanels();
  }
}

function hideBackButton(){  
  setTimeout(function () {
    backButton.css({ "opacity":"0"}, 400);
  }, 400);
}

function resetPanels(){
  console.log('resetPanels');
  let panels = $('.contact-panel');
  panels.fadeOut();
  drawerCol.removeClass('clicked');
}

$(".lets-talk-button").on("click", function(evt){
  console.log('lets talk clicked');
  evt.preventDefault();
  contactDrawerOpen()
});
$('.drawer-col').on('click', function (event) {
  $(this).addClass('clicked');
  contactDrawerExpand();
});
$(".contact-close-button").on("click", function(){
  contactDrawerClose();
});
$(".contact-back").on("click", function(){
  goBack();
});
