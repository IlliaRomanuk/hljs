const form = $("#form");
const formInput = $("#formInput");
const formButton = $("#formButton");
const list = $("#list");
let spisok = [];
function renderTodos() {
  list.html("");
  $(".modal").remove();
  spisok.forEach((item, index) => {
    const modalId = "todoModal-" + index;
    const buttonModal = $("<button>")
    .addClass("modalStyle")
      .attr("type", "button")
      .attr("data-bs-toggle", "modal")
      .attr("data-bs-target", "#" + modalId);
    const li = $("<li>").addClass("todo-item");
    const input = $("<input>").attr("type", "checkbox");
    const span = $("<span>").addClass("todo-item__description").text(item.text);
    const button = $("<button>").addClass("todo-item__delete").text("Видалити");
    const modal = $("<div>")
      .addClass("modal fade")
      .attr("id", modalId)
      .attr("tabindex", "-1")
      .attr("aria-labelledby", "exampleModalLabel")
      .attr("aria-hidden", "true");
    const modalDialog = $("<div>").addClass("modal-dialog");
    const modalContent = $("<div>").addClass("modal-content");
    const modalHeader = $("<div>").addClass("modal-header");
    const modalH1 = $("<h1>")
      .addClass("modal-title fs-5")
      .attr("id", "exampleModalLabel")
      .text("some");
    const modelButton = $("<button>")
      .attr("type", "button")
      .addClass("btn-close")
      .attr("data-bs-dismiss", "modal")
      .attr("aria-labelaria-label", "Close");
    const modalBody = $("<div>").addClass("modal-body").text("...");
    const modalFooter = $("<div>").addClass("modal-footer");
    const buttonClose = $("<button>")
      .addClass("btn btn-secondary")
      .attr("data-bs-dismiss", "modal")
      .text("Close");
    input.prop("checked", item.done);
    if (item.done) {
      li.addClass("todo-item--checked");
    }
    buttonModal.append(span);
    li.append(input, buttonModal, button);
    list.append(li);
    modalHeader.append(modalH1, modelButton);
    modalFooter.append(buttonClose);
    modalContent.append(modalHeader, modalBody, modalFooter);
    modalDialog.append(modalContent);
    modal.append(modalDialog);

    const modals = $(`
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Інформація про задачу</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>${item.text}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `);
    $("body").append(modals);
    })
  }

function loadTodos() {
  fetch("http://localhost:8080/todos")
    .then(res => res.json())
    .then(data => {
      spisok = data;
      renderTodos();
    });
}


formButton.on("click", function (event) {
  event.preventDefault();

  const value = formInput.val();

  fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: value,
      done: false,
    }),
  }).then(() => {
    loadTodos();
    formInput.val("");
  });
});


button.on("click", () => {
  fetch("http://localhost:8080/todos/:id" + item._id, {
    method: "DELETE",
  }).then(loadTodos);
});


input.on("change", () => {
  fetch("http://localhost:8080/todos/:id" + item._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      done: input.prop("checked"),
    }),
  }).then(loadTodos);
});


loadTodos();
