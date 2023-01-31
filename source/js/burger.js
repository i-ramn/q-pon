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
