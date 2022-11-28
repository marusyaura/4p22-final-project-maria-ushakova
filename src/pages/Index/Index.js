import './Index.css';
import Card from '../../components/Card/Card';
import IconButton from '../../components/IconButton/IconButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
    const [ products, setProducts ] = useState([]);
    //let products = [];
    
    useEffect(() => {
        fetch('https://api.npoint.io/cb648043f49f676ca672')
          .then((response) => response.json())
          .then((result) => {
           setProducts(result.products);
           
          })
    }, []);    

    return (
      <>
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