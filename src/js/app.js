import '../styles/app.scss';

console.log('Starting kmacoders dev !!!');

let dot = document.querySelectorAll(".bar");
console.log(dot);
// dot[0].setAttribute("style", "background-color: white;");

let checked = document.querySelectorAll('input[name="r"]');
console.log(checked);
Array.from(checked).forEach((item, i) => {
    item.addEventListener('click', () => {
        dot[i].setAttribute("style", "background-color: white;");
    })
})

let i1 = document.querySelector('.nav__tablet--item__icon i');
let i2 = document.querySelectorAll('.nav__tablet--item__icon i');

let test = document.querySelectorAll('.nav__tablet--item');
console.log(test[0]);
test[0].addEventListener('click', () => {
    test[0].classList.toggle("nav__tablet--item-click");

    i1.classList.toggle('rotatePlus');

    i2[1].classList.toggle('rotateMinus')
})



var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});