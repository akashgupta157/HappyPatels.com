import React from 'react'
import { useNavigate } from 'react-router-dom'
import  '../CSS/ATC.css'
export default function ATC() {
  return (
    <div>
        <div style={{borderRadius:"5px",marginTop:"15px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                        <p style={{padding:"10px",background:"#e9ebec",fontWeight:"700",borderRadius:"5px",paddingLeft:"20px"}}>2. Enter Delivery Destination</p>
                        <div style={{padding:"20px",display:"flex"}}>
                            <div id='log1'style={{borderRight:"1px solid",width:"50%"}}>
                                <div className='box' >
                                <input type="number" style={{width:"379px"}} id="pin" required/>
                                <span>Delivery Pin Code*</span>
                                </div>
                            </div>
                            <div style={{display:"grid"}}>
                            <label style={{position:"absolute",color:"#757575"}}>Location Type</label>
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
    </div>
  )
}


