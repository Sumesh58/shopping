import React, { useRef, useState } from "react";
import "./mainproduct.scss";
import Annoucement from "../annoucement/Annoucement";
import Navbar from "../navbar/Navbar";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";
export default function Mainproduct() {
    const[state,setState]=useState(1);
    const click=()=>{
        setState(state===1?1:state-1)
    }
  
    const blackRef=useRef()
  return (
    <div className="mainproduct">
      <div className="Wrapper">
        <div className="imgContainer">
          <img ref={blackRef} src="https://static.zara.net/photos///2023/V/0/1/p/0108/026/427/2/w/1920/0108026427_1_1_1.jpg?ts=1677162023880" alt="" />
        </div>
        <div className="infoContainer">
          <h1 >Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            odit architecto magni eligendi sequi, facilis porro cumque
            distinctio autem? Inventore qui earum voluptas nam natus esse, sed
            velit praesentium voluptatum?
          </p>
          <span>$ {20*state}</span>
          <div className="filterContainer">
            <div className="filter">
                <h3>Color</h3>
                <span  style={{backgroundColor:'black'}} onClick={()=>blackRef.current.src='https://cdn.shopify.com/s/files/1/0616/5790/7380/products/3637BlkMndrnJS_2.jpg?v=1658820444'}></span>
                <span style={{backgroundColor:'darkblue'}} onClick={()=>blackRef.current.src="https://static.zara.net/photos///2023/V/0/1/p/0108/026/427/2/w/1920/0108026427_1_1_1.jpg?ts=1677162023880"}></span>
                <span style={{backgroundColor:'gray'}} onClick={()=>blackRef.current.src="https://img.perniaspopupshop.com/catalog/product/o/l/OLVC092111_1.jpg?impolicy=zoomimage"}></span>
            </div>
            <div className="filter">
          <h3>Size</h3>
         <select> 

        <option >XS</option>
        <option >S</option>
        <option >M</option>
        <option >L</option>
        <option >XL</option>
    </select>
            </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
          <button onClick={()=>setState(state+1)}><i class="fa-sharp fa-solid fa-plus"></i></button>
            <div className="amount">
          
            {state}
            
          </div>
          <button onClick={click} ><i class="fa-sharp fa-solid fa-minus"></i></button>
          </div>
          <button className="btn">ADD TO CART</button>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
