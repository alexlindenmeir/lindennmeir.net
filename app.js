const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const socialsMenu = document.querySelector('#socials-page');
  const aboutMenu = document.querySelector('#about-page');
  const quotesMenu = document.querySelector('#quotes-page');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 900 && scrollPos < 600) {
    socialsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 900 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    socialsMenu.classList.remove('highlight');
    quotesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 900 && scrollPos < 2345) {
    quotesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 900 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }


};

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);