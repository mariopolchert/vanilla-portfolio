const desktopMenu = document.querySelector("#desktopMenu");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = document.querySelectorAll(".mobileLinks");
const divHam = document.querySelector("#divHam");
const mobileLogoLink = document.querySelector("#mobileLogoLink");

// window.onscroll = () => {
//     scrollingMenu();
// };

// function scrollingMenu() {
//     document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
//         ? desktopMenu.classList.add("reduced")
//         : desktopMenu.classList.remove("reduced");
// }

// JavaScript logic to add the 'reduced' class on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        desktopMenu.classList.add("reduced");
    } else {
        desktopMenu.classList.remove("reduced"); // Remove the class
    }
});

const handleClick = () => {
    divHam.classList.toggle("xsign");
    mobileNav.classList.toggle("active");
};

mobileLogoLink.addEventListener("click", () => {
    divHam.classList.remove("xsign");
    mobileNav.classList.remove("active");
});

divHam.addEventListener("click", () => {
    handleClick();
});

mobileLinks.forEach((n) => {
    n.addEventListener("click", () => {
        handleClick();
    });
});
