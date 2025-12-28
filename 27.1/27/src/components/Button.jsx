import { useContext} from "react";
import { ThemeContext, themes } from "./context";
const Button = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeColor = () => {
    setTheme(theme.color === "black" ? themes.black : themes.white);
  };
  return <button onClick={changeColor}>color</button>;
};
export default Button;
