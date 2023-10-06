import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h1>MESHO</h1>
        <div className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable
        </div>
        <div className="socialcontainer">
        <div className="icon" style={{backgroundColor:"#3B5999"}}>
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="icon" style={{backgroundColor:"#E4405F"}}>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="icon" style={{backgroundColor:"#55ACEE"}}>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="icon" style={{backgroundColor:"#E60023"}}>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
      </div>
      
      <div className="center">
        <h3>Useful Links</h3>
        <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Man Fashion</li>
            <li>Woman Fashion</li>
            <li>Accesories</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Whislist</li>
            <li> Terms</li>
            <li>Conditions</li>

        </ul>

      </div>
      <div className="right">

        <h3>Contact</h3>
        <div className="contactItem"><i class="fa-solid fa-location-dot"></i>622 Dixie Path , South Tobinchester 98336</div>
        <div className="contactItem"><i class="fa-solid fa-phone"></i>+1 234 56 78</div>
        <div className="contactItem"><i class="fa-solid fa-envelope"></i>contact@mesho.dev</div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
}
