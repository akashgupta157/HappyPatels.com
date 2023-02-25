import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartProvider'
import '../CSS/Cart.css'
import Navbar from './Navbar'
import deletebtn from './delete.svg'
import axios from 'axios'
export default function Cart() {
    const {cart}=useContext(CartContext)
    const [city,setcity]=useState()
    const [state,setstate]=useState()
  return (
    <div>
        <Navbar/>
        {cart.length===0?<div style={{display:"grid",color:"GrayText",fontSize:"35px"}}><img src="https://media.istockphoto.com/id/1139666909/vector/shopping-cart-shop-trolley-or-basket-in-the-supermarket.jpg?s=612x612&w=0&k=20&c=_HajO7ifYKxuwzKFf-Fx9lsLKBa_1Rq9vuzGiPq8Q5Q=" alt="" width="400px" style={{margin:"auto"}} /><small style={{margin:"auto",position:"absolute",left:"50%",top:"90%",transform: "translate(-50%, -50%)"}}>Your cart is empty.</small></div>:<div>
        <div id="wrap" >
            <p style={{fontSize:"28px",fontWeight:"900",padding:"10px",marginLeft:"80px"}}>Delivery Information</p>
                {cart.map((e)=>(
                    <div style={{border:"3px solid purple" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"20px",width:"40%",borderRadius:"10px",marginLeft:"90px",padding:"10px",paddingLeft:"20px",paddingRight:"20px"}}>
                      <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{fontWeight:"900"}} >Item {cart.indexOf(e)+1} of {cart.length}</div>
                        <svg focusable="false" className='MuiSvgIcon-root' viewBox="0 0 24 24" aria-hidden="true"><path id="time-3-icon" d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path></svg>
                        </div>
                      <hr style={{marginTop:"0px",marginBottom:"5px",color:"purple"}} />
                      <div style={{display:"flex"}}>
                        <img src={e.img} alt="" width='100px' style={{}} />
                        <div style={{marginTop:"8px",marginLeft:"10px"}}>
                            <small style={{fontSize:"18px",fontWeight:"600"}}>{e.name}</small><br />
                            <small style={{fontSize:"16px"}}>Price: ₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(e.size)}</small><br />
                            <small style={{fontSize:"15px"}}>Size: {e.sizea}</small>
                        </div>
                      </div>
                      </div>
                      <hr style={{marginTop:"10px",color:"purple"}} />
                      <small style={{fontSize:"17px",fontWeight:"700"}}>Sending to:</small>
                      <form action="">
                        <div>
                            <input type="text" placeholder='First Name' style={{border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input type="text" placeholder='Last Name' style={{marginLeft:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <button style={{textAlign:"left", border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>Residence Type:</small>{e.text}</button> <button style={{textAlign:"left",marginBottom:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginLeft:"7px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>Pin Code:</small>{e.pin}</button>
                            {/* {axios.get("https://api.postalpincode.in/pincode/452002").then(data=>{setstate(data.data[0].PostOffice[0].State)
                            setcity(data.data[0].PostOffice[0].Region)
                        })} */}
                            {/* <button style={{textAlign:"left", border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>City :</small>{city}</button> <button style={{textAlign:"left",marginBottom:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginLeft:"7px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>State:</small>{state}</button> */}
                            <button style={{textAlign:"left", border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>Date :</small><input type="date" name="" id="" /></button> <button style={{textAlign:"left",marginBottom:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginLeft:"7px"}}><small style={{fontWeight:"900",fontSize:"16px",marginRight:"10px"}}>Mobile:</small><input type="number" name="" id="" /></button>
                        </div>
                      </form>
                    </div>
                ))}
              </div>
            </div>}
    </div>
  )
}
