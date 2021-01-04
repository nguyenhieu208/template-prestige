let listInputBtn = document.querySelectorAll('input[name="shop"]');
let listDotBtn = document.querySelectorAll('.shop-box-right__dot')[0].children;

// focus parent
let listImg = document.querySelectorAll('.section-shop-the-look .swiper-slide')[1];

let imgItems = listImg.querySelectorAll('.shop-box-right__img');
let listDotInImg = listImg.querySelectorAll('.shop-box-left__dot');


function render() {
    for (let i = 0; i < Array.from(listInputBtn).length; i++) {
        if(listInputBtn[i].checked == true) {
            listDotBtn[i].classList.add('class', 'dot__active')
            imgItems[i].classList.remove('class', 'shop-box-right__img-hidden');
            listDotInImg[i].classList.add('class', 'shop-box-left__dot--active');
        }
        else {
            listDotBtn[i].classList.remove('class', 'dot__active')
            imgItems[i].classList.add('class', 'shop-box-right__img-hidden');
            listDotInImg[i].classList.remove('class', 'shop-box-left__dot--active');
        }
    }
}
render();


let checkShopTheLook = Array.from(listInputBtn).forEach((item, index) => {
  item.addEventListener('click', () => {
      render();
      if(listInputBtn[index].checked == true) {
          listDotBtn[index].classList.add('class', 'dot__active');
          imgItems[index].classList.remove('class', 'shop-box-right__img-hidden');
          listDotInImg[index].classList.add('class', 'shop-box-left__dot--active');
          render();
      }
      else {
          listDotBtn[index].classList.remove('class', 'dot__active');
          imgItems[index].classList.add('class', 'shop-box-right__img-hidden');
          listDotInImg[index].classList.remove('class', 'shop-box-left__dot--active');
          render();
      }
  })
})

export {checkShopTheLook};