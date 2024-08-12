import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = ({path="login"}) => {
    const[count , setCount] =useState(5)
    const navigate =useNavigate()
    const location=useLocation()

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount((preValue)=>--preValue);
        },1000);
        count===0 && navigate(`/${path}`,{
            state:location.pathname
        })
        return ()=>clearInterval(interval)
    },[count,navigate,location,path])

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" 
      style={{height:"100vh"}}>
      <h1 className='text-center'>Redirecting to you in {count} seconds</h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  )
}

export default Spinner
