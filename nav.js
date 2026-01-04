const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

/* Close menu on link click */
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
