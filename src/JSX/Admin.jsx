import React, { useContext, useState ,useEffect} from 'react'
import Navbar from './Navbar'
import { Input,InputGroup,InputLeftElement,InputRightElement } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
export default function Admin() {
  const[cat,setcat]=useState()
  const[name,setname]=useState()
  const[bprice,setbprice]=useState()
  const[img,setimg]=useState()
  const[description,setdescription]=useState()
  
  let change=()=>{
      var e = document.getElementById("w");
      setcat(e.value)
    }
   let submit=(e)=>{
    e.preventDefault()
    let obj={name,bprice,img,description}
    fetch(`http://localhost:8080/${cat}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    toast.success('Data Added  Successfully', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
    e.target.reset()
  } 
  return (
    <>
    <Navbar/>
    <div>
      <form action="" onSubmit={submit} style={{width:"30%",margin:"auto",marginTop:"5%",display:"grid",gap:"20px",boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:"30px"}}>
          <select id='w' onChange={change}>
            <option >Select Category</option>
            <option value="birthdayflower">Birthday Flower</option>
          </select>
        <Input placeholder='Name' size='md' onChange={(e)=>setname(e.target.value)} />
        <InputGroup><InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$'/><InputRightElement/><Input placeholder='Enter amount'onChange={(e)=>setbprice(+e.target.value)} /></InputGroup>
        <Input placeholder='Image' size='md'onChange={(e)=>setimg(e.target.value)} />
        <Input placeholder='Description' size='md' onChange={(e)=>setdescription(e.target.value)}/>
        <input type="submit" value="Submit" style={{color:"white",background:"#6e3290",padding:"5px",width:"50%",margin:"auto",borderRadius:"5px"}} />
      </form>
    </div>
    </>
  )
}
