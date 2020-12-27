import '../styles/app.scss';

//header-top
let mainNav = document.querySelector('.main-nav');
document.addEventListener('scroll', function(e) {
    mainNav.classList.add('class', 'main-nav__sticky');
});

//slide header

let slide = document.querySelectorAll('.slide-header .slide__img')
// console.log(slide)

let paginationHeader = document.querySelectorAll('.swiper-pagination')[0].children;

console.log(paginationHeader);


Array.from(paginationHeader).forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(item);
    console.log(index);
    slide[index].classList.add('class', 'test');
  })
})

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
// var elements = document.querySelectorAll('.slide-header .swiper-slide .slide--box');
// console.log(elements);

var slideHeader = new Swiper('.slide-header .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed:300,
    allowSlideNext: false,
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
    on: {
        slideChange: () => {
          anime({
            targets: '.swiper-slide .slide--box',
            easing: 'easeInOutQuad',
            translateY: ['0%', '-60%'],
            opacity: ['0', '1'],
            duration: 1000,
            delay: 1500,
          }),
          anime({
            targets: '.swiper-slide .slide__img',
            scale: ['1.5', '1'],
            duration: 2000,
            easing: 'easeInOutQuad',
          });
        }
    }
});



var slideContent = new Swiper('.slide-content .swiper-container', {
    navigation: {
      nextEl: '.slide-content .swiper-button-next',
      prevEl: '.slide-content .swiper-button-prev',
      disabledClass: 'my-button-disabled',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
});

// console.log(slideContent);

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