new Swiper('.image-slider', {
  mousewheel: {
    sensitivity: 1,
  },
  autoplay: {
    delay: 3300,
    disableOnInteraction: false,

  },
  effect: 'cube',
  flipEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
});

new Swiper('.reviews-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  autoHeight: true,
});
