const closeMenu = document.getElementById('menu-close')
const buttonMenu = document.getElementById('menu-btn')
const navigation = document.querySelector('nav .navigation ul')


buttonMenu.addEventListener('click', () => {

    navigation.classList.add('active')
})

closeMenu.addEventListener('click', () => {

    navigation.classList.remove('active')
})