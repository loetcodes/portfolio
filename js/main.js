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

// Dark/Light Mode switch - with user preference storage
const toggleSwitch = document.querySelector('.mode-switch input[type="checkbox"]');

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchMode, false);


// Load users-preference by default if available
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}