import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import logoImg from "./login-logo1.svg"

const Register = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const notify=(msg)=>{
    setError(msg)
    setTimeout(()=>{
      setError("")
    },2000)
  }


  const handleLogin=()=>{
    if(!dob||!name||!phone||!gender||!dob||!email||!password){
    notify("enter all fields")
    }else{
      if(!email.includes("@")||!email.includes(".com")){
        notify("email is not valid")
      }else{
        alert("all fields correct")
      }
      
    }
  }



  return (
    <div className='bg-[#F5F5F5] login-block h-screen flex flex-col justify-evenly items-center'>

      <section className='h-34 w-34 mb-1'>
        <h1 className='text-2xl text-black w-full mb-4 text-center'>Pack Pals</h1>
        <img src={logoImg}></img>
      </section>

      <section className=' h-3/6 w-80 flex flex-col items-center gap-2 relative'>
        <p className='text-red-500 h-6'>{error}</p>

        {/* input for name===========================*/}
        <input className='h-9 w-full pl-3 bg-[#D9D9D9] outline-none text-black' type='text' value={name} onChange={(e) => {
          e.preventDefault()
          setName(e.target.value);
        }} placeholder='enter your full name' ></input>


        {/* input for email =========================== */}
        <input className='h-9 w-full pl-3 bg-[#D9D9D9] outline-none text-black' type='email' value={email} onChange={(e) => {
          e.preventDefault()
          setEmail(e.target.value)
        }} placeholder="enter email"></input>

        {/* input for number ======================== */}
        <input className='h-9 w-full pl-3 bg-[#D9D9D9] outline-none text-black' type='number' value={phone} onChange={(e) => {
          e.preventDefault()
          setPhone(e.target.value);
        }} placeholder='enter your phone number'></input>


        <div className='gender-dob-body w-full text-black flex flex-col items-center gap-3 mt-4 mb-4'>

          <div className='w-full flex justify-center items-center gap-2'><label >enter DOB</label> : <input className=' bg-slate-300 pl-1 pr-1 h-8 outline-none cursor-pointer' value={dob} onChange={(e)=>{
            e.preventDefault();
            setDob(e.target.value)
          }} type='date' placeholder='enter dob'></input></div>

          <div className='flex justify-center w-full'>
            <select className='gender-selection w-full h-7 text-center bg-[#2196F3] outline-none text-white' value={gender} onChange={(e)=>{
              e.preventDefault();
              setGender(e.target.value)
            }}>

              <option value='' className='bg-white text-black'>select gender</option>
              <option value='male' className='bg-white text-black'>MALE</option>
              <option value='female' className='bg-white text-black'>FEMALE</option>
              <option value='other' className='bg-white text-black'>OTHER</option>
            </select>
          </div>

        </div>

        <input className='h-9 w-full pl-3 bg-[#D9D9D9] outline-none outline-red-600 text-black' type='text' value={password} onChange={(e) => {
          e.preventDefault()
          setPassword(e.target.value)
        }} placeholder="enter password"></input>

        <button className='w-28 h-10 bg-[#2196F3] rounded-md absolute bottom-0 right-0' onClick={(e) => {
          e.preventDefault()
          handleLogin(e);
        }}>sign-in</button>
      </section>


      <Link to="/auth/login" className='text-blue-600'>already a user? sign-in instead</Link>


    </div>
  )
}

export default Register