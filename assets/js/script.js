
// NAVIGATION SECTION START

// Get the menu button, navigation links container, and menu button icon
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

// Toggle navigation links and change menu icon on menu button click
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// close navigationl links & reset menu icon when a link is clicked


navLinks.addEventListener("click", (e) => { 
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
//                 SEARCH BUTTON IN THE NAVIGATION

const navSearch = document.getElementById("nav-search");

//Toggle search button open class on click

navSearch.addEventListener("click",(e) =>{
    navSearch.classList.toggle("open");
}
)


// NAVIGATION SECTION END


//SWIPER SECTION START



//Initialize swiper with looping & autoplay configuration

const swiper = new Swiper(".swiper", {
    loop:true,
    autoplay: {
        delay:2000,
        disableOnInteraction:false,
    },
});
//SWIPER SECTION START


//SCROLL REVEAL

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Reveal elements with ScrollReveal
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right"
});

ScrollReveal().reveal(".header__content div", {
    duration: 1000,
    delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".about__card", {
    duration:1000,
    interval: 500,
    delay :500,
});

