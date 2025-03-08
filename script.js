/*défilement du bouton */

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTop = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
/* menu */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

