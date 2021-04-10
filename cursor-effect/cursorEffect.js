var endX = window.innerWidth / 2;
var endY = window.innerHeight / 2;
document
  .getElementsByTagName('body')[0]
  .addEventListener('mousemove', function (n) {
    (t.style.left = n.clientX + 'px'),
      (t.style.top = n.clientY + 'px'),
      (e.style.left = n.clientX + 'px'),
      (e.style.top = n.clientY + 'px'),
      (i.style.left = n.clientX + 'px'),
      (i.style.top = n.clientY + 'px'),
      // Position the dot
      (this.endX = n.pageX),
      (this.endY = n.pageY),
      ($dot.style.left = this.endX + 'px'),
      ($dot.style.top = this.endY + 'px');
  });

var t = document.getElementById('cursor'),
  e = document.getElementById('cursor2'),
  i = document.getElementById('cursor3'),
  $dot = document.getElementById('cursor-dot');

function n(t) {
  e.classList.add('hover', 'hover-2'),
    i.classList.add('hover', 'hover-2'),
    $dot.classList.add('hover', 'hover-2');
}
function s(t) {
  e.classList.remove('hover', 'hover-2'),
    i.classList.remove('hover', 'hover-2'),
    $dot.classList.remove('hover', 'hover-2');
}
s();
for (
  var r = document.querySelectorAll('.hover-target, .hover-target-2'),
    a = r.length - 1;
  a >= 0;
  a--
) {
  o(r[a]);
}
function o(t) {
  t.addEventListener('mouseover', n), t.addEventListener('mouseout', s);
}

const cursorModifiers = document.querySelectorAll('[cursor-class]');
const bodychange = document.querySelector('body');
const cursor = document.querySelector('.cursor');

cursorModifiers.forEach(cursorModifier => {
  cursorModifier.addEventListener('mouseenter', function () {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.add(className);
    // t.classList.add(className);
  });

  cursorModifier.addEventListener('mouseleave', function () {
    const className = this.getAttribute('cursor-class');
    bodychange.classList.remove(className);
    // t.classList.remove(className);
  });
});
