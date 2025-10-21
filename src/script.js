
const dropMenu = document.querySelector('.dropdown-menu')
function ontoggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    dropMenu.classList.toggle('top-20')
     
}
