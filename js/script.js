// burger menu

let burger = document.querySelector('.header__burger-menu');

burger.addEventListener('click', function() {
    this.classList.toggle('_active');
    // document.querySelector('.header__menu-list').classList.toggle('_active')
    document.querySelector('.header__menu-wrap').classList.toggle('_active')
    console.log(window.innerWidth)
    if (window.innerWidth <= 425) {
        document.querySelector('body').classList.toggle('_locked')
    }
})