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
  email: false,
};
const formObj = [
  {
    selector: userName,
    pattern: "",
    errorSelector: nameText,
    element: "name",
  },
  {
    selector: userMessage,
    pattern: /\w{5,}/,
    errorSelector: nameMessage,
    element: "message",
  },
  {
    selector: userNumber,
    pattern: /^\+380\d{9}$/,
    errorSelector: nameNumber,
    element: "number",
  },
  {
    selector: userEmail,
    pattern: /\w{1,}@\w{5}\.\w{3}/,
    errorSelector: nameEmail,
    element: "email",
  },
];
formObj.forEach(({ selector, pattern, errorSelector, element }) => {
  selector.addEventListener("input", function (event) {
    const value = event.target.value;
    if (pattern.test(value)) {
      errorSelector.style.display = "none";
      result[element] = true;
    } else {
      errorSelector.style.display = "block";
      result[element] = false;
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!result.name || !result.message || !result.number || !result.email) {
    console.log("error: not all fields are valid");
  } else {
    console.log("success!");
  }
});
