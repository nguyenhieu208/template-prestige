var slideShopTheLook = new Swiper('.section-shop-the-look .swiper-container', {
    navigation: {
      nextEl: '.section-shop-the-look .swiper-button-next',
      prevEl: '.section-shop-the-look .swiper-button-prev',
    },
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 0
      },
      // when window width is >= 640px
      960: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
});

export default slideShopTheLook;