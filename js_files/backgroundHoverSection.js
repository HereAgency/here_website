//*************************************
  // SECTION: BACKGROUND CHANGE ON HOVER
  //*************************************
  const labelTrigger = $(".hover-section .section-wrapper a");
  const hoverImg = "#service-img-";
  const hoverLabel = "#service-lbl-";
  const allLabels = $("[id*=service-lbl-]");

  let imgId = 0;

  labelTrigger.mouseenter(function() {
    imgId = this.id.slice(-1);

    // HIGHLIGHT ONLY THE LABEL ON HOVER:
    allLabels.css("opacity", "0.32");
    $(hoverLabel+imgId+"").css("opacity", "1", );

    // SHOW IMAGE AND ANIMATE TO MOVE RIGHT
    $(hoverImg + imgId + "")
      .fadeIn()
      .addClass("service-lbl-active")
  });
  labelTrigger.mouseleave(function() {
    imgId = this.id.slice(-1);

    // LABELS BACK TO NORMAL COLOR
    allLabels.css("opacity", "1");

    // HIDE IMAGE
    // console.log("mouseleft item: "+ imgId);
    $(hoverImg + imgId + "")
      .css("opacity", "0")
      .removeClass("service-lbl-active")
  });