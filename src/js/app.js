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
let listInput = document.querySelectorAll('input[name="shop"]');
let radioDot = document.querySelectorAll('.shop-box-right__dot')[0].children;

let listImg = document.querySelectorAll('.section-shop-the-look .swiper-slide')[1];
let img1 = listImg.querySelectorAll('.shop-box-right__img');
let dotShop = listImg.querySelectorAll('.shop-box-left__dot');

function render() {
    for (let i = 0; i < Array.from(listInput).length; i++) {
        if(listInput[i].checked == true) {
            radioDot[i].classList.add('class', 'dot__active')
            img1[i].classList.remove('class', 'shop-box-right__img-hidden');
            dotShop[i].classList.add('class', 'shop-box-left__dot--active');
        }
        else {
            radioDot[i].classList.remove('class', 'dot__active')
            img1[i].classList.add('class', 'shop-box-right__img-hidden');
            dotShop[i].classList.remove('class', 'shop-box-left__dot--active');
        }
    }
}
render();

Array.from(listInput).forEach((item, index) => {
    item.addEventListener('click', () => {
        render();
        if(listInput[index].checked == true) {
            radioDot[index].classList.add('class', 'dot__active');
            img1[index].classList.remove('class', 'shop-box-right__img-hidden');
            dotShop[index].classList.add('class', 'shop-box-left__dot--active');
            render();
        }
        else {
            radioDot[index].classList.remove('class', 'dot__active');
            img1[index].classList.add('class', 'shop-box-right__img-hidden');
            dotShop[index].classList.remove('class', 'shop-box-left__dot--active');
            render();
        }
    })
})