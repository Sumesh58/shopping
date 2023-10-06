import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
   <div className="navbar">
    <div className="wrapper">
        <div className="left">
            <span>EN</span>
            <div className="search">
                <input type="text" placeholder='search' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="center">
  <NavLink to={'/'} className='link'> <h1>MESHO</h1></NavLink>
        </div>
        <div className="right">
         <NavLink className='link' to={'/register'}><div className="menu">REGISTER</div></NavLink>  
         <NavLink className='link' to={'/login'}><div className="menu">SIGN IN</div></NavLink>  
         <NavLink className='link' to={'/product'}><div className="menu">PRODUCT</div></NavLink>   
         <NavLink className='link' to={'/productlist'}><div className="menu">PRODUCT LIST</div></NavLink> 
 <div className="menu">
         <NavLink className='link' to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></NavLink>  
           <p>4</p>
           </div>
        </div>
    </div>
   </div>
  )
}

