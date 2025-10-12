import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router';

function NavBar() {
    return <nav>
        <Link to="/"><img src="./src/assets/react.svg" alt="logo" className="logo"></img></Link>
        <li className='navlist'>
            <h3 className='nav-btn'><Link to="/products">Productos</Link></h3>
            <h3 className='nav-btn'><Link to="/about">Sobre Nosotros</Link></h3>
            <h3 className='nav-btn'><Link to="/contact">Contactanos!</Link></h3>
        </li>
        {/* Render del carrito con su número */}
        <CartWidget />
    </nav>
}
export default NavBar;