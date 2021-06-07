document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	if( (document.body.classList.contains('layout-switch')) 
	   && (!document.body.classList.contains('hover-section'))
	  ){
		//image moving on hover:
		gsap.to(e, 0.3, {
		    left: n.clientX + "px",
		    top: n.clientY + "px"
		});
		
		t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px"
	
	}
});

var t = document.getElementById("cursor-dot");
var e = document.getElementById("cursor-img");

// $('.ha-section.hover-section').mouseenter(function() {
// 	t.style.opacity = 0
// });
// $('.ha-section.hover-section').mouseleave(function() {
// 	t.style.opacity = 1
// });

const cursorModifiers = document.querySelectorAll('.hover-target');
const bodychange = document.body;

cursorModifiers.forEach(cursorModifier => {
  $(cursorModifier).mouseenter( function() {
  	console.log("mouseenter hover-target");
    const className = this.getAttribute('cursor-class');
    bodychange.classList.add(className);
	  
  	console.log(className);
		
		if(className == 'hover-section'){
// 			t.style.opacity = 0
		} else if (className == 'arrow'){
			t.classList.add("hover"); 
		} else{
			e.classList.add("hover"); 
		}
	});
  
  $(cursorModifier).mouseleave(function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
		
		if(className == 'hover-section'){
// 			t.style.opacity = 1
		} else if (className == 'arrow'){
			t.classList.remove("hover"); 
		} else{
			e.classList.remove("hover"); 
		}
  });
});
