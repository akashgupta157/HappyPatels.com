import React,  { createContext ,useState } from "react";
export const AuthContext=createContext()
export default function AuthProvider({children}) {
    const [auth,setAuth]=useState(false)
    const [user,setuser]=useState()
    const [json, setjson] = useState("birthdayflower")
    const login =(user)=>{
      setAuth(true)
      setuser(user)
    }
  return (
    <div>
        <AuthContext.Provider value={{auth,setAuth,login,user,json,setjson}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
