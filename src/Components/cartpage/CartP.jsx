import React from "react";
import "./cart.scss";
import Navbar from "../navbar/Navbar";
import Annoucement from "../annoucement/Annoucement";
import Footer from "../footer/Footer";
export default function CartP() {
  return (
    <div className="cart">
     
      <div className="wrapper">
        <h1>YOUR BAG</h1>
        <div className="top">
          <button>CONTINUE SHOPPING</button>
          <div className="text">
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0) </span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product2">
              <div className="productDetail">
                <img
                  src="https://karamonline.com/media/catalog/product/cache/1/image/1200x1300/9df78eab33525d08d6e5fb8d27136e95/f/s/fs210-main.png"
                  alt=""
                />
                <div className="detail">
                  <span>
                    
                    <b>Product :</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
              
                    <b>ID :</b> 9763997645
                  </span>
                  <div className="div1"></div>
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="Productamount">
                  <i class="fa-sharp fa-solid fa-plus"></i>
                  <span>2</span>
                  <i class="fa-sharp fa-solid fa-minus"></i>
                </div>
                <span>$ 30</span>
              </div>
            </div>
            <hr />
            <div className="product2">
              <div className="productDetail">
                <img
                  src='https://stuckeys.com/wp-content/uploads/2022/10/Retro-Logo-Tshirt-Royal-Blue.png'
                  alt=""
                />
                <div className="detail">
                  <span>
          
                    <b>Product :</b> HAKURA T-SHIRT
                  </span>
                  <span>
                  
                    <b>ID :</b> 9763997645
                  </span>
                  <div className="div2" ></div>
                  <span>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="Productamount">
                  <i class="fa-sharp fa-solid fa-plus"></i>
                  <span>1</span>
                  <i class="fa-sharp fa-solid fa-minus"></i>
                </div>
                <span>$ 20</span>
              </div>
            </div>
          </div>

          <div className="summary"> 
          <h1>ORDER SUMMARY</h1>
          <div className="summaryItem">
            <span>Subtotal</span>
            <span>$ 80</span>
          </div>
          <div className="summaryItem">
            <span>Estimated Shipping</span>
            <span>$ 5.90</span>
          </div>
          <div className="summaryItem">
            <span>Shipping Discount</span>
            <span>$ -5.90</span>
          </div>
          <div className="summaryItem">
            <span className="total">Total</span>
            <span className="total">$ 80</span>
          </div>
          <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
