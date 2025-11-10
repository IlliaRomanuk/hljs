const form = document.querySelector("#form");
const formInput = document.querySelector("#formInput");
const formButton = document.querySelector("#formButton");
const list = document.querySelector("#list");
let spisok = JSON.parse(localStorage.getItem("todos")) || [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(spisok));
}
function renderTodos() {
  list.innerHTML = "";
  spisok.forEach((item, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");
    input.type = "checkbox";
    input.checked = item.done;
    span.textContent = item.text;
    button.textContent = "Видалити";
    li.classList.add("todo-item");
    if (item.done) {
      li.classList.add("todo-item--checked");
    }
    span.classList.add("todo-item__description");
    button.classList.add("todo-item__delete");
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    input.addEventListener("change", () => {
      item.done = input.checked;
      saveTodos();
      renderTodos();
    });
    button.addEventListener("click", () => {
      spisok.splice(index, 1);
      saveTodos();
      renderTodos();
    });
  });
}
formButton.addEventListener("click", (event) => {
  event.preventDefault();
  const value = formInput.value;
  spisok.push({ text: value, done: false });
  saveTodos();
  renderTodos();
  formInput.value = "";
});
renderTodos();