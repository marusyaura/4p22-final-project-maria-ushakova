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
        <>
        <h1>{ product.title }</h1>
        <img src={ product.image }></img>
        <p>{ product.detailDescription }</p>
        <p>{ product.rating }</p>
        <p>{ product.weight }</p>
        </>
    )
}

export default ProductPage;