import Form from "./form"
import { Provider } from "react-redux"
import store from '../redux/swapi/stor'
function Swapi() {
    return (
      <Provider store={store}>
      <div>
       <Form/>
      </div>
      </Provider>
    );
  }
  
  export default Swapi;
  