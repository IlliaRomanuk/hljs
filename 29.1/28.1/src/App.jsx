import './App.css'
import Numbers from "./components/number"
import Increment from "./components/buttonIncrement"
import Decrement from "./components/buttonDecrement"
import { Provider } from 'react-redux'
import store from "./redux/store"
function App() {
  return (
    <>
    <Provider store={store}>
    <Numbers/>
    <Increment/>
    <Decrement/>
    </Provider>
    </>
  )
}

export default App
