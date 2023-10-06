import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import Product from './Pages/Product'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Cart from './Pages/Cart'

import Navbar from './Components/navbar/Navbar'
import Annoucement from './Components/annoucement/Annoucement'
export default function App() {
  return (
    <>

<Annoucement/>
        <Navbar/>
<Routes>

  <Route exact path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/productlist' element={<ProductList/>}/>
</Routes>




</>
  )
}
