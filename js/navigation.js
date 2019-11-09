// Navigation Menu Script


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("scrollDown");
  } else {
    navbar.classList.add("scrollDown");
  }
  prevScrollpos = currentScrollPos;
}