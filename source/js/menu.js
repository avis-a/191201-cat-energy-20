var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__closed')) {
    navMain.classList.remove('main-nav__closed');
    navMain.classList.add('main-nav__opened');
  } else {
    navMain.classList.add('main-nav__closed');
    navMain.classList.remove('main-nav__opened');
  }
});
