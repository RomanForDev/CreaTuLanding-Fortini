import { createContext, useState } from 'react';
const cartContext = createContext({ cart: [] });

export function CartContextProvider( { children }  ){
  const [ cartItems, setCartItems ] = useState( [] )

  // * CRUD -> create read update delete
  function addItem(item){    
    const newCartItems = structuredClone(cartItems)
    newCartItems.push(item)
    setCartItems(newCartItems)     
  }

  function removeItem(id){
    /* Eliminar el producto con ese ID del context */
  }

  function clearCart(){
    console.log("Not implemented")
  }

  function countItemsInCart(){
    let totalItems = 0;
    cartItems.forEach( (item) => totalItems += item.quantity)
    return totalItems;
    // array.reduce()
  }

  function getTotalPrice(){
    // calcular el costo total de la compra
  }

  return(
    <cartContext.Provider value={ { cart: cartItems, addItem, removeItem, clearCart, countItemsInCart}}>
        { children }
    </cartContext.Provider>
  )
}

export default cartContext;