import React from 'react'
import src from "./assets/logo1.png"
import "./index.css"
import { useNavigate} from "react-router-dom"

const Landing = () => {

  const navigate=useNavigate()
  return (
    <div id='landing-block' className=' landing-block h-screen flex flex-col relative' style={{backgroundImage:`url(${src})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",opacity:"80%"}}>
       <h1 className=' text-8xl text-center mt-8'>Pack Pals</h1>
       <button onClick={()=>{
        navigate("/auth/login/")
       }} className=' start-btn self-center absolute bottom-48 bg-yellow-500 w-44 h-16 text-2xl rounded-md'>Explore</button>
    </div>
  )
}

export default Landing