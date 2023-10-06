import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Annoucement from '../Components/annoucement/Annoucement'
import Products from '../Components/products/Products'
import Newsletter from '../Components/newsletter/Newsletter'
import Footer from '../Components/footer/Footer'
import './productlist.scss'
export default function ProductList() {

    
    
  return (
    <div className='productlist'>

<h1 >Dresses</h1>
<div className="fliterContainer">
<div  className='filterlist'>
    <span >Filter Products:</span>
    <select  >
        <option  disabled selected>Color</option>
        <option >White</option>
        <option >Black</option>
        <option >Red</option>
        <option >Blue</option>
        <option >Yellow</option>
    </select>
    <select >
        <option  disabled selected>Size</option>
        <option >XS</option>
        <option >S</option>
        <option >M</option>
        <option >L</option>
        <option >XL</option>
    </select>
    </div>
<div  className='side'>
    <span >Sort Products:</span>
    <select>
        <option selected>Newest</option>
        <option >price (asc)</option>
        <option >Black (desc)</option>
    </select>
    </div>
</div>
<Products/>
<Newsletter/>
<Footer/>
    </div>
  )
}
