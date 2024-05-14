
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-slider', {
        type: 'fade',
        perPage: 1,
        autoplay: true,
        pauseOnHover: false,
        interval: 4000 // 4 seconds interval
    }).mount();
});

// Toggle mobile menu visibility
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
});
