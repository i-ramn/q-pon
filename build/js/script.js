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

const qPonFilter = document.querySelector('.filter')
const qPonFilterList = document.querySelector('.filter--list')
const qPonFilterTitle = document.querySelector('.filter--title')
const qPonFilterTitleArrow = document.querySelector('.filter--title--arrow-sm')
const arrowIcon = document.querySelector('.arrow-icon')


qPonFilter?.addEventListener('click', (event) => {
  qPonFilterList.classList.toggle('filter--list--active')
  qPonFilterTitle.classList.toggle('filter--title--active')
  qPonFilterTitleArrow.classList.toggle('filter--title--arrow-sm--active')
  arrowIcon.classList.toggle('arrow-icon--active')
})

const tabs = document?.querySelectorAll('.tabs--button')
const tabContent = document?.querySelectorAll('.tabs--content--panel')

const handleTabToggle = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target)

      tabContent.forEach(el => {
        el.classList.remove('is-active')
      })

      target.classList.add('is-active')

      tabs.forEach(el => {
        el.classList.remove('is-active')
      })

      tab.classList.add('is-active')
    })
  })
}

if (tabs && tabContent) {
  handleTabToggle()
}

const headerSwiper = document?.querySelector('.mySwiper')

const swiper = headerSwiper && new Swiper(headerSwiper, {
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
