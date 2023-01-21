const emailInput = document.querySelector("input[type='email']");
const error = document.querySelector("[data-error]");
const button = document.querySelector("[data-button]");

function ValidateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    error.innerHTML = "Valid email address!";
  } else {
    error.innerHTML = "Invalid email address!";
  }
}

button.addEventListener("click", () => {
  ValidateEmail();
});
