
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {

    t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
});

var t = document.getElementById("cursor-dot"),
    e = document.getElementById("cursor-img"),
    i = document.getElementById("cursor-arrow");

function n(x) {
  t.classList.add("hover"), 
    e.classList.add("hover"), 
    i.classList.add("hover")
}
function s(x) {
  t.classList.remove("hover"),
    e.classList.remove("hover"),
    i.classList.remove("hover")
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
    // t.classList.add(className);
  });
  
  cursorModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
    // t.classList.remove(className);
  });
});
