const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", toggleNavbarOpacity);

function toggleNavbarOpacity() {
  window.scrollY == 0
    ? (navbar.style.backgroundColor = "transparent")
    : (navbar.style.backgroundColor = "#ffffff");
}
