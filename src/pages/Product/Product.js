import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function ProductPage() {
    const { userId } = useParams();
    const [ product, setProduct ] = useState({});
   
   useEffect(() => {
   
       const response = fetch('https://api.npoint.io/cb648043f49f676ca672')
       .then((response) => response.json())
       .then((result) => {
        setProduct(result.products.filter(product => product.id == userId)[0]);
       
       })

   
   }, []);
   
    return (
        <div className='ProductPage'>
        <h1 className='ProductTitle'>{ product.title }</h1>
        <img className='ProductImage'src={ product.image }></img>
        <p className='ProductRating'>{ product.rating }</p>
        <p className='ProductWeight'>{ product.weight }</p> 
        <p className='ProductDescription'>{ product.detailDescription }</p>
        </div> 
    )
}

export default ProductPage;