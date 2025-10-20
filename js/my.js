
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav__content');

// 2. Add an event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {

  navMenu.classList.toggle('main-nav__content--active');

  hamburgerButton.classList.toggle('is-active');
  if (hamburgerButton.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});