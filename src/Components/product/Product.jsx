import React, { useState } from 'react'
import './product.scss'
export default function Product({item}) {
  const[state,setstate]=useState(true)
  return (
    <div className='product'>
        <div className="circle"></div>
        <img src={item.img} alt="" />
        <div className="info">
          <div className="icon">
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="icon" >
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
       
          <div className="icon" onClick={()=>setstate(!state)} style={state?{color:"black"}:{color:"red"}} >
         <i class="fa-solid fa-heart"></i>
          </div>
       
       
        </div>
    </div>
  )
}
