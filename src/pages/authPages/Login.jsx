import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logoImg from "./login-logo1.svg"

const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")

  //handles all login logic as well as user error checking=========================
  const handleLogin=()=>{
    if(email==""||password==""){
      setError("enter all fields first")
      setTimeout(()=>{
        setError("")
      },2000)
      return;
    }else{
      if(!email.includes('@')||!email.includes('.')||!email.includes('com')){
        alert("invalid email")
        return
      }
      alert("all fields correct")
    }
  }

  return (

    <div className=' bg-[#F5F5F5] login-block h-screen flex flex-col justify-evenly items-center'>

      <section className='h-auto w-auto p-5'>
        <h1 className='text-5xl text-black w-full mb-4 text-center'>Pack Pals</h1>
        <img  src={logoImg}></img>
      </section>

      <section className='h-48 w-80 flex flex-col items-center gap-3 relative'>
        <p className='text-red-500'>{error}</p>
        <input className='h-12 w-full pl-3 bg-[#D9D9D9] outline-none text-black' type='email' value={email} onChange={(e)=>{
          e.preventDefault()
          setEmail(e.target.value)
        }} placeholder="enter email"></input>

        <input className='h-12 w-full pl-3 bg-[#D9D9D9] outline-none text-black' type='text' value={password} onChange={(e)=>{
          e.preventDefault()
          setPassword(e.target.value)
        }} placeholder="enter password"></input>

        <button className='w-28 h-10 bg-[#4CAF50] rounded-md absolute bottom-0 right-0' onClick={(e)=>{
          e.preventDefault()
          handleLogin(e);
        }}>sign-in</button>
      </section>

      <Link to="/auth/register" className='text-blue-600'>new user? sign-up instead</Link>

    </div>
  )
}

export default Login