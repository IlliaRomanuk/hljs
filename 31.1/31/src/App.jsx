import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoForm from "./components/TodoForm";
import ItemsList from "./components/ItemsList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Todo</h1>
      <TodoForm />
      <ItemsList />
    </Provider>
  );
};

export default App;
