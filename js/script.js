var swiper = new Swiper("#char-content", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  // autoplay:true,
  grabCursor: 'true',
  pagination: {
    el: "#char-pagin",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#char-next",
    prevEl: "#char-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 5,
    },
    1100: {
      slidesPerView: 6,
    },
  },
});

var swiper2 = new Swiper("#other-contint", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  // autoplay:true,
  grabCursor: 'true',
  pagination: {
    el: "#other-pagin",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: "#other-next",
    prevEl: "#other-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    },
  },
});