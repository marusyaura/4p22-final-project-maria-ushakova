import './Card.css';
import IconButton from '../IconButton/IconButton';
import { Link } from "react-router-dom";


function Card({ image, rating, weight, title, description, price, id, onClick = () => {} }) {
    return (
       <Link to={`product/${id}`} className="Card">
         <img className="Card-img" src={ image }></img>
         <div className="Card-container">
             <h2 className="Card-title">{ title }</h2>
             <div className="Card-rating">{ rating }</div>
             <p className="Card-description">{ description }</p>
             <div className="Card-weight">{ weight }</div>
             <div className="Card-price common-price">{ price }</div>
             <IconButton />
         </div> 
       </Link>  
          )

};

export default Card