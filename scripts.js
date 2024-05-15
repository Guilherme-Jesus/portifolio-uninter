document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

   function removeActiveClasses() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

   navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      removeActiveClasses();
      link.classList.add("active");
    });
  });

   window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();  
        const href = link.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
          top: offsetTop - 100,  
          behavior: "smooth",
        });
      });
    });
  });
});
