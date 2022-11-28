import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../store/counter/counterSlice';
import './Footer.css';

function Footer() {
   const dispatch = useDispatch();
    
    const onClick = () => {
        dispatch(increment());
} 
    return (
        <>
        <footer className='Footer'>
             <Link className="FooterLogoContainer" to="/">
    </Link>
    <h1>nhfkfkf</h1>
    <button onClick={onClick}>Прибавить</button>
        </footer>
       </> 
    )
}

export default Footer;