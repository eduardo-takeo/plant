const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", toggleNavbarOpacity);

function toggleNavbarOpacity() {
  window.scrollY == 0
    ? navbar.classList.remove("navbar--solid")
    : navbar.classList.add("navbar--solid");
}
