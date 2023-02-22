import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  let Nav=useNavigate()
  let Click=()=>{
    Nav("/")
  }
  return (
    <div >
        <img style={{margin:"auto",display:"block",marginTop:"10%"}} src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="" />
        <button style={{margin:"auto",display:"block",background:"#6e3290", color:"white",padding:"10px",borderRadius:"5px"}} onClick={Click}>Back</button>
    </div>
  )
}
