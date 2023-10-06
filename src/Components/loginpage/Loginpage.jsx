import React from 'react'
import './login.scss'
export default function Loginpage() {
  return (
    <div className='login'>
<div className="wrapper">
        <h1>SIGN IN</h1>
        <form >
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button style={{width:'40%',border:'none',padding:"10px 15px",backgroundColor:"teal",color:'white',cursor:"pointer",fontWeight:500,marginTop:'10px'
        }}>LOGIN</button>
        <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
        <a href="">CREATE A NEW ACCOUNT</a>
        </form>
    </div>

    </div>
  )
}
