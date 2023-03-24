import { createContext } from 'react';
import { useState } from "react";

export const CartContext = createContext([])

//Ci dessous : Un composant
export default function CartContextProvider ({children}) {
  const [myCart, setMyCart] = useState([])

  function addToCart(product){
    setMyCart([...myCart, product])
  }

  return <CartContext.Provider value={{myCart, setMyCart, addToCart}}>
    {children}
  </CartContext.Provider>
}