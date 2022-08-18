const buttonArrow = document.querySelectorAll('.header__submenu-button');
const menu = document.querySelector('.header__menu');
const buttonMenu = document.querySelector('.header__menu-button');
const buttonMenuImage = document.querySelector('.header__menu-button-image');

// Открытие основного меню 
buttonMenu.addEventListener('click', function() {
  if(getComputedStyle(menu).display == 'none') {
    menu.style.display = 'flex';
    buttonMenuImage.style.backgroundImage = 'url(../images/header_menu-button-close.svg)'
  } else {
    menu.style.display = 'none';
    buttonMenuImage.style.backgroundImage = 'url(../images/header_menu-button.svg)'
  }
})

// Открытие подменю по клику на стрелочку
for(i=0; i<buttonArrow.length; i++) {
  const submenu = buttonArrow[i].nextElementSibling;
  const usedArrow =  buttonArrow[i];
  buttonArrow[i].addEventListener('click', function() {
    if (getComputedStyle(submenu).display == 'none') {
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
    usedArrow.classList.toggle('header__submenu-button_active');
  });
}