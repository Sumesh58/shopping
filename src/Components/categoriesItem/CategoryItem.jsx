import React from 'react'
import './categoryItem.scss'
export default function CategoryItem({item}) {
  return (
  <div className="categoryItem">
       <img src={item.img} alt="" />
       <div className="info">
       <h1>{item.title}</h1>
       <button>SHOP NOW</button>
       </div>
      
  </div>
  )
}
