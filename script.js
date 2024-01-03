let menuMobile = document.querySelector('.menu-mobile')
let button = document.querySelector('.button-menu button')

let open = false

function openCloseMenu() {
    menuMobile.classList.toggle('open')

    button.textContent = menuMobile.classList.contains('open') ? 'Fechar Menu' : 'Abrir Menu'
}