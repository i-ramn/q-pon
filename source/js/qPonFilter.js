const qPonFilter = document.querySelector('.filter')
const qPonFilterList = document.querySelector('.filter--list')
const qPonFilterTitle = document.querySelector('.filter--title')
const qPonFilterTitleArrow = document.querySelector('.filter--title--arrow-sm')
const arrowIcon = document.querySelector('.arrow-icon')


qPonFilter.addEventListener('click', (event) => {
  qPonFilterList.classList.toggle('filter--list--active')
  qPonFilterTitle.classList.toggle('filter--title--active')
  qPonFilterTitleArrow.classList.toggle('filter--title--arrow-sm--active')
  arrowIcon.classList.toggle('arrow-icon--active')
})
