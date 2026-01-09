import { useDispatch } from "react-redux";
import Counter from "../redux/slice"
function Increment() {
    const dispatch = useDispatch()
    const handelClick= () =>{
        dispatch(Counter.actions.increment())
    }
    return (
      <button onClick={handelClick}>+</button>
    )
  }
  export default Increment;