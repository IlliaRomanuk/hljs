const form = document.querySelector("form");
const userName = document.querySelector("#name");
const userMessage = document.querySelector("#message");
const userNumber = document.querySelector("#number");
const userEmail = document.querySelector("#email");
const nameText = document.querySelector("#nameText");
const nameMessage = document.querySelector("#nameMessage");
const nameNumber = document.querySelector("#nameNumber");
const nameEmail = document.querySelector("#nameEmail");
const result = {
    name: false,
    message: false,
    number: false,
    email: false
};
userName.addEventListener("change", function (event) {
  const value = event.target.value;
  if (value === "") {
    nameText.style.display = "block";
    result.name = false;
  }
  else{
    result.name = true;
    nameNumber.style.display = "none";
  }
});
userMessage.addEventListener("change", function (event) {
  const value = event.target.value;
  const regex = /\w{5,}/;
  if (regex.test(value)) {
    result.message = true
    nameNumber.style.display = "none";
  } else{
    nameMessage.style.display = "block";
    result.message = false;
  }
});
userNumber.addEventListener("change", function (event) {
  const value = event.target.value;
  const regex = /^\+380\d{9}$/;
  if (regex.test(value)) {
    result.number = true;
    nameNumber.style.display = "none";
  } else {
    nameNumber.style.display = "block";
    result.number = false;
  }
});
userEmail.addEventListener("change", function (event) {
  const value = event.target.value;
  const regex = /\w{1,}@\w{5}\.\w{3}/;
  if (regex.test(value)) {
    result.email = true;
    nameNumber.style.display = "none";
  } else {
    nameEmail.style.display = "block";
    result.email = false;
  }
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!result.name || !result.message || !result.number || !result.email) {
    console.log("error: not all fields are valid");
  } else {
    console.log("success!");
  }
});
