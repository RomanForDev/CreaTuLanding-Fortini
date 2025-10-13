// Página de muestra del carrito de compra.
import { Link } from "react-router";

function CartWidget() {
    return <Link to="*"> {/*Acá va a linkear al componente del carro, este es el de la imagen que se muestra en navbar y tiene el número con la cantidad.*/}
        <img src="../src/assets/cart-img.png" className="img-cart" alt="img-cart"></img>
        <span>0</span>
    </Link> 
}

export default CartWidget;