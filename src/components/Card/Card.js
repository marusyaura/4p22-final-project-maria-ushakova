import './Card.css';
import IconButton from '../IconButton/IconButton';

function Card(props) {
    return (
       <div className="Card">
         <img className="Card-img" src={ props.image }></img>
         <div className="Card-container">
             <h2 className="Card-title">{ props.title }</h2>
             <div className="Card-rating">{ props.rating }</div>
             <p className="Card-description">{ props.description }</p>
             <div className="Card-weight">{ props.weight }</div>
             <div className="Card-price common-price">{ props.price }</div>
             <IconButton />
         </div>
       </div>   
          )

};

export default Card