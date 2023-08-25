document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion-header");
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("show");
      });
    }
  });