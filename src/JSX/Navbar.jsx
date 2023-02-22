import React, { useState ,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import logo from '../logo.png';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { signupschema } from '../schemas';
import { AuthContext } from '../context/AuthProvider';
import { Input,InputGroup,InputLeftElement,InputRightElement } from '@chakra-ui/react'
export default function Navbar() {
    const Nav=useNavigate()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const{auth,setAuth, login,user}=useContext(AuthContext)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [place,setplace]=useState("Enter Keyword or Product Number")
    let Handlelogin=(e)=>{
        e.preventDefault()
        if(email==="" || email === null){
            toast.error('Enter Valid Email', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        }
        if(password==="" || password.length<=6 || password===null){
            toast.error('Enter Valid Password', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        }else{
            fetch(`http://localhost:8080/profile/${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(Object.keys(data).length===0){
                    toast.error('Account Not Found ', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
                }else{
                    if (data.password!==password) {
                        toast.error('Password do not match ', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
                    }else{
                        toast.success('Sign In Successfull!', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
                        setAuth(true)
                        login(data.firstname)
                        setTimeout(() => {
                            e.target.reset();
                            var sh=document.getElementById("form1")
                            sh.style.display="none"
                        }, 2000); 
                    }
                }
            })
        }
    }
    let Sign=()=>{
        if(!auth){
            var pop=document.getElementById("pop")
            pop.style.display="initial"
        }else{
            var pop1=document.getElementById("pop1")
            pop1.style.display="initial"
        }
    }
    let S=()=>{
        if(!auth){
            var pop=document.getElementById("pop")
            pop.style.display="none"
        }else{
            var pop1=document.getElementById("pop1")
            pop1.style.display="none"
        }
    }
    let Show=()=>{
        var sh=document.getElementById("form")
        var pop=document.getElementById("pop")
        sh.style.display="initial"
        pop.style.display="none"
    }
    let See=()=>{
        var sh=document.getElementById("form1")
        var pop=document.getElementById("pop")
        sh.style.display="initial"
        pop.style.display="none"
    }
    let Ca=()=>{
        var sha=document.getElementById("form1")
        var sh=document.getElementById("form")
        sh.style.display="initial"
        sha.style.display="none"
    }
    window.onclick = function(event) {
        var sh=document.getElementById("form")
        var sha=document.getElementById("form1")
        if (event.target == sh || event.target == sha) {
            sh.style.display = "none";
            sha.style.display = "none";
        }
    }
    const initialValues={
        firstname:"",
        lastname:"",
        id:"",
        password:""
    }
    const {values,errors,handleBlur,touched,handleChange,handleSubmit} =useFormik({
        initialValues,
        validationSchema:signupschema,
        onSubmit:(values,action)=>{
        fetch('http://localhost:8080/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
            })
            toast.success('Account Created Successfully', {position: "top-center",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
            setTimeout(() => {
                var sh=document.getElementById("form")
                var sha=document.getElementById("form1")
                sh.style.display = "none";
                sha.style.display = "initial";
                action.resetForm()
            },2000); 
        }
    })
    let so=()=>{
        toast('Sign Out Successfull!', {position: "top-right",autoClose: 1000,hideProgressBar: true,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",});
        setTimeout(() => {
        setAuth(false)
        var pop1=document.getElementById("pop1")
        pop1.style.display="none"
        Nav("/")
        }, 1500);
    }
  return (
    <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Link to='/'><img src={logo} alt="" id='logo'/></Link>
        <form action="search" style={{display:"flex",width:"50%"}}>
            <input type="search" name="" id="" placeholder={place} onFocus={()=>{setplace("What are you looking for?")}} />
            <button type="submit" id='search'>SEARCH</button>
        </form>
        <div style={{display:"flex",justifyContent:"space-between",width:"20%",marginRight:"20px"}}>
            <div style={{cursor:"pointer"}} onMouseOver={Sign} onMouseLeave={S} >
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" alt="" className="mlogo" />
                {auth?<span>{user}</span>:<span>Sign In</span>}
            </div>
            <div style={{cursor:"pointer"}}>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44" alt="" className="mlogo" />
                <span>My Order</span>
            </div>
            <div style={{cursor:"pointer"}}>
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44" alt="" className="mlogo" />
                <span>(0)Cart</span>
            </div>
        </div>
    </div>
    <hr />
    <div id='link'>
        <Link className='link' to='/birthday'>BIRTHDAY</Link>
        <Link className='link' >SYMPATHY</Link>
        <Link className='link' >OCCASIONS</Link>
        <Link className='link' >FLOWERS</Link>
        <Link className='link' >PLANTS</Link>
        <Link className='link' >GIFTS BASKETS & FOOD</Link>
        <Link className='link' >GIFTS & MORE</Link>
        <Link className='link' >SAME-DAY DELIVERY</Link>
        <Link className='link' >SALE</Link>
        <Link className='link' >COMMUNITY</Link>
    </div>
    <hr />
    <div id='pop'>
        <div className='pop' onMouseOver={Sign} onMouseOut={S}>
        <button id='s' onClick={See}>SIGN IN</button>
        <span id='d'>Don't have an account?</span>
        <button id='c' onClick={Show}>Click Here</button>
        <div style={{border:"3px solid grey",marginTop:"10px",borderRadius:"5px",padding:"10px"}}>
        <h4 style={{fontWeight:"bold",marginBottom:"5px"}}>Benefits of Registration</h4>
        <div style={{textAlign:"left",fontSize:"13px"}}>
            <li>Fast, secure checkout</li>
            <li>Exclusive promotions & offers</li>
        </div>
        </div>
    </div>
    </div>
    <div id='form'>
        <img src="https://img.freepik.com/free-photo/copy-space-blooming-flowers_23-2148860088.jpg?w=826&t=st=1676825814~exp=1676826414~hmac=11208d21e90b9f41415bfbf1db02f154d3ad26490c9a9899f63675348dc235a8" alt="" id='imgmain'/>
        <div id='cform' onSubmit={handleSubmit}>
            <span style={{fontSize:"20px",fontWeight:"bold"}}>Create Account</span>
            <form action="" >
                <div style={{display:"flex",gap:"20px"}}>
                    <div>
                        <label htmlFor="firstname">First Name</label><br />
                        <input type="name" style={{width:"175px"}} name="firstname" id='firstname' value={values.firstname} onChange={handleChange} autoComplete="off" />
                        {errors.firstname && touched.firstname ?<small className='small'>{errors.firstname}</small>:null}
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label><br />
                        <input type="text" style={{width:"175px"}} name="lastname" id='lastname' value={values.lastname} onChange={handleChange} autoComplete="off"/>
                        {errors.lastname && touched.lastname ?<small className='small'>{errors.lastname}</small>:null}
                     </div>  
                </div>
                <div style={{marginTop:"3px",marginBottom:"5px"}}>
                    <label htmlFor="email">Email</label><br />
                    <input style={{width:"370px"}} type="email" name='id' id='email' value={values.id} onChange={handleChange} /><br />
                    {errors.email && touched.email ?<small className='small'>{errors.email}</small>:null}
                </div>
                <div style={{marginTop:"10px",marginBottom:"5px"}}>
                    <label htmlFor="password">Password</label><br />
                    <input style={{width:"370px"}}type="password" name='password' id='password' value={values.password} onChange={handleChange}   /><br />
                    {errors.password && touched.password ?<small className='small'>{errors.password}</small>:null}
                </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <input type="checkbox"/>
                <small style={{marginTop:"10px",marginLeft:"3px"}}>Email me about special offers, new products and promotions.</small><br />
            </div>
            <button id='s' type='submit'  style={{width:"370px",marginTop:"30px"}}>Create Account</button>
            <p style={{fontSize:"13px",marginTop:"10px"}}>By continuing, you agree to our <u style={{color:"blue",marginLeft:"2px",marginRight:"2px"}}>Terms of Use</u>and<u style={{color:"blue",marginLeft:"2px",marginRight:"2px"}}>Privacy Notice</u> .</p>
            <div style={{marginTop:"10px",position:"stick"}}>
                <div style={{display:"flex",alignItems:"center",color:"grey",gap:"4px"}}><hr style={{width:"35%"}} />Or sign in with<hr style={{width:"35%"}}/></div>
            <div style={{display:"flex"}}>
                <div>
                <Center p={1}><Button w={'30'} colorScheme={'facebook'} leftIcon={<AiFillFacebook/>}><Center><Text p={"1"}>Sign with Facebook</Text></Center></Button></Center>
                </div>
                <div>
                <Center p={1}><Button w={'30'}variant={'outline'} leftIcon={<FcGoogle />}><Center><Text p={"1"}>Sign in with Google</Text></Center></Button></Center> 
                </div>
            </div>
            </div>
            </form>
        </div>
    </div>
    <div id='form1'>
    <img src="https://img.freepik.com/free-photo/copy-space-blooming-flowers_23-2148860088.jpg?w=826&t=st=1676825814~exp=1676826414~hmac=11208d21e90b9f41415bfbf1db02f154d3ad26490c9a9899f63675348dc235a8" alt="" id='imgmain'/>
        <div id="lform">
            <form action="" onSubmit={Handlelogin}>
            <span style={{fontSize:"20px",fontWeight:"bold"}}>Sign In</span><br />
            <div style={{marginTop:"15px",marginBottom:"10px"}}><span style={{fontSize:"14px"}}>Not registered?</span><small onClick={Ca} style={{color:"blue",marginLeft:"5px",marginRight:"5px",fontSize:"14px"}}><u> Create Account</u></small></div>
            <label htmlFor="">Email</label><br />
            <input style={{width:"365px",marginBottom:"20px"}} type="email"  onChange={e=>setemail(e.target.value)} required/><br />
            <label htmlFor="">Password</label><br />
            <InputGroup style={{width:"365px",marginBottom:"20px"}} size='sm' onChange={e=>setpassword(e.target.value)} required><Input pr='4.5rem' type={show ? 'text' : 'password'}/><InputRightElement width='4.5rem'><Button h='1.5rem' size='sm' onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button></InputRightElement></InputGroup>
            <button id='s' type='submit' style={{width:"365px",marginTop:"20px"}}>Sign In</button>
            <p style={{fontSize:"13px",marginTop:"10px"}}>By continuing, you agree to our <u style={{color:"blue",marginLeft:"2px",marginRight:"2px"}}>Terms of Use</u>and<u style={{color:"blue",marginLeft:"2px",marginRight:"2px"}}>Privacy Notice</u> .</p>
            <div style={{display:"flex",alignItems:"center",color:"grey",gap:"4px"}}><hr style={{width:"35%"}} />Or sign in with<hr style={{width:"35%"}}/></div>
            <div style={{display:"flex"}}>
                <div>
                <Center p={0.5}><Button w={'29'} colorScheme={'facebook'} leftIcon={<AiFillFacebook/>}><Center><Text p={"1"}>Sign with Facebook</Text></Center></Button></Center>
                </div>
                <div>
                <Center p={0.5}><Button w={'29'}variant={'outline'} leftIcon={<FcGoogle />}><Center><Text p={"1"}>Sign in with Google</Text></Center></Button></Center> 
                </div>
            </div>
            </form>
        </div>
    </div>
    <div id='pop1' onMouseOver={Sign} onMouseLeave={S}>
        <div id="pop2">
            {auth?<Link to='/admin'><button id='p' style={{width:"200px",marginBottom:"20px"}}>ADMIN</button></Link>:null}
            {auth?<button id='p' style={{width:"200px"}} onClick={so}>SIGN OUT</button>:null}
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}
