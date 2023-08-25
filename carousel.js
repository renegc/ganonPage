document.addEventListener("DOMContentLoaded", function () {
    const carouselButtons = document.querySelectorAll(".carousel-button");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".indicator");

    let currentItem = 0;

    carouselButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        carouselItems[currentItem].classList.remove("active");
        indicators[currentItem].classList.remove("active");

        if (button.classList.contains("carousel-button-right")) {
          currentItem = (currentItem + 1) % carouselItems.length;
        } else {
          currentItem =
            (currentItem - 1 + carouselItems.length) % carouselItems.length;
        }

        carouselItems[currentItem].classList.add("active");
        indicators[currentItem].classList.add("active");
      });
    });

    function updateCarousel(newIndex) {
      carouselItems[currentItem].classList.remove("active");
      indicators[currentItem].classList.remove("active");
      currentItem = newIndex;
      carouselItems[currentItem].classList.add("active");
      indicators[currentItem].classList.add("active");
    }

    // Escuchar click en cada indicador
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        updateCarousel(index);
      });
    });

    // Actualizar el código dentro del listener de los botones del carousel
    carouselButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (button.classList.contains("carousel-button-right")) {
          updateCarousel((currentItem + 1) % carouselItems.length);
        } else {
          updateCarousel(
            (currentItem - 1 + carouselItems.length) % carouselItems.length
          );
        }
      });
    });
  });