const toggleBtn = document.querySelector(".toggle-button")
const dropMenu = document.querySelector(".dropdown-menu")

toggleBtn.addEventListener('click', () =>{
    dropMenu.classList.toggle('top-20')
})