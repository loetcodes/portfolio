// Main script


// Navigation Bar Slide In and Out
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

// Dark / Light Mode switch
const toggleSwitch = document.querySelector('.mode-switch input[type="checkbox"]');

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchMode, false);