import Card from '../../components/Card/Card';
import { useSelector } from "react-redux";
import './Basket.css';

function BasketPage() {
    const products = useSelector(state => state.products.entities);
    const basket = useSelector(state => state.basket);

    const makeOrder = (event) => {
        event.preventDefault();
        const productsInBasketIds = Object.keys(basket);
        const result = products
            .filter(product => productsInBasketIds.includes(String(product.id)))
            .map(product => ({
                ...product,
                count: basket[product.id]
            }));
        console.log(result);
    }
    
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
            <div className='MakeOrder'>
                <button className='MakeOrderButton' onClick={makeOrder}>Оформить заказ</button>
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
             
            </>
           )
}

export default BasketPage;