import IconButton from '../../components/IconButton/IconButton';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../store/basket/basketSlice';


function ProductPage() {
    const { userId } = useParams();
    const [ product, setProduct ] = useState({});
   
   useEffect(() => {
   
       const response = fetch('https://api.npoint.io/cb648043f49f676ca672')
       .then((response) => response.json())
       .then((result) => {
        setProduct(result.products.filter(product => product.id == userId)[0]);
       
       })

   
   }, [])
   
   const dispatch = useDispatch();
   const products = useSelector((state) => state.basket);


   const onBuyClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addToBasket(userId));
  
  }

   const onDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeFromBasket(userId));
   }
  
    return (
        <div className='ProductPage'>
        <h1 className='ProductTitle'>{ product.title }</h1>
        <img className='ProductImage'src={ product.image }></img>
        <p className='ProductRating'>{ product.rating }</p>
        <p className='ProductWeight'>{ product.weight }</p> 
        <p className='ProductDescription'>{ product.detailDescription }</p>
            {!products[userId] && <IconButton onClick={onBuyClick} />}
            {products[userId] && (
                <div className='ButtonCounterContainer'>
                    {<button className='ButtonCounter' onClick={onBuyClick}>+</button>}
                    {products[userId]}
                    {<button className='ButtonCounter' onClick={onDeleteClick}>-</button>}
                </div>
                             )}
   </div> 
   )

}

export default ProductPage;