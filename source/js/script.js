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


const checkbox = document.getElementById('adsCheckbox')
const intoTheTop = document.querySelector('.into-the-top')

const toggleTopCheckbox = () => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      intoTheTop.classList.add('into-the-top--active')
    } else {
      intoTheTop.classList.remove('into-the-top--active')
    }
  })
}

if (checkbox && intoTheTop) {
  toggleTopCheckbox()
}
