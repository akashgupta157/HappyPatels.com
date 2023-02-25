import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthProvider'
export const CartContext = createContext()
export  function CartProvider({children}) {
    const {auth}=useContext(AuthContext)
    const [cart,setcart]=useState([])
    let atc=(pin,text,size,sizea,img,name)=>{
            cart.push({pin,text,size,sizea,img,name})
    }
  return (
    <div>
        <CartContext.Provider value={{atc,cart}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}
