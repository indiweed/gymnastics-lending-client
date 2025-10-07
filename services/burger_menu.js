document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger_menu');
    const burger_btn = document.querySelector('.burger_btn');
    const burger_close = document.querySelector('.burger_close');
    const burger_overlay = document.querySelector('.burger_overlay');

    function checkScreenSize() {
        if (window.innerWidth > 870) {
            burgerMenu.classList.remove('active');
            burger_overlay.classList.remove('active');
        }
    }
    burger_btn.addEventListener('click', function() {
        burgerMenu.classList.add('active');
        burger_overlay.classList.add('active');
    });
    burger_close.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        burger_overlay.classList.remove('active');
    })
    burger_overlay.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        burger_overlay.classList.remove('active');
    })
    document.querySelectorAll('.burger_nav_menu ul li a').forEach((el) => {
        el.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            burger_overlay.classList.remove('active');
        })
    })
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize()
});