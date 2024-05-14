


// Toggle mobile menu visibility
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
});
