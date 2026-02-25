// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 120) {
        section.classList.add("show"); // triggers the CSS animation
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on page load
});
document.querySelectorAll(".slide-text").forEach(el => {
  const letters = el.textContent.split("");
  el.textContent = ""; // clear original text
  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    el.appendChild(span);
  });
});
