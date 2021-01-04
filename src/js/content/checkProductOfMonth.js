// check product of month
let listBtn = document.querySelectorAll('.section-product .btn-box')
let listInputBtn = document.querySelectorAll('.section-product input');
let imgItems = document.querySelectorAll('.section-product-left__img img');

let textStock = document.querySelectorAll('.section-product .section-product__noti')[0];


function render() {
    for (let i = 0; i < Array.from(listInputBtn).length; i++) {
        if(listInputBtn[i].checked == true) {
            listBtn[i].classList.add('class', 'btn-box--active');
            imgItems[i].style.display = "block";
            

            if(i == 1) {
                textStock.style.display = "none";
            }
            else {
                textStock.style.display = "block";
            }
        }
        else {
            listBtn[i].classList.remove('class', 'btn-box--active');
            imgItems[i].style.display = "none";
        }
    }
}

let checkProductOfMonth = Array.from(listInputBtn).forEach((item, index) => {
    item.addEventListener('click', () => {
        if(listInputBtn[index].checked == true) {
            listBtn[index].classList.add('class', 'btn-box--active');
            imgItems[index].style.display = "block";

            if(index == 1) {
                textStock.style.display = "none";
            }
            else {
                textStock.style.display = "block";
            }
        }
        else {
            listBtn[index].classList.remove('class', 'btn-box--active');
            imgItems[index].style.display = "none";
        }
        render();
    })
})

export {checkProductOfMonth};