// check product of month
let listBtn = document.querySelectorAll('.section-product-of-month .btn-box')
let listInputBtn = document.querySelectorAll('.section-product-of-month input');
let imgItems = document.querySelectorAll('.section-product-of-month img');

console.log(imgItems)

function render() {
    for (let i = 0; i < Array.from(listInputBtn).length; i++) {
        if(listInputBtn[i].checked == true) {
            listBtn[i].classList.add('class', 'btn-box--active');
            imgItems[i].style.display = "block";
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
        }
        else {
            listBtn[index].classList.remove('class', 'btn-box--active');
            imgItems[index].style.display = "none";
        }
        render();
    })
})

export {checkProductOfMonth};