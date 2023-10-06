import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Annoucement from '../Components/annoucement/Annoucement'
import Slider from '../Components/slider/Slider'
import Category from '../Components/category/Category'
import Products from '../Components/products/Products'
import Newsletter from '../Components/newsletter/Newsletter'
import Footer from '../Components/footer/Footer'

export default function Home() {
  return (
    <div>
        <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
