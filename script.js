const nav = document.querySelector("nav");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = document.querySelectorAll(".mobileLinks");
const divHam = document.querySelector("#divHam");
const mobileLogoLink = document.querySelector("#mobileLogoLink");

// window.onscroll = () => {
//     scrollingMenu();
// };

// function scrollingMenu() {
//     if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//     ) {
//         // reduced menu
//         nav.classList.remove("normalMenu");
//         nav.classList.add("reducedMenu");
//     } else {
//         // normal menu
//         nav.classList.add("normalMenu");
//         nav.classList.remove("reducedMenu");
//     }
// }

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
