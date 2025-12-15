var form = $("#form");
var formInput = $("#formInput");
var formButton = $("#formButton");
var list = $("#list");
var spisok = JSON.parse(localStorage.getItem("todos")) || [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(spisok));
}
function renderTodos() {
  list.html("");
  $(".modal").remove();
  spisok.forEach(function (item, index) {
    var modalId = "todoModal-" + index;
    var buttonModal = $("<button>").addClass("modalStyle").attr("type", "button").attr("data-bs-toggle", "modal").attr("data-bs-target", "#" + modalId);
    var li = $("<li>").addClass("todo-item");
    var input = $("<input>").attr("type", "checkbox");
    var span = $("<span>").addClass("todo-item__description").text(item.text);
    var button = $("<button>").addClass("todo-item__delete").text("Видалити");
    var modal = $("<div>").addClass("modal fade").attr("id", modalId).attr("tabindex", "-1").attr("aria-labelledby", "exampleModalLabel").attr("aria-hidden", "true");
    var modalDialog = $("<div>").addClass("modal-dialog");
    var modalContent = $("<div>").addClass("modal-content");
    var modalHeader = $("<div>").addClass("modal-header");
    var modalH1 = $("<h1>").addClass("modal-title fs-5").attr("id", "exampleModalLabel").text("some");
    var modelButton = $("<button>").attr("type", "button").addClass("btn-close").attr("data-bs-dismiss", "modal").attr("aria-labelaria-label", "Close");
    var modalBody = $("<div>").addClass("modal-body").text("...");
    var modalFooter = $("<div>").addClass("modal-footer");
    var buttonClose = $("<button>").addClass("btn btn-secondary").attr("data-bs-dismiss", "modal").text("Close");
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
    var modals = $("\n      <div class=\"modal fade\" id=\"".concat(modalId, "\" tabindex=\"-1\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0437\u0430\u0434\u0430\u0447\u0443</h5>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\"></button>\n            </div>\n            <div class=\"modal-body\">\n              <p>").concat(item.text, "</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">\u0417\u0430\u043A\u0440\u0438\u0442\u0438</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "));
    $("body").append(modals);
    input.on("change", function () {
      item.done = input.prop("checked");
      saveTodos();
      renderTodos();
    });
    button.on("click", function () {
      spisok.splice(index, 1);
      saveTodos();
      renderTodos();
    });
  });
}
formButton.on("click", function (event) {
  event.preventDefault();
  var value = formInput.val();
  spisok.push({
    text: value,
    done: false
  });
  saveTodos();
  renderTodos();
  formInput.val("");
});
renderTodos();