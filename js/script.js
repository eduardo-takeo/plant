const navbar = document.getElementsByTagName("nav");
window.addEventListener("scroll", toggleNavbarOpacity);

function toggleNavbarOpacity() {
  setTimeout(() => {
    window.scrollY == 0
      ? (navbar[0].style.backgroundColor = "transparent")
      : (navbar[0].style.backgroundColor = "#ffffff");
  }, 250);
}
