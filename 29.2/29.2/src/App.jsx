import './App.css'
import Forme from './components/form'
import store  from './redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <Forme/>
    </Provider>
  )
}

export default App
