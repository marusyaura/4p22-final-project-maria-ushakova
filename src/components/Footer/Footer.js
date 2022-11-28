import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../store/counter/counterSlice';
import './Footer.css';

function Footer() {

    return (
        <>
        <footer className='Footer'>
             <Link className="FooterLogoContainer" to="/">
    </Link>
        </footer>
       </> 
    )
}

export default Footer;