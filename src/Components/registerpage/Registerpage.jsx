import React from 'react'
import './register.css'
export default function Registerpage() {
  return (
    <div className='Registerpage'>
    <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form >
            <input type="text" placeholder='name' />
            <input type="text" placeholder='last name' />
            <input type="text" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="password"  placeholder='confirm password'/>
      
            <span style={{fontSize:'12px',margin:'20px 0px',fontWeight:400}}>By creating an account ,I consent to the processing of my personal data in
                accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button style={{width:'40%',border:'none',padding:"15px 20px",backgroundColor:"teal",color:'white',cursor:"pointer",fontWeight:500
        }}>CREATE</button>
        </form>
    </div>
    </div>
  )
}
