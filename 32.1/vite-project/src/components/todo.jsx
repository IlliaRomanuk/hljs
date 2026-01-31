import { Provider } from "react-redux";
import { store } from "../redux/store";
import TodoForm from "./TodoForm";
import ItemsList from "./ItemsList";

function Todo() {
    return (
      <Provider store={store}>
      <h1>Todo</h1>
      <TodoForm />
      <ItemsList />
    </Provider>
    );
  }
  
  export default Todo;
  