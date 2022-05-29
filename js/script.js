var elHeader = document.querySelector(".header");
var elBtn = document.querySelector(".header__menu");

elBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});
