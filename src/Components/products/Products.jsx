import React from 'react'
import './products.scss'
import { popularproduct } from '../../data'
import Product from '../product/Product'
export default function Products() {
  return (
    <div className='products'>
      {popularproduct.map((item)=>{
        return <Product
        key={item.id}
        item={item}
        />
      })}
    </div>
  )
}
