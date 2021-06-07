document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	if( (document.body.classList.contains('layout-switch')) 
	   && (!document.body.classList.contains('desable'))
	  ){
		//image moving on hover:
		gsap.to(e, 0.3, {
		    left: n.clientX + "px",
		    top: n.clientY + "px"
		});
		//Red dot
		t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px"
		
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
	if(className == 'desable'){
		t.style.opacity = 0
	} else if (className == 'arrow'){
		t.classList.add("hover"); 
	} else{
		e.classList.add("hover"); 
	}
  });
  
  $(cursorModifier).mouseleave(function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
	if(className == 'desable'){
		t.style.opacity = 1
	} else if (className == 'arrow'){
		t.classList.remove("hover"); 
	} else{
		e.classList.remove("hover"); 
	}
  });
});

// MAGNETIC CURSOR FOR INSTAGRAM ICON
class MagneticCursor {
  constructor(el) {
    this.el = el;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(s) {
    const cursorPosition = {
      left: s.clientX,
      top: s.clientY
    };
    document.querySelectorAll(".ig-target").forEach((single) => {
      const triggerDistance = single.getBoundingClientRect().width * 2;

      const targetPosition = {
        left:
          single.getBoundingClientRect().left +
          single.getBoundingClientRect().width / 2,
        top:
          single.getBoundingClientRect().top +
          single.getBoundingClientRect().height / 2
      };
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      };

      const angle = Math.atan2(distance.x, distance.y);
      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );
      if (hypotenuse < triggerDistance) {
        if(single.classList.contains("black-link")){
          console.log('contains black');
          gsap.to(this.el, {
            left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
            top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
            height: "80px",
            width: "80px",
            backgroundColor: "transparent",
            border: "solid 1px #131415",
            duration: 0.2
          });
        } else {
          
          gsap.to(this.el, {
            left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
            top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
            height: "80px",
            width: "80px",
            backgroundColor: "transparent",
            border: "solid 1px white",
            duration: 0.2
          });
        }
        
        gsap.to(single.querySelector(".instagram-icon"), {
          x: -((Math.sin(angle) * hypotenuse) / 2),
          y: -((Math.cos(angle) * hypotenuse) / 2),
          duration: 0.2
        });
      } 
      else if (document.body.classList.contains('layout-switch'))  {
        gsap.to(this.el, {
          left: cursorPosition.left,
          top: cursorPosition.top,
          height: "24px",
          width: "24px",
          backgroundColor: "red",
          border: "solid 1px red",
          duration: 0.2
        });
        gsap.to(single.querySelector(".instagram-icon"), {
          x: 0,
          y: 0,
          duration: 0.2
        });
      }
    });
  }
}


const magneticCursor = new MagneticCursor(t);
