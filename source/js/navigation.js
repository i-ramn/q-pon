const navItem = document.querySelectorAll('.header-navigation--inner-container--item')
const headerNavOptions = document.querySelector('.header-navigation--options')

const ACTIVE_NAV = 'header-navigation--options--visible'

navItem.forEach(el => {
  return el.addEventListener("mouseup", () => {
    headerNavOptions.classList.toggle('header-navigation--options--visible')
  })
})
