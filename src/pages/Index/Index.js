import './Index.css';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';


function IndexPage() {
  const [category, setCategory] = useState('all');  
  const [ products, isLoading ] = useSelector((state) => [ state.products.entities, state.products.loading ]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts());
        
    }, []);    

    const [ value, setValue ] = useState('');

    const filteredProducts = products.filter(item => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })

    const filtered = filteredProducts.filter(product => {
      if (category !== 'all' && product.category !== category) {
        return false;
      }
        return true;
      });

    return (
      <>
      <div>
      <div className="CategoryContainer"> 
            <button className="CategoryButton" onClick= {() => setCategory(`all`)}> ВСЕ</button>
                <button className="CategoryButton"  onClick= {() => setCategory(`Низкокалорийные`)}>
                Низкокалорийные
                </button>
                <button className="CategoryButton" onClick= {() => setCategory(`На День рождения`)}>
                На День рождения
                </button>
                <button className="CategoryButton" onClick= {() => setCategory('НЕторт')}>
                НЕторт
                </button>
                <button className="CategoryButton" onClick= {() => setCategory('Шоколад')}>
                Шоколад
                </button>
            </div>
      </div>
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
          !isLoading && filtered.map((item, index) => {
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