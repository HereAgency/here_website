
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	if( (document.body.classList.contains('layout-switch')) && (!document.body.classList.contains('hover-section'))){
		gsap.to(e, 0.3, {
			left: n.clientX + "px",
			top: n.clientY + "px",
		}),
		t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		//	e.style.left = n.clientX + "px",
		// 		e.style.top = n.clientY + "px"
	}
});

var t = document.getElementById("cursor-dot");
var e = document.getElementById("cursor-img");

const cursorModifiers = document.querySelectorAll('.hover-target');
const bodychange = document.body;

cursorModifiers.forEach(cursorModifier => {
  $(cursorModifier).mouseenter( function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.add(className);
    t.classList.add("hover"); 
    e.classList.add("hover"); 
  });
  
  $(cursorModifier).mouseleave(function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
    t.classList.remove("hover");
    e.classList.remove("hover");
  });
});
