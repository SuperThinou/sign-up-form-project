const form = document.querySelector("form");
const tel = document.querySelector("#tel");
const ctaBtn = document.querySelector("#ctaBtn");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

tel.addEventListener("input", () => {
  let value = tel.value.replace(/\D/g, "");

  if (value.startsWith("33")) {
    value = "0" + value.slice(2);
  }

  value = value.slice(0, 10);

  tel.value = value.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
});

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();

    // Prevent from having more than 1 error message
    const existingError = document.querySelector(".password-error");
    if (existingError) existingError.remove();

    const error = document.querySelector("#passwordError");
    passwordError.style.display = "block";
  }
});
