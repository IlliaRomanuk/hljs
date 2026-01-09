import { useDispatch } from "react-redux";
import Counter from "../redux/slice"
function Decrement() {
    const dispatch = useDispatch()
    const handelClick= () =>{
        dispatch(Counter.actions.decrement())
    }
    return (
      <button onClick={handelClick}>-</button>
    )
  }
  export default Decrement;