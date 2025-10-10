import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return <nav>
            <img src="./src/assets/react.svg" alt="logo" className="logo" />
        <li className='navlist'>
            <h3 className='nav-btn'><a href="/">Productos</a></h3>
            <h3 className='nav-btn'><a href="/about">Sobre Nosotros</a></h3>
            <h3 className='nav-btn'><a href="/contact">Contactanos!</a></h3>
        </li>
        {/* Render del carrito con su número */}
        <CartWidget />
    </nav>
}
export default NavBar;