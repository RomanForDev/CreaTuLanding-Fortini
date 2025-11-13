// Render del path del carrito

// function CartDetailContainerr() {
//     return(
//         <div>
//             <h3>Tu carrito:</h3>
//             <h4>Total a pagar: </h4>
//         </div>
//     )
// }

// export default CartDetailContainerr;

import { useContext, useState, useEffect } from "react";
import cartContext from "../../context/cartContext";
import { createBuyOrder } from "../../data/firestoreService";
import CheckoutForm from "./CheckoutForm";
import Swal from "sweetalert2";

function CartDetailContainer(){
    const { cart, clearCart, removeItem, getTotalPrice } = useContext(cartContext);
    const [orderCreated, setOrderCreated] = useState(false);
    // const { removeItem } = useContext(cartContext);

    async function handleCheckout(formData){
        const orderData= {
        buyer: formData,
        cart,
        total: 999,
        date: new Date(),
        }

    const response = await createBuyOrder(orderData);
    alert(`Gracias por tu compra! este es el id de tu orden de compra: ${response.id}`)
    setOrderCreated(response.id)
    clearCart();
    }
    console.log(cart);
    

    if(orderCreated){
        return <section>
        <h2>Gracias por tu compra!</h2>
        <p>Este es el id: {orderCreated}</p>
        </section>
    }

    function delToCart(item){
        removeItem(item.id)
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Producto eliminado del carrito!",
            showConfirmButton: false,
            timer: 800
        })
        }

    return <section>
        <h1>Tu carrito de compras</h1>
        <div>
        { cart.map( item => <div key={item.id}>
            <h3>{item.title}</h3>
            <img width="150" src={"/" + item.image}></img>
            <p>$ {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => delToCart(item)}>Eliminar</button>
        </div>)}
        </div>
        <hr/>
        <div>
        Total de tu compra: ${getTotalPrice()}
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>
    </section>
}

export default CartDetailContainer;