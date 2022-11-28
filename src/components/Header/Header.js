import './Header.css';
import { useSelect } from '@mui/base';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../store/counter/counterSlice';

function Header() {
const basket = useSelector((state) => state.basket);

    return (
        <>
    <header className="Header">
    <Link className="HeaderLogoContainer" to="/">
    </Link>
         <div className="HeaderContainer">
            <h1 className="Header-basketCounter">{ Object.values(basket).reduce((acc, item) => {
                acc += item;

                return acc;
            }, 0) }</h1>
         </div>
    </header>  
      </>
    )
}

export default Header;