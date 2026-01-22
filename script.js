//Portfolio category switching
const buttons = document.querySelectorAll(".portfolio-btn");
const categories = document.querySelectorAll(".project-category");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show selected category, hide others
    const filter = btn.getAttribute("data-filter");
    categories.forEach(cat => {
      cat.style.display = (cat.id === filter) ? "grid" : "none";
    });
  });
});

