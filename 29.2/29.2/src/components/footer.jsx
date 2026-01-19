import { useSelector } from "react-redux";
function Footer() {
   const resultNumber = useSelector(state => state.todos.items.length);
    return (
     <div>
        <p>Всего: {resultNumber}</p>      
     </div>
    )
  }
  
  export default Footer;