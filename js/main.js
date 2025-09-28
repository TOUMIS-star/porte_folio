// ====== Menu burger ======
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// ====== Scroll vers section ======
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
