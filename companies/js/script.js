const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const adaptiveSearch = document.querySelector('.adaptive-search')
const topHead = document.querySelector('.top-head')
const headerNavigation = document.querySelector('.header-navigation--container')

const menuVisibilityHandler = () => {
  if (burgerMenu.classList.value === 'close') {
    adaptiveSearch.classList.replace('adaptive-search', 'adaptive-search--visible')
    topHead.classList.add('visible')
    headerNavigation.classList.add('visible')
  }
  else {
    adaptiveSearch.classList.replace('adaptive-search--visible', 'adaptive-search')
    topHead.classList.remove('visible')
    headerNavigation.classList.remove('visible')

  }
}

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  menuVisibilityHandler()
});

window.addEventListener("resize", (e) => {
  const width = e.target.innerWidth;
  menuVisibilityHandler()

  if (width > 769) {
    burgerMenu.classList.remove("close");
  }
})

const navItem = document.querySelectorAll('.header-navigation--inner-container--item')
const headerNavOptions = document.querySelector('.header-navigation--options')

const ACTIVE_NAV = 'header-navigation--options--visible'

navItem.forEach(el => {

  //  el.addEventListener("mouseover", () => {
  //   headerNavOptions.classList.add('header-navigation--options--visible')
  // })
  //
  // el.addEventListener('mouseleave', () => {
  //   headerNavOptions.classList.remove('header-navigation--options--visible')
  // })
})


const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
