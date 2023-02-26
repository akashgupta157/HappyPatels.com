import React,{useContext} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Admin from './Admin'
import Birthday from './Birthday'
import Home from './Home'
import { AuthContext } from '../context/AuthProvider'
import NotFound from './NotFound'
import Seeproduct from './Seeproduct'
import Payment from './Payment.tsx'
import Cart from './Cart'
import { CartContext } from '../context/CartProvider'
export default function AllRoutes() {
  let Nav=useNavigate()
  const {auth,setauth}=useContext(AuthContext)
  const{cart}=useContext(CartContext)
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/birthday' element={<Birthday/>}/>
            {auth?<Route path='/admin' element={<Admin/>}/>:<Route path='*' element={<NotFound/>} />}
            {/* {cart.length!==0?<Route path='/payment' element={<Payment/>}/>:<Route path='*' element={<NotFound/>} />} */}
            <Route path='*' element={<NotFound/>}/>
            <Route path='birthday/:id' element={<Seeproduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
    </div>
  )
}
