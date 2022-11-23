import './App.css';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import { useEffect, useState } from 'react';

function App() {
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
    <div className="App">
      <h1>Ассортимент Sweet-Marselina</h1>
      <div className="App-container">
        {
          products.map((item, index) => {
            return  <Card key={index}
                          title={item.title}
                          description={item.previewDescription}
                          image={item.image}
                          price={item.price} />
          })
        }
      </div>
      <div className="App-newsletter">
        <h2>Подписаться на новости компании</h2>
        <input placeholder="email" type="email"></input>
        <Button text="Подписаться"/>
      </div>
    </div>
  );
};

export default App