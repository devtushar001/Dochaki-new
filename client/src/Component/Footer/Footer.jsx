import React, { useContext, useEffect } from "react";
import './Footer.css'
import { Link, useNavigate } from "react-router-dom";
import { imageData } from "../../assets/dochakiData";

const Footer = () => {
   const navigate = useNavigate();
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth',  // Adds smooth scrolling animation
      });
   }


   return (
      <>
         <div className="footer" id="footer">
            <div className="footer-content">
               <div className="footer-content-left">
                  <img className="logo-image" src={imageData.dochaki_logo} alt="" />
                  <p>Welcome to Dochaki Designs,<br /> We are motivated to give you better product and services....</p>
                  <div className="footer-social-icon">
                     {/* <img src={imageData.dochaki_logo} alt="" /><img src={fassets.twitter_icon} alt="" /><img src={fassets.linkedin_icon} alt="" /> */}
                  </div>
               </div>
               <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                     <Link className="no-style-link" to='/'><li onClick={scrollToTop}>Home</li></Link>
                     <Link className="no-style-link" to='/about-us'><li onClick={scrollToTop}>About Us</li></Link>
                     <Link className="no-style-link" to='/myorders'> <li onClick={scrollToTop}>My Orders</li></Link>
                     <Link className="no-style-link" to='/privacy-policy'><li onClick={scrollToTop}>Privecy Policy</li></Link>
                  </ul>
               </div>
               <div className="footer-content-right">
                  <h2>GET IN TOUCH</h2>
                  <ul>
                     <li>+91-880-679-5165</li>
                     <li>dochakidesigns@gmail.com</li>
                  </ul>
               </div>
            </div>
            <p className="footer-copyright">
               Copyright 2024 &#169; dochaki.com - All Right Reserved.
            </p>
         </div>
      </>
   )
}

export default Footer;