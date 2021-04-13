
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	if(document.body.classList.contains('layout-switch')){
		t.style.left = e.style.left = n.clientX + "px",
		e.style.top = t.style.top = n.clientY + "px"
	}
});

var t = document.getElementById("cursor-dot"),
    e = document.getElementById("cursor-img");

function n(x) {
  t.classList.add("hover"),e.classList.add("hover")
}
function s(x) {
  t.classList.remove("hover"),e.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

const cursorModifiers = document.querySelectorAll('[cursor-class]');
const bodychange = document.body;

cursorModifiers.forEach(cursorModifier => {
  cursorModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.add(className);
  });
  
  cursorModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
  });
});
