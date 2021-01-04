import '../styles/app.scss';
import {slideHeader} from './header/slideHeader';
import {slideFeatureCollection} from './content/slideFeatureCollection';
import {checkProductOfMonth} from './content/checkProductOfMonth';
import {slideShopTheLook} from './content/slideShop';
import {checkShopTheLook} from './content/checkShopTheLook';

// Slide Header
var slideHead = slideHeader;

// Slide collection
const slideFeature = slideFeatureCollection;

// Slide shopthelook
const slideShop = slideShopTheLook;

//check product
let checkProduct = checkProductOfMonth;

// checkshop
let checkShop = checkShopTheLook;


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