var slideShopTheLook = new Swiper('.section-shop-the-look .swiper-container', {
    navigation: {
      nextEl: '.section-shop-the-look .swiper-button-next',
      prevEl: '.section-shop-the-look .swiper-button-prev',
    },
    slidesPerView: 1,
    prevNextButtons: true,
            pageDots: true,
            draggable: false,
            wrapAround: true,
});

export default slideShopTheLook;