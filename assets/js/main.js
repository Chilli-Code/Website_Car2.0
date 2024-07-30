/*=============== MOSTRAR MENÚ ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== QUITAR MENÚ MÓVIL ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => navMenu.addEventListener('click', linkAction));

/*=============== SWIPER CAR ===============*/
const swiperHome = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },
})

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__panel-1', {y: -1000, duration: 2})
gsap.from('.home__panel-2', {y: 1000, duration: 2})
gsap.from('.home__image', {x: 1000, duration: 2})
gsap.from('.home__titles', {y: 100, opacity: 0, delay: 2})
gsap.from('.home__title', {x: 100, opacity: 0, delay: 2.1})

/*=============== AÑADIR CABECERA BORROSA ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)