import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  fetchStart,
  fetchAdd,
  addItem,
  deleteTodo,
  fetchItems,
  deleteItem,
  checkTodoRequest,
  checkItem,
  editTodoStart,
  editTodoSuccess,
} from "./slices/todoSlice";
import API from "../constants/constants";
function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    return response.json();
  });
}

//Worker
function* fetchTodoSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_LIST);

    yield put(fetchItems(todos));
  } catch (e) {
    console.log("Error", e);
  }
}
function* addTodoSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_LIST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: action.payload }),
    });

    yield put(addItem(todo));
  } catch (e) {
    console.log("Error", e);
  }
}
function* deleteTodoSaga(action) {
  try {
    const deletedTodo = yield call(
      fetchHelper,
      `${API.URL_LIST}/${action.payload}`,
      {
        method: "DELETE",
      }
    );

    yield put(deleteItem(deletedTodo));
  } catch (e) {
    console.log("Error", e);
  }
}
function* checkedTodoSaga(action) {
  try {
    const { id, name, checked } = action.payload;
    const checkedTodo = yield call(fetchHelper, `${API.URL_LIST}/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        checked: !checked,
      }),
    });

    yield put(checkItem(checkedTodo));
  } catch (e) {
    console.log("Error", e);
  }
}

function* editTodoSaga(action) {
  try {
    const { id, name, checked } = action.payload;

    const updatedTodo = yield call(fetchHelper, `${API.URL_LIST}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, checked }),
    });

    yield put(editTodoSuccess(updatedTodo));
  } catch (e) {
    console.error("Edit error", e);
  }
}
//Watcher
function* watchFetchTodos() {
  yield takeEvery(fetchStart.type, fetchTodoSaga);
}
function* watchTodoAdd() {
  yield takeEvery(fetchAdd.type, addTodoSaga);
}
function* watchDelete() {
  yield takeEvery(deleteTodo.type, deleteTodoSaga);
}
function* watchCheck() {
  yield takeEvery(checkTodoRequest.type, checkedTodoSaga);
}

function* watchEditTodo() {
  yield takeEvery(editTodoStart.type, editTodoSaga);
}
export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchTodoAdd(),
    watchDelete(),
    watchCheck(),
    watchEditTodo(),
  ]);
}
