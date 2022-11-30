import './Index.css';
import Card from '../../components/Card/Card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';


function IndexPage() {
    const [ products, isLoading ] = useSelector((state) => [ state.products.entities, state.products.loading ]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts());
        
    }, []);    

    return (
      <>
      <div className="IndexMenucontainer">
      </div>
        <div className="IndexCardcontainer">
        {
          !isLoading && products.map((item, index) => {
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
        {
          isLoading && (
            <h2>Загрузка...</h2>
          )
        }
        <Link></Link>
      </div>
      </>
    )};

export default IndexPage;