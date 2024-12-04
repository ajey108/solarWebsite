// Toggle mobile menu visibility
const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-y-full");
});

//Form validation

function validateForm() {
  let isValid = true;

  // Name validation
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Phone validation
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\d{10}$/; // Assuming 10-digit phone number
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  // Message validation
  const messageInput = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (messageInput.value.trim() === "") {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  return isValid;
}

//calcu

function calculateSolar() {
  // Inputs
  const roofSize = parseFloat(document.getElementById("roofSize").value);
  const powerConsumption = parseFloat(
    document.getElementById("powerConsumption").value
  );
  const monthlyBill = parseFloat(document.getElementById("monthlyBill").value);

  // Constants (based on Indian solar panel specifications)
  const avgPanelSize = 20; // in sq. ft. per panel
  const panelEfficiency = 1; // each panel generates approximately 1 kW per 100 sq. ft.
  const costPerKW = 50000; // approximate cost per kW of solar installation in INR
  const electricityRate = monthlyBill / powerConsumption; // Cost per kWh in INR

  // Calculations
  const requiredSolarCapacity = powerConsumption / 100; // convert kWh to kW
  const numPanels = Math.ceil(requiredSolarCapacity / panelEfficiency);
  const monthlySavings = electricityRate * powerConsumption;
  const yearlySavings = monthlySavings * 12;
  const totalInstallationCost = requiredSolarCapacity * costPerKW;
  const paybackPeriod = (totalInstallationCost / yearlySavings).toFixed(1);

  // Display Results
  document.getElementById("solarCapacity").innerText =
    requiredSolarCapacity.toFixed(2);
  document.getElementById("solarPanels").innerText = numPanels;
  document.getElementById("monthlySavings").innerText =
    monthlySavings.toFixed(2);
  document.getElementById("yearlySavings").innerText = yearlySavings.toFixed(2);
  document.getElementById("paybackPeriod").innerText = paybackPeriod;

  document.getElementById("results").classList.remove("hidden");
}

//faq

function toggleFAQ(faqId) {
  const faqElement = document.getElementById(faqId);
  const iconElement = document.querySelector(
    `#${faqId} + button span, button[onclick="toggleFAQ('${faqId}')"] span`
  );

  if (faqElement.classList.contains("hidden")) {
    faqElement.classList.remove("hidden");
    iconElement.textContent = "−";
  } else {
    faqElement.classList.add("hidden");
    iconElement.textContent = "+";
  }
}
