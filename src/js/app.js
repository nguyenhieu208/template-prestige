import '../styles/app.scss';

console.log('Starting kmacoders dev !!!');

//header-top
let mainNav = document.querySelector('.main-nav');
document.addEventListener('scroll', function(e) {
    mainNav.classList.add('class', 'main-nav__sticky');
});

// tablet icon 
let plus = document.querySelector('.nav__tablet--item__icon i');
let minus = document.querySelectorAll('.nav__tablet--item__icon i');

let liTag = document.querySelectorAll('.nav__tablet--item');
liTag[0].addEventListener('click', () => {
    liTag[0].classList.toggle("nav__tablet--item-click");

    plus.classList.toggle('rotatePlus');

    minus[1].classList.toggle('rotateMinus')
})

// slide
var slideHeader = new Swiper('.slide-header .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slide-header .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.slide-header .swiper-button-next',
        prevEl: '.slide-header .swiper-button-prev',
    },
});

var slideContent = new Swiper('.slide-content .swiper-container', {
    navigation: {
      nextEl: '.slide-content .swiper-button-next',
      prevEl: '.slide-content .swiper-button-prev',
    },
});

// let dotContent = document.querySelectorAll('.section-content__dot span');
// dotContent[0].classList.add('class', 'section-content__dot-active');
// Array.from(dotContent).forEach((item, index) => {
//     item.addEventListener('click', () => {
//         if(index !== 0) {
//             item.classList.add('class', 'section-content__dot-active');
//             dotContent[0].classList.remove('class', 'section-content__dot-active');
//         }
//         else {
//             item.classList.add('class', 'section-content__dot-active');
//         }
//     })
// })