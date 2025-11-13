import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
const cartContext = createContext({ cart: [] });

export function CartContextProvider( { children }  ){
  const [ cartItems, setCartItems ] = useState( [] )

  // * CRUD -> create read update delete
  function addItem(item){    
    const newCartItems = structuredClone(cartItems)
    const itemIndex = newCartItems.findIndex( (prod) => prod.id === item.id )
    if (itemIndex !== -1) {
      newCartItems[itemIndex].quantity += item.quantity;
    } else {
      newCartItems.push(item);
    }
    setCartItems(newCartItems)     
  }

  function removeItem(id){
    const newCartItems = structuredClone(cartItems)
    const itemIndex = newCartItems.findIndex( (prod) => prod.id === id )
    if (itemIndex !== -1) {
      newCartItems[itemIndex].quantity -= 1;
      if (newCartItems[itemIndex].quantity === 0) {
        newCartItems.splice(itemIndex, 1);
      }
    }
    setCartItems(newCartItems)
  }

  function clearCart(){
    setCartItems([]);
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Carro vaciado!",
      showConfirmButton: false,
      timer: 800
  })
  }

  function countItemsInCart(){
    let totalItems = 0;
    cartItems.forEach( (item) => totalItems += item.quantity)
    return totalItems;
    // array.reduce()
  }

  function getTotalPrice(){
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  
  return(
    <cartContext.Provider value={ { cart: cartItems, addItem, removeItem, clearCart, countItemsInCart, getTotalPrice}}>
        { children }
    </cartContext.Provider>
  )
}

export default cartContext;

