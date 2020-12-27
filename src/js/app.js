import '../styles/app.scss';
import {slideHeader} from './header/slideHeader';
import {slideFeatureCollection} from './content/slideFeatureCollection';
import {slideShopTheLook} from './content/slideShop';

// Slide Header
var slideHead = slideHeader;

// Slide content
const slideFeature = slideFeatureCollection;

// Slide shopthelook
const slideShop = slideShopTheLook;

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