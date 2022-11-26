import { useEffect, useState, useParams } from 'react';
import './Product.css';

function ProductPage() {
    const { userId } = useParams();
    const [ products, setProducts ] = useState([]);

useEffect(() => {

    (async () => {
    const response = await fetch(`/4p22-final-project-maria-ushakova/${userId}.json`);
    const result = await response.json();

    setProducts(result);
    })();

}, []);

    return (
        <>
        <h1>{ products.title }</h1>
        <img src={ products.image }></img>
        </>
    )
}

export default ProductPage;