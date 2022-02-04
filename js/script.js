var elHeader = document.querySelector(".header")
var burgerBtn = document.querySelector(".header__menu")

burgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle(".header--open")
})