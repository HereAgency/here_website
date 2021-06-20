//NAV COLOR CHANGE

var navOffset = $("#navbar").offset();
var sectionDivs = $(".ha-section");

$(document).scroll(function() {
    sectionDivs.each(function(k) {
        var sectionsOffset = $(this).offset();
        var _actPosition = sectionsOffset.top - $(window).scrollTop();
        if (_actPosition < (navOffset.top + $('#navbar').height()/2) && _actPosition + $(this).height() - $('#navbar').height()/2 > 0) {
            $("#navbar").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
            return false;
        }
    });
});
