import CartWidget from './CartWidget';

function NavBar() {
    return <nav>
            <img src="./src/assets/react.svg" alt="logo" className="logo" />
        <li className='navlist'>
            <h3 className='nav-btn'>Productos</h3>
            <h3 className='nav-btn'>Sobre Nosotros</h3>
            <h3 className='nav-btn'>Contactanos!</h3>
        </li>
        {/* Render del carrito con su número */}
        <CartWidget />
    </nav>
}
export default NavBar;