function startLoading() {
  let time; // Time the animation plays
  if(container.classList.contains('loading')){
    time=5000; //if showing preloader
  } else {
    time = 500; //if showing only 'curtain up' animation
  }
  setTimeout(function (time) {
    if(container.classList.contains('loading')){
      container.classList.remove('loading');
    }
    container.classList.add('loaded');

    var onEndHeaderAnimation = function (ev) {
      if (support.animations) {
        if (ev.target !== header) return;
        this.removeEventListener(animEndEventName, onEndHeaderAnimation);
      }
      document.body.classList.add('layout-switch');

      //Enable scroll after preloader finishes
      window.removeEventListener('scroll', noscroll);
    };

    //Check if curtain up animation has finished:
    if (support.animations) {
      header.addEventListener(animEndEventName, onEndHeaderAnimation);
    } else {
      onEndHeaderAnimation();
    }
  }, time);
}
