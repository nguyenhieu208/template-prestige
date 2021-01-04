var slideShopTheLook = new Swiper('.section-shop .swiper-container', {
    navigation: {
      nextEl: '.section-shop .swiper-button-next',
      prevEl: '.section-shop .swiper-button-prev',
    },
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1.1,
        spaceBetween: 30
      },
      960: {
          slidesPerView: 1.5,
          spaceBetween: 30
      },
      1025: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
});

export {slideShopTheLook};