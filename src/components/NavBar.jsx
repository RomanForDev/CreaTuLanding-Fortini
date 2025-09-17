import CartWidget from './CartWidget';

function NavBar() {
    return <nav>
            <img src="./src/assets/react.svg" alt="logo" className="logo" />
        <ul>
            <h3>Productos</h3>
            <h3>Sobre Nosotros</h3>
            <h3>Contactanos!</h3>
        </ul>
        {/* Render del carrito con su número */}
        <CartWidget />
    </nav>
}
export default NavBar;