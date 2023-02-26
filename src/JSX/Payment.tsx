import React, { useContext ,useState} from 'react'
import { CartContext } from '../context/CartProvider'
import '../CSS/Payment.css'
import { useCreditCardValidator, images } from 'react-creditcard-validator';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
export default function Payment() {
  const {cart,setcart,total}=useContext(CartContext)
  const [load,setload]=useState(false)
  let Nav=useNavigate()
  function expDateValidate(month: string, year: string) {
    if (Number(year) > 2035) {
      return 'Expiry Date Year cannot be greater than 2035';
    }
    return;
  }
  // 5175 7400 1375 6845
  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs }
  } = useCreditCardValidator({ expiryDateValidator: expDateValidate });
  let Submit=(e)=>{
    e.preventDefault()
    if(Object.values(erroredInputs)[0]===undefined && Object.values(erroredInputs)[1]==undefined && Object.values(erroredInputs)[2]==undefined){
      let main= document.getElementById("main").style.display="none"
      let po=document.getElementById("m").style.border="0"
      setcart([])
      setload(true)
      setTimeout(() => {
      setload(false)
      let p=document.getElementById("m").style.width="400px"
      let pp= document.getElementById("ps").style.display="initial"
      }, 3000);
      setTimeout(() => {
        setload(false)
        Nav("/")
      }, 5000);
    }
  }
  return (
    <main id='m' style={{border:"1px solid gray",borderRadius:"10px",fontWeight:"700",margin:"2em auto",width:"300px",marginTop:"70px"}}>
      <form action="" id='main' onSubmit={Submit}>
      <p style={{display:"flex",justifyContent:"center",fontSize:"x-large",color:"#647070",fontWeight:"lighter",borderBottom:"1px solid",backgroundColor:"#eff2ff",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",padding:"20px"}}>Pay Invoice</p>
      <div style={{padding:"20px"}}>
      <label style={{textTransform:"uppercase",fontWeight:"600",fontSize:"15px"}}>Payment amount</label><br />
      <span style={{fontSize:"22px"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(total+40)}</span><br />
      <div style={{marginTop:"10px"}}>
      <label style={{textTransform:"uppercase",fontWeight:"600",fontSize:"15px"}} htmlFor="" >Name on Card</label>
      <input style={{display:"block",width:"100%",borderRadius:"5px",border:"2px solid gray",height:"45px",paddingLeft:"5px"}} type="text" required  />
      </div>
      <div className="input-group">
        <svg style={{position:"relative",top:"55px",left:"225px"}} {...getCardImageProps({ images })} />
        <label style={{textTransform:"uppercase",fontWeight:"600",fontSize:"15px"}}>Card Number</label>
        <input style={{display:"block",width:"100%",borderRadius:"5px",border:"2px solid gray",height:"45px",paddingLeft:"5px"}} required
          {...getCardNumberProps({
          })}
        />
      </div>
      <small style={{color:"red",fontSize:"10px",display:"block"}}>{erroredInputs.cardNumber}</small>

      <div className="multi-input">
        <div className="input-group">
          <label style={{textTransform:"uppercase",fontWeight:"600",fontSize:"15px"}}>Valid Till</label> 
          <input style={{display:"block",width:"100%",borderRadius:"5px",border:"2px solid gray",height:"45px"}} {...getExpiryDateProps()} required />
          <small style={{color:"red",fontSize:"10px",display:"block"}}>{erroredInputs.expiryDate && erroredInputs.expiryDate}</small>
        </div>

        <div className="input-group">
          <label style={{textTransform:"uppercase",fontWeight:"600",fontSize:"15px"}}>CVC</label>
          <input type="password" style={{display:"block",width:"100%",borderRadius:"5px",border:"2px solid gray",height:"45px"}} {...getCVCProps()}  required />
          <small style={{color:"red",fontSize:"10px",display:"block"}}>{erroredInputs.cvc && erroredInputs.cvc}</small>
        </div>
      </div>
      <button id='btn'>PAY₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(total+40)}</button>
      </div>
      </form>
          {load?<Spinner size='xl' position="absolute" marginLeft="100px" top="200px" color='#6e3290' />:<Spinner style={{display:"none"}} size='xl' position="absolute" marginLeft="100px" top="200px" color='#6e3290'/>}
      <div id='ps' style={{display:"none"}} >
          <img src="http://craftizen.org/wp-content/uploads/2019/02/successful_payment_388054.png" alt="" />
          <p style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>Payment Successfully Done</p>
      </div>
    </main>
  )
}
