import React, { useContext,useState,useEffect } from 'react'
import '../CSS/Seeproduct.css'
import { useParams,Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import Navbar from './Navbar';
import {ChevronRightIcon } from '@chakra-ui/icons'
import Footer from './Footer';
export default function Seeproduct() {
    const [data,setdata]=useState([])
    const [img,setimg]=useState()
    const param=useParams()
    const {json}=useContext(AuthContext)
        fetch(`http://localhost:8080/${json}/${param.id}`)
        .then(res=>res.json())
        .then(data=>setdata(data))
  return (
    <>
        <Navbar/>
        <div style={{fontSize:"13px",marginLeft:"10px",color:'#6e3290',marginTop:"10px"}}>
            <Link to="/">Home</Link><ChevronRightIcon/><Link to="/birthday">Birthday</Link><ChevronRightIcon/><Link to="/birthday">Birthday Flowers</Link><ChevronRightIcon/><Link>{data.name}</Link>
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
                <form>
                    <div style={{borderRadius:"5px",marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <p style={{padding:"10px",background:"#e9ebec",fontWeight:"700",borderRadius:"5px",paddingLeft:"20px"}}>1. Pick Your Item</p>
                        <div style={{padding:"20px"}}>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.img)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none" }}>
                                <label className="form-control"><input type="radio" name="flower" />Extra Large</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>${data.bprice+30.00}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgl)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" />Large</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>${data.bprice+20.00}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgm)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" />Medium</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>${data.bprice+10.00}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer",marginBottom:"7px"}}onClick={()=>{setimg(data.imgs)
                                document.getElementById("iq").style.display="initial"
                                document.getElementById("iw").style.display="none"}}>
                                <label className="form-control"><input type="radio" name="flower" />Small</label>
                                <p style={{fontSize:"17px",color:"GrayText"}}>${data.bprice}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{borderRadius:"5px",marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <p style={{padding:"10px",background:"#e9ebec",fontWeight:"700",borderRadius:"5px",paddingLeft:"20px"}}>2. Enter Delivery Destination</p>
                        <div style={{padding:"20px",display:"flex"}}>
                            <div id='log1'style={{borderRight:"1px solid",width:"50%"}}>
                                <div className='box' >
                                <input type="number" style={{width:"379px"}} required/>
                                <span>Delivery Zip Code*</span>
                                </div>
                            </div>
                            <div style={{display:"grid"}}>
                            <label style={{position:"absolute",bottom:"1015px",color:"#757575"}}>Location Type</label>
                            <select name="" id="select" style={{marginTop:"17px",outline:"0",borderBottom:"2px solid #757575",width:"379px",fontSize:"20px"}}>
                                <option value="">Residence</option>
                                <option value="">Business</option>
                                <option value="">Hospital</option>
                                <option value="">Funeral home</option>
                                <option value="">Apartment</option>
                                <option value="">School</option>
                                <option value="">Church</option>
                            </select>
                            </div>
                        </div>
                            <input type="submit" value="Add to Cart" id='atc' />
                    </div>
                </form>
            </div>
        </div>
        <br />
        <hr />
        <div style={{textAlign:"center",color:"#6e3290",padding:"20px",borderBottom:"2px solid #6e3290"}}>
            <small style={{fontSize:"20px",fontWeight:"bold"}}>Description</small>
            <p style={{fontSize:"16px"}}>{data.description}</p>
        </div>
        <br /><br /><br />
        <Footer/>
    </>
    
  )
}
