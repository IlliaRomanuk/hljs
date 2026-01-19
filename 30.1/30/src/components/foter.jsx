import Button from "@mui/material/Button";
import { useDispatch } from "react-redux"
import {clean} from "../redux/slice"
function Footer() {
  const dispatch = useDispatch();

  
    return (
      <Button variant="outlined" onClick={() => dispatch(clean())}>
        Clear
      </Button>
    );
  }
  
  export default Footer;