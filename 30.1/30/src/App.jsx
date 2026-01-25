import Form from "./components/form"
import './App.css'
import { Provider } from "react-redux"
import store from './redux/stor'
function App() {
  return (
    <Provider store={store}>
   <div>
    <Form/>
   </div>
   </Provider>
  )
}

export default App
