import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { getInfo } from "../redux/slice";

function ButtonClick({ inputRef }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const url = inputRef.current?.value; 
    if (!url) {
      alert("Введите ссылку!");
      return;
    }
    dispatch(getInfo(url));
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      Fetch
    </Button>
  );
}

export default ButtonClick;
