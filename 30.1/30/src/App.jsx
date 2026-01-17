// import { useState } from 'react'
import Form from "./components/form"
import './App.css'
import { Provider } from "react-redux"
import store from './redux/stor'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
   <div>
    <Form/>
   </div>
   </Provider>
  )
}

export default App
