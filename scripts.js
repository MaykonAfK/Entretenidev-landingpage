"use strict";
var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        navbar.classList.remove("navbar-hidden");
      } else {
        navbar.classList.add("navbar-hidden");
      }
    });