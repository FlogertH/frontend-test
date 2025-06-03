// GlideJS for the general products carousel section
new Glide(".general-products-carousel", {
  type: "carousel",
  perView: 3,
  gap: 20,
  breakpoints: {
    1024: { perView: 2 },
    600: { perView: 1 },
  },
}).mount();
//

// Navbar transformation to menu
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
//
