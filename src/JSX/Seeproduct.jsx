import React, { useContext,useState,useEffect } from 'react'
import '../CSS/Seeproduct.css'
import { useParams,Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import Navbar from './Navbar';
import {ChevronRightIcon } from '@chakra-ui/icons'
import Footer from './Footer';
import ATC from './ATC'
import { CartContext } from '../context/CartProvider';
import { toast } from 'react-toastify';
export default function Seeproduct() {
    let Nav=useNavigate()
    const {atc}=useContext(CartContext)
    const {auth}=useContext(AuthContext)
    const [data,setdata]=useState([])
    const [img,setimg]=useState()
    const param=useParams()
        fetch(`http://localhost:8080/birthdayflower/${param.id}`)
        .then(res=>res.json())
        .then(data=>setdata(data))
let Submit=(e)=>{
    e.preventDefault()
    if (!auth) {
    let size=document.querySelector('input[name="flower"]:checked');
    let pin=document.getElementById("pin").value
    let select=document.getElementById("select")
    var text = select.options[select.selectedIndex].text;
    let sizea=(size.nextSibling).data
    let quan=1
    if (pin.length===6) {
        atc(pin,text,size.value,sizea,img,data.name,quan)
        toast.success('Product Added to Cart', {position: "top-center",autoClose: 2000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    }else{
        toast.error('Enter a 6 digit pin code', {position: "top-center",autoClose: 2000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    }
    }else{
        toast.error('Signin First', {position: "top-center",autoClose: 2000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    }
}
  return (
    <>
        <Navbar/>
        <div style={{fontSize:"13px",marginLeft:"10px",color:'#6e3290',marginTop:"10px"}}>
            <Link to="/">Home</Link><ChevronRightIcon/><Link to="/birthday">Flowers</Link><ChevronRightIcon/><Link>{data.name}</Link>
        </div>
        <div style={{padding:"10px",paddingLeft:"40px",display:"flex"}}>
            <div>
                <img src={data.img} id='iw' alt="" width="435px"/>
                <img src={img} id="iq" style={{display:"none"}} alt="" width="435px"/>
                <p style={{width:"430px",background:"#f7f3f9",padding:"10px",fontSize:"16px",marginTop:"10px"}}>Our local florists put love into every arrangement. Sometimes they have to substitute flower types, colors & containers to give you the freshest blooms available. Although your bouquet may vary from the photo shown, we promise your recipient will love it just as much!</p>
            </div>
           <div style={{marginLeft:"40px",width:"800px"}}>
                <p style={{fontSize:"24px",fontWeight:"600"}}>{data.name}</p>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?auto=webp&amp;optimize={medium}" width="200px" style={{marginTop:"10px"}} alt="Passport Eligible"></img>
                <form onSubmit={Submit}>
                    <div style={{borderRadius:"5px",marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <p style={{padding:"10px",background:"#e9ebec",fontWeight:"700",borderRadius:"5px",paddingLeft:"20px"}}>1. Pick Your Item</p>
                        <div style={{padding:"20px"}}>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.img)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none" }}>
                                <label className="form-control"><input type="radio" name="flower" value={(data.bprice+500)} required />Extra Large</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(data.bprice+500)}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgl)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" value={data.bprice+300}/>Large</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(data.bprice+300)}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgm)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" value={data.bprice+150}/>Medium</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(data.bprice+150)}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgs)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" value={data.bprice}/>Small</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>₹{new Intl.NumberFormat('en-IN',{maximumSignificantDigits:3}).format(data.bprice)}</p>
                            </div>
                        </div>
                    </div>
                    <ATC/>
                </form>
            </div>
        </div>
        <br />
        <hr />
        <div style={{textAlign:"center",color:"#6e3290",padding:"20px",borderBottom:"2px solid #6e3290"}}>
            <small style={{fontSize:"20px",fontWeight:"bold"}}>Description</small><br />
            <small style={{fontSize:"16px"}}>{data.description}</small>
        </div>
        <br /><br /><br />
        <Footer/>
    </>
    
  )
}
