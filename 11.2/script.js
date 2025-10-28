const text = document.querySelector(".text");
const button = document.querySelector("button");
function functionRedBlack() {
    text.classList.toggle('red');
}
button.addEventListener("click", functionRedBlack);