import './Index.css';
import Card from '../../components/Card/Card';
import IconButton from '../../components/IconButton/IconButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function IndexPage() {
    const [ products, setProducts ] = useState([]);
    //let products = [];
    
    useEffect(() => {
        fetch('/4p22-final-project-maria-ushakova/Cakes.json')
          .then((response) => response.json())
          .then((result) => {
           setProducts(result);
           //products = [...result];
           //console.log(products);
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
                          weight={item.weight} />
          })
        }
        <Link></Link>
      </div>
      </>
    )}
export default IndexPage;