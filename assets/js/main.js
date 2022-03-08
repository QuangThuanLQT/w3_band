const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Ham hien thi modal mua ve (them class open vao modal)
function showBuyTickets() {
    modal.classList.add('open')
}

// Ham an modal mua ve (go bo class open vao modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hanh vi click vao button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation('click', modalContainer)
})




var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng/ Mở mobile menu
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav')

        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }

    }
}

// Slideshow tự động
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll("#slider");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 };
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

//nextElementSibling : để lấy phần tử anh chị em liền kề
//contains : kiểm tra class có tồn tại hay ko
//this: trả vể thẻ kích vào
//preventDefault: bỏ qua mặc định