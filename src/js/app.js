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


// check shop 
// let listDotShop = document.querySelectorAll('.shop-box-right__dot');

// let check = document.querySelectorAll('.check');


// Array.from(check).forEach((item, index) => {
//     (listDotShop[0].children)[0].classList.add('class', 'dot__active');
//     item.addEventListener('click', () => {
//         if(item.checked === true && index == 0){
//             (listDotShop[0].children)[index].classList.add('class', 'dot__active');
//         }
//         else {
//             (listDotShop[0].children)[index].classList.remove('class', 'dot__active')
//         }
//     })    
// })