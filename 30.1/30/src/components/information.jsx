
import { useSelector } from "react-redux";
function Info() {

  
  const items= useSelector((state) => state.todos.items);
  return (
    <div>
         {items.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        items.map((item) => (
          <p key={item.id}>{item.name ?? JSON.stringify(item)}</p>
        ))
      )}
    </div>
  );
}

export default Info;
