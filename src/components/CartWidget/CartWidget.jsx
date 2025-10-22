// Página de muestra del ícono del carrito de compra. Se muestra en toda la página. Linkea al componente CartDetailContainer con el render del body.
import { Link } from "react-router";

function CartWidget() {
    return <Link to="/cart">
        <img src="../src/assets/cart-img.png" className="img-cart" alt="img-cart"></img>
        <span>0</span>
    </Link> 
}

export default CartWidget;