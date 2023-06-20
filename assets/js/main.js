const menu_troggler = document.querySelector(".nav__menu-btn");
const navbar = document.querySelector(".nav");
menu_troggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
