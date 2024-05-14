


// Toggle mobile menu visibility
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
});



//Form validation

function validateForm() {
    let isValid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
    } else {
        nameError.classList.add('hidden');
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.remove('hidden');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }

    // Phone validation
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10}$/; // Assuming 10-digit phone number
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.classList.remove('hidden');
        isValid = false;
    } else {
        phoneError.classList.add('hidden');
    }

    // Message validation
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim() === '') {
        messageError.classList.remove('hidden');
        isValid = false;
    } else {
        messageError.classList.add('hidden');
    }

    return isValid;
}