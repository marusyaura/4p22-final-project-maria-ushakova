import './Index.css';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';


function IndexPage() {
    const [ products, isLoading ] = useSelector((state) => [ state.products.entities, state.products.loading ]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts());
        
    }, []);    

    const [ value, setValue ] = useState('');

    const filteredProducts = products.filter(item => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
      <>
      <div className="IndexMenucontainer">
      <Link to ={'feedback'}>
        <div className='IndexMenucontaineritems'>Форма обратной связи</div>
      </Link>

      <form className='SearchForm'>
        <input className='search__input' type="text" placeholder="Поиск по каталогу" 
        onChange={(event) => setValue(event.target.value)}/>

      </form>
      <Link to ={'enter'}>
        <div className='IndexMenucontaineritems'>Вход</div>
      </Link>
      </div>
        <div className="IndexCardcontainer">
        {
          !isLoading && filteredProducts.map((item, index) => {
            return  <Card key={index}
                          title={item.title}
                          description={item.previewDescription}
                          id={item.id}
                          image={item.image}
                          price={item.price} 
                          rating={item.rating}
                          weight={item.weight}
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