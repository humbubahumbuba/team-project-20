new Swiper(".image-slider", {
    mousewheel: {
        sensitivity: 1
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    // effect: 'flip',
    // flipEffect: {
    //   slideShadows: true,
    //   limitRotation: true,
    // },
    effect: "cube",
    flipEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    }
});
new Swiper(".reviews-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: {
        sensitivity: 1
    }
});

//# sourceMappingURL=index.579125c3.js.map
