import { NavLink } from 'react-router-dom';
import Button from './Button';
const Header = () =>{
return(
    <div className="header">
        <p className="logo">logo</p>
        <ul className="listPages">
            <li>
                <NavLink className="link" to="/">Головна</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/contact">Контакти</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/about">Про мене</NavLink>
            </li>
            <li><Button/></li>
        </ul>
    </div>
);
};
export default Header;