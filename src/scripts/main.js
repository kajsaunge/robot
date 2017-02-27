// What do I want to do?
// Clicka a swatch to add that color to the header

document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.getElementsByClassName("box");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
      document.getElementById('js-header').className = this.className.split(' ')[1];
    }, false);
  }
});
