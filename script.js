const desktopMenu = document.querySelector("#desktopMenu");
const mobileNav = document.querySelector("#mobileNav");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll(".mobileLinks");
const divHam = document.querySelector("#divHam");
const mobileLogoLink = document.querySelector("#mobileLogoLink");

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
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const mySlides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
const dot = document.querySelector(".dot");

let currentIndex = 0;

function showSlide(index) {
    mySlides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    mySlides[index].classList.add("active");
    dots[index].classList.add("active");
}

dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
        showSlide(i);
        currentIndex = i;
    })
);

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1) % mySlides.length;
    showSlide(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % mySlides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);
