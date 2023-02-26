import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../context/CartProvider'
import '../CSS/Cart.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Cart() {
  const Nav=useNavigate()
    const {cart,total,settotal}=useContext(CartContext)
    const [Cart,setCart]=useState(cart)
    const [city,setcity]=useState()
    const [statea,setstate]=useState()
    const ref=useRef()
    if (cart.length>0) {
    let url=("https://api.postalpincode.in/pincode/"+cart[0].pin)
    axios.get(url).then(data=>{setstate(data.data[0].PostOffice[0].State)
      setcity(data.data[0].PostOffice[0].Region)
    })
    }
useEffect(() => {
  let bag=0
      Cart.map((e)=>{
          bag+=+e.size
        })
        settotal(bag);
})

   let  Ondelete=(id)=>{
      Cart.splice(id,1)
      Nav("/cart")
    }
    let Add=(e)=>{
      e.preventDefault()
      toast.success('Address Added', {position: "top-center",autoClose: 2000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    }
  return (
    <div>
        <Navbar/>
        {Cart.length===0?<div style={{display:"grid",color:"GrayText",fontSize:"35px"}}><img src="https://media.istockphoto.com/id/1139666909/vector/shopping-cart-shop-trolley-or-basket-in-the-supermarket.jpg?s=612x612&w=0&k=20&c=_HajO7ifYKxuwzKFf-Fx9lsLKBa_1Rq9vuzGiPq8Q5Q=" alt="" width="400px" style={{margin:"auto"}} /><small style={{margin:"auto",position:"absolute",left:"50%",top:"90%",color:"gray",transform: "translate(-50%, -50%)"}}>Your cart is empty.</small></div>:<div style={{display:"flex"}}>
        <div id="wrap" >
            <p style={{fontSize:"28px",fontWeight:"900",padding:"10px",marginLeft:"80px"}}>Delivery Information</p>
            <div id='scroll' style={{overflowY:"scroll" ,height:"480px",width:"110%"}}>
                {cart.map((e)=>(
                    <div key={e.id} style={{border:"3px solid purple" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginTop:"10px",width:"536px",borderRadius:"10px",marginLeft:"90px",padding:"10px",paddingLeft:"20px",paddingRight:"20px"}}>
                      <div>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{fontWeight:"900"}} >Item {Cart.indexOf(e)+1} of {Cart.length}</div>
                        <svg focusable="false" onClick={()=>{Ondelete(Cart.indexOf(e))}} className='MuiSvgIcon-root' viewBox="0 0 24 24" aria-hidden="true"><path id="time-3-icon" d="M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path></svg>
                      </div>
                      <hr style={{marginTop:"0px",marginBottom:"5px",color:"purple"}} />
                      <div style={{display:"flex"}}>
                        <img src={e.img} alt="" width='100px' style={{}} />
                        <div style={{marginTop:"8px",marginLeft:"10px"}}>
                            <small style={{fontSize:"18px",fontWeight:"600"}}>{e.name}</small><br />
                            <small style={{fontSize:"16px"}}>Price: ₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(e.size)}</small><br />
                            <small style={{fontSize:"15px"}}>Size: {e.sizea}</small><br />
                        </div>
                      </div>
                      </div>
                      <hr style={{marginTop:"10px",color:"purple"}} />
                      <small style={{fontSize:"17px",fontWeight:"700"}}>Sending to:</small>
                      <form action="" onSubmit={Add}>
                        <div>
                            <input required type="text" placeholder='First Name' style={{border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" placeholder='Last Name' style={{marginLeft:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" value={`Location Type: `+e.text} style={{border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" value={`Pin Code: `+e.pin} style={{marginLeft:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" value={`City: `+city} style={{border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" value={`State: `+statea} style={{marginLeft:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="text" placeholder='Delivery Date'  ref={ref} onChange={(e) => console.log(e.target.value)} onFocus={() => (ref.current.type = "date")} onBlur={() => (ref.current.type = "text")}  style={{border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <input required type="number" placeholder='Mobile Number' style={{marginLeft:"10px",border:"1px solid purple",fontSize:"16px",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px"}}/>
                            <button style={{border:"1px solid purple",fontSize:"16px",marginLeft:"25%",padding:"5px",borderRadius:"5px",width:"240px",marginBottom:"10px",fontWeight:"900"}}id="add" >+ADD</button>
                        </div>
                      </form>
                    </div>
                ))}
                </div>
              </div>
              <div style={{marginLeft:"200px",padding:"10px"}}>
                <p style={{fontSize:"28px",fontWeight:"900"}}>Payment Information</p>
                <div style={{marginTop:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"10px",padding:"20px",width:"350px"}}>
                <div style={{fontWeight:"900",paddingBottom:"10px"}}>Order Summary</div>
                <small style={{fontSize:"15px"}}>{Cart.length} Items</small>
                <div style={{display:"flex",justifyContent:"space-between"}}><small style={{fontSize:"15px"}}>Merchandise</small><small style={{fontSize:"15px"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(total)}</small></div>
                <div style={{display:"flex",justifyContent:"space-between"}}><small style={{fontSize:"15px"}}>Delivery Charges</small><small style={{fontSize:"15px"}}>₹ 40</small></div>
                <hr style={{marginTop:"10px",marginBottom:"10px"}}/>
                <div style={{fontWeight:"900",fontSize:"20px",paddingBottom:"15px",display:"flex",justifyContent:"space-between"}}><small>Order Total</small><small>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(total+40)}</small></div>
                <button style={{border:"1px solid purple",fontSize:"16px",marginLeft:"12%",padding:"5px",borderRadius:"5px",width:"240px",fontWeight:"900"}}id="add" onClick={()=>{Nav("/payment")}} >PAYMENT</button>
                </div>
              </div>
            </div>}
    </div>
  )
}
