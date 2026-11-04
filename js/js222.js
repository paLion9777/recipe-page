const navigation = document.querySelector('.navigation');

const makeSticky = () => {
    if (window.pageYOffset >= 20) {
        navigation.classList.add("fixed");
        console.log("fixed");
    } else {
        navigation.classList.remove("fixed");
    }
    console.log(window.pageYOffset);
};

window.onscroll = makeSticky;

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            mobileMenu.classList.remove('open');
        }
    });
});