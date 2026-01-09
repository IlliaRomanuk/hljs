import { useSelector } from "react-redux";
import selector from "../redux/selector"
function Numbers() {
    const value = useSelector(selector.counter.value)
    return (
      <h1>value: {value}</h1>
    )
  }
  export default Numbers;