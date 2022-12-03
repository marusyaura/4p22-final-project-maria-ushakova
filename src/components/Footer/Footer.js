import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../store/counter/counterSlice';
import './Footer.css';

function Footer() {

    return (
        <>
        <footer className='Footer'>
             <Link className="FooterLogoContainer" to="/">
                <div className='Contactscontainer'></div>
                <h2>Контакты</h2>
                <div></div>
             </Link>
        </footer>
       </> 
    )
}

export default Footer;