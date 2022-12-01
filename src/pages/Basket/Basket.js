import Card from '../../components/Card/Card';
import { useSelector } from "react-redux";
import './Basket.css';

function BasketPage() {
    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);
    
    return (
            <>
            <div className='BasketTotalcontainer'>
                <p>Итого к оплате: </p>
                { products.reduce((acc, product) => {
                if (basket[product.id]) {
                acc += product.price * basket[product.id]
                }
                return acc;
            }, 0) 
            }
            </div>
            <div className='Basketgoodscontainer'>
             { products
                     .filter((product) => basket[product.id])
                     .map((item, index) => {
                        return <Card key={index}
                                     title={item.title}
                                     description={item.previewDescription}
                                     id={item.id}
                                     image={item.image}
                                     price={item.price} 
                                     rating={item.rating}
                                     category={item.weight}
                                />
                                            }
                         )
             }
             </div>            
             <div className='MakeOrder'>
                <button onClick={(event) => console.log(basket)}>Оформить заказ</button>
             </div>
            </>
           )
}

export default BasketPage;