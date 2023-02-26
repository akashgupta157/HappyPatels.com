import React, { useContext ,useState} from 'react'
import { CartContext } from '../context/CartProvider'
import '../CSS/Payment.css'
// import { useCreditCardValidator, images } from 'react-creditcard-validator';
export default function Payment() {
  const {total}=useContext(CartContext)
 
  return (
    <div>
        
    </div>
  )
}
