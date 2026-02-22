const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("mainHeader");

// Toggle menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Shrink header on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
