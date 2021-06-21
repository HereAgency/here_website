$(document).ready(function() {
  const $category = $(".svc-category");
  const $icon = $(".svc-category .accordion-arrow-wrapper");
  const content = ".svc-category-content";

  $category.on("click", function() {
    //If category is open, close it
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").addClass("inactive");
      $(this).siblings(content).slideUp(500);
      $icon.removeClass("arrow-up").addClass("arrow-down");
      $(this).siblings("div").removeClass("highlightedText").addClass("hiddenText");
    }
    //Open the selected category
    else {
      //Collapse all items:
      $icon.removeClass("arrow-up").addClass("arrow-down");
      $category.removeClass("active").addClass("inactive");
      $(content).slideUp(500);
      $category.siblings("div").removeClass("highlightedText").addClass("hiddenText");
      //Open selected item:
      $(this).find(".accordion-arrow-wrapper").removeClass("arrow-down").addClass("arrow-up");
      $(this).removeClass("inactive").addClass("active");
      $(this).siblings(content).slideDown(500);
      $(this).siblings("div").removeClass("hiddenText").addClass("highlightedText");
    }
    return false;
  });
});
