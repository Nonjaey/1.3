import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'
import Swiper, { Pagination } from 'swiper'
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

const showMore = document.querySelectorAll('.show-more')
showMore.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault()
    const brands = document.querySelector('.brands__items')
    const about = document.querySelector('.about__text')
    toggler.classList.toggle('active')
    if (toggler.classList.contains('brands__show-more')) {
      brands.classList.toggle('active')
    } else if (toggler.classList.contains('about__read-more')) {
      about.classList.toggle('active')
    }
  })
})

if (document.documentElement.clientWidth < 768) {
  Swiper.use([Pagination])
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.25
      },
      375: {
        slidesPerView: 'auto'
      }
    }
  })
}
