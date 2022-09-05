const menuList = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.menu__burger');
let menuItems = document.querySelectorAll('.menu__item')

burgerMenu.addEventListener('click', function(){
  menuList.classList.toggle('active');
  document.body.classList.toggle('burger__active');
  this.classList.toggle('menu__burger-active');
})

menuItems.forEach((el, index) => {
  el.addEventListener('click', function() {
      menuList.classList.remove('active');
      document.body.classList.remove('burger__active');
      burgerMenu.classList.toggle('menu__burger-active');
  })
})

