import React ,{useEffect,useReducer,useState} from "react";
import Footer from './Footer'
import Navbar from './Navbar'
import {ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import '../CSS/Birthday.css';
import { Spinner } from '@chakra-ui/react'
import axios from "axios";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const reducer = (state,action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return{
      ...state,
      isLoading:true,
      error:false
    };
    case "FETCH_SUCCESS":
      return{
      ...state,
      data:action.payload,
      isLoading:false,
      error:false
    };
    case "FETCH_FAILURE":
      return{
        ...state,
        data:[],
        isLoading:false,
        error:true
      };
      default:
        throw new Error()
      }
    };
export default function Birthday() {
  const [url, seturl] = useState("http://localhost:8080/birthdayflower")
  const [val,setval]=useState('featured')
  const [state, dispatch] = useReducer(reducer,initialState)
  const {data,isLoading,error}=state
  useEffect(() => {
    dispatch({type:"FETCH_REQUEST"})
    axios.get(`${url}`)
    .then((res)=>{
      dispatch({type:"FETCH_SUCCESS",payload:res.data})
    }).catch((err)=>{
      dispatch({type:"FETCH_FAILURE",payload:err})
    })
    
  },[url])
  let change=()=>{
    var e = document.getElementById("sort");
    setval(e.value)
  }
  useEffect(()=>{
    var e = document.getElementById("sort");
  if (val==="htl") {
    seturl("http://localhost:8080/birthdayflower?_sort=bprice&_order=desc")
    e.style.width="220px"
  }else if(val==="lth"){
    seturl("http://localhost:8080/birthdayflower?_sort=bprice&_order=asc")
    e.style.width="220px"
  }else if(val==="featured"){
    seturl("http://localhost:8080/birthdayflower")
    e.style.width="160px"
  }
  })
  return (
    <div>
      <Navbar/>
        <div style={{fontSize:"13px",marginLeft:"10px",color:'#6e3290'}}>
          <Link to="/">Home</Link><ChevronRightIcon/><Link to="/birthday">Birthday</Link><ChevronRightIcon/><Link to="/birthday">Birthday Flowers</Link>
        </div>
        <div style={{display:"flex",marginBottom:"40px"}}>
          <p id='bf'>Birthday Flowers</p>
          <div className="vl" style={{height:"50px"}}></div>
          <span style={{fontSize:"14px",marginRight:"40px"}}>Our birthday flowers include fresh roses, daisies, and more! Whether your birthday flower delivery is sent to home or office, you can be sure it will be received with a smile. Need your birthday flowers today? Same-day birthday delivery is available! With same-day flower delivery on orders placed by 2PM, no one has to know whether you ordered weeks ago or this morning. You can be sure our flowers for birthdays will send the right message.</span>
        </div>
        <div>
          <div style={{display:"flex"}}>
            <div style={{width:"370px"}}>
                <select name="" id="sort" onChange={change} style={{marginTop:"20px",marginLeft:"10px",border:"1px solid",padding:"5px",borderRadius:"5px",color:" #6e3290"}}>
                  <option value="featured">Sort by: Featured</option>
                  <option value="lth">Sort by: Price: Low to High </option>
                  <option value="htl">Sort by: Price: High to Low </option>
                </select>
            </div>
            
            <div>
              {isLoading?<Spinner size='xl' marginLeft="200px" color='#6e3290' />:null}
              <div id="container" >
                {data.map((e)=>(
                    <div style={{}} key={e.id}>
                      <img src={e.img} alt="" style={{display:"block",margin:"auto"}} />
                      <div style={{marginTop:"7px"}}>
                        <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg" alt="Passport Eligible" height="15" width="142"></img>
                        <small style={{fontSize:"18px",fontWeight:"600"}}>{e.name}</small><br />
                        <small style={{fontSize:"18px",fontWeight:"900"}}>${e.bprice} - ${2*e.bprice}</small>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}
