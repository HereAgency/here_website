// NAV SCROLL OBSERVER 

$(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
       $('#navbar').addClass('nav-scrolled');
    } else {
       $('#navbar').removeClass('nav-scrolled');
    }
});

// NAV TRANSITIONS ON HOVER

$(document).ready(function(){
  $("#navbar").mouseenter(function(){
    if ($( "#navbar" ).hasClass( "nav-scrolled" )){
      $('.nav-item').css({"transform":"translateY(0px)", "opacity":"1"});
      $('.hamburger').css({"transform":"translateX(48px)", "opacity": "0"});
    }
  });
  $("#navbar").mouseleave(function(){
    if ($( "#navbar" ).hasClass( "nav-scrolled" )){
      $('.nav-item').css({"transform":"translateY(-48px)", "opacity":"0"});
      $('.hamburger').css({"transform":"translateX(0)", "opacity":"1"});
    }
  });
});

//NAV COLOR CHANGE ON BACKGROUND CHANGE

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

//HAMBURGER ICON COLOR CHANGE ON OPEN

var hamburgerIconTrigger = $("#hamburger-mobile-trigger");
hamburgerIconTrigger.on("click", function() {
    if ($(this).hasClass("dark")) {
        return;
    } else {
         $("#navbar").addClass("light");
    }
});

