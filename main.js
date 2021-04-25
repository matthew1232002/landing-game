"use strict"
new Swiper('.about-slider',{
  navigation: {
    nextEl:'.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  loopedSlides: 1,
  slidesPerView: 1,
});

/////////////////////////////anchors/////////////////////////////
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

/////////////////////////////burgerMenu/////////////////////////////
let menuBtn = document.getElementById('burgerMenu');
let menuContainer = document.getElementById('menu');

let menuIconClosed = "nav-toggle"; //class name for closed button
let menuIconOpened = "nav-toggle active"; //class name for opened button
let menuContClosed = "header__menu"; //class name for closed menu
let menuContOpened = "header__menu active"; //class name for opened menu

menuBtn.onclick = function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
}


