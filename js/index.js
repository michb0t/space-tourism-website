
// navigation
const hamburgerMenu = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-nav");


hamburgerMenu.addEventListener("click", function() {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false"){
        nav.setAttribute("data-visible", true);
        hamburgerMenu.setAttribute("aria-expanded", true)
        nav.classList.add("toggle-on");

    } else {
        nav.setAttribute("data-visible", false);
        hamburgerMenu.setAttribute("aria-expanded", false)
        nav.classList.remove("toggle-on");

    }
})


