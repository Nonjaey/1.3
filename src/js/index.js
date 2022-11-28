import '../scss/style.scss'
import '../scss/fonts.scss'

const openMenu = document.querySelector('.menu__open')
const closeMenu = document.querySelector('.menu__close')
const wrapper = document.querySelector('.wrapper')
const menuContainer = document.querySelector('.menu__container')
if (openMenu) {
  openMenu.addEventListener('click', function (e) {
    document.body.classList.add('lock')
    menuContainer.classList.add('active')
    wrapper.classList.add('active')
  })
}
if (closeMenu) {
  closeMenu.addEventListener('click', function (e) {
    document.body.classList.remove('lock')
    menuContainer.classList.remove('active')
    wrapper.classList.remove('active')
  })
}
