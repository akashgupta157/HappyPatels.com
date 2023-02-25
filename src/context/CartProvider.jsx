import React, { createContext, useContext, useEffect, useState,useReducer } from 'react'
import { AuthContext } from './AuthProvider'
export const CartContext = createContext()
export  function CartProvider({children}) {
    const {auth}=useContext(AuthContext)
    const [cart,setcart]=useState([])
    let atc=(pin,text,size,sizea,img,name,quan)=>{
            cart.push({pin,text,size,sizea,img,name,quan})
    }
  return (
    <div>
        <CartContext.Provider value={{atc,cart}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}
