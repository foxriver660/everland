let buttonArrow = document.querySelectorAll('.header__submenu-button');

for(i=0; i<buttonArrow.length; i++) {
  let submenu = buttonArrow[i].nextElementSibling;
  let usedArrow =  buttonArrow[i];
  buttonArrow[i].addEventListener('click', function() {
    // submenu.classList.toggle('header__menu-opened');
    // function changeDisplayStyle (menu) {
    //   menu.style.display = 'block';
    // }
    usedArrow.classList.toggle('header__submenu-button_active');
  });
}
