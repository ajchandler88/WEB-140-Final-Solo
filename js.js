var navIcon = document.querySelector('.nav-icon');
var navLinksMenu = document.querySelector('nav-links-menu');

navIcon.addEventListener('click', function () {
    if (navLinksMenu.style.visibility == "hidden") {
        navLinksMenu.style.visibility = "visible";
        button.innerHTML = "Show Menu";
    } else {
        navLinksMenu.style.visibility = "hidden";
        button.innerHTML = "Hide Menu";
    }
  }
);