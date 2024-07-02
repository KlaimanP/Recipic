const menu =  document.querySelector('.burgerMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})