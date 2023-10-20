const desktopMenu = document.querySelector("#desktopMenu");
const mobileNav = document.querySelector("#mobileNav");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll(".mobileLinks");
const divHam = document.querySelector("#divHam");
const mobileLogoLink = document.querySelector("#mobileLogoLink");
//carousel
const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
const slides = document.querySelectorAll(".carousel-slide");

// JavaScript logic hack to remove id at the end of url
window.addEventListener(
    "hashchange",
    () => window.history.pushState({}, "", "/"),
    {}
);

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
    mobileMenu.classList.toggle("active");
};

mobileLogoLink.addEventListener("click", () => {
    divHam.classList.remove("xsign");
    mobileNav.classList.remove("active");
    mobileMenu.classList.remove("active");
});

divHam.addEventListener("click", () => {
    handleClick();
});

mobileLinks.forEach((n) => {
    n.addEventListener("click", () => {
        handleClick();
    });
});

//carousel
const slidesContainer = document.querySelector("#slides-container");
const slide = document.querySelector(".slide");
const prevSpan = document.querySelector("#span-prev");
const nextSpan = document.querySelector("#span-next");

nextSpan.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevSpan.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
