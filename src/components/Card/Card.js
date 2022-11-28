import './Card.css';
import IconButton from '../IconButton/IconButton';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';



function Card({ image, rating, weight, title, description, price, id }) {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.basket);


   const onBuyClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addToBasket(id));
  
  }

   const onDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeFromBasket(id));
   }
  
  return (
    <>
       <div className="Card">
         <Link to={`product/${id}`} className="Card-container">
             <img className="Card-img" src={ image }></img>
             <h2 className="Card-title">{ title }</h2>
             <div className="Card-rating">{ rating }</div>
             <p className="Card-description">{ description }</p>
             <div className="Card-weight">{ weight }</div>
             <div className="Card-price common-price">{ price }</div>
         </Link>
             {!products[id] && <IconButton onClick={onBuyClick} />}
             {products[id] && (
              <div className='ButtonCounterContainer'>
                {<button className='ButtonCounter' onClick={onBuyClick}>+</button>}
                {products[id]}
                {<button className='ButtonCounter' onClick={onDeleteClick}>-</button>}
              </div>
             )}
     </div> 
     </>    
          )

};

export default Card;