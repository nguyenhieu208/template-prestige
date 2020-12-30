var slideFeatureCollection = new Swiper('.section-feature-collection .slide-content .swiper-container', {
    navigation: {
      nextEl: '.section-feature-collection .slide-content .swiper-button-next',
      prevEl: '.section-feature-collection .slide-content .swiper-button-prev',
      // disabledClass: 'my-button-disabled',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    }
});

export default slideFeatureCollection;