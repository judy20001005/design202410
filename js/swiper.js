var swiper1 = new Swiper(".swiper-1", {
    effect: 'fade',
    speed:2000,
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper(".swiper-2", {
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
