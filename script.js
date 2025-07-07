document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const closeNav = document.getElementById("closeNav");

  hamburger.addEventListener("click", () => {
    navLinks.classList.add("open");
  });

  closeNav.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });

  // Optional: Close menu when a nav link is clicked (for single page nav)
  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});
