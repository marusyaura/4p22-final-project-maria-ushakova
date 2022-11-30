import './Header.css';
import { useSelect } from '@mui/base';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../store/counter/counterSlice';
import BasketButton from '../BasketButton/BasketButton'
import { clearBasket } from '../../store/basket/basketSlice';
import ClearBasketButton from '../ClearBasketButton/ClearBasketButton'

function Header() {
const basket = useSelector((state) => state.basket);
const dispatch = useDispatch();

    return (
        <>
    <header className="Header">
    <Link to="/">
    </Link>
         <div className="HeaderContainer">
            <div className="HeaderLogoContainer">
            <img className="HeaderLogo" alt="logo_sweetmarselina" src="/4p22-final-project-maria-ushakova/logo.png"></img>
            </div> 
            <div className="HeaderNameContainer">
              <h2>Домашний кондитер</h2>
              <h2>Мария Ушакова</h2>
              <h2>Sweet-Marselina</h2>
            </div>
            <div className="HeaderBasketContainer">
              <div className="HeaderShoppingContainer">
                <Link to ={'basket'}>
                <BasketButton />
                </Link>
                <h1 className="HeaderBasketCounter">
                  { Object.values(basket).reduce((acc, item) => {
                  acc += item;

                  return acc;
                }, 0) }
                 </h1>
               </div>
               <div>
                 <ClearBasketButton onClick={() => dispatch(clearBasket())} />
               </div> 
              </div>
         </div>
    </header>  
      </>
    )
}

export default Header;