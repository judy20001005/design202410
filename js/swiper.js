var swiper1 = new Swiper(".swiper-1", {
    effect: 'fade',
    speed:2000,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".swiper-2", {
    speed: 600,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
      }
    }
  });
