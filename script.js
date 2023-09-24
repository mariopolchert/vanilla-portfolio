window.onscroll = () => {
    scrollingMenu();
};
const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");

function scrollingMenu() {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        // reduced menu
        nav.classList.remove("normalMenu");
        nav.classList.add("reducedMenu");
        // logo.src = "http://placehold.co/30x30";
    } else {
        // normal menu
        nav.classList.add("normalMenu");
        nav.classList.remove("reducedMenu");
        // logo.src = "http://placehold.co/100x100";
    }
}
