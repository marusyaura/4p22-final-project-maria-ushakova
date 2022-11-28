import './Index.css';
import Card from '../../components/Card/Card';
import IconButton from '../../components/IconButton/IconButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { decrement } from '../../store/counter/counterSlice';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../../store/basket/basketSlice';

function IndexPage() {
    const [ products, setProducts ] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch('https://api.npoint.io/cb648043f49f676ca672')
          .then((response) => response.json())
          .then((result) => {
           setProducts(result.products);
           
          })
    }, []);    

    return (
      <>
      <button onClick={() => dispatch(clearBasket())}>Очистить корзину</button>
        <div className="Index-container">
        {
          products.map((item, index) => {
            return  <Card key={index}
                          title={item.title}
                          description={item.previewDescription}
                          id={item.id}
                          image={item.image}
                          price={item.price} 
                          rating={item.rating}
                          category={item.weight}
                     />
          })
        }
        <Link></Link>
      </div>
      </>
    )}
export default IndexPage;