import React, { useContext } from "react";
import { imageData } from "../../assets/dochakiData";
import "./Navbar.css";
import { DochakiContext } from "../../Context/DochakiContext";
import { Link } from "react-router-dom";

const Navbar = () => {
   const { navbar, setNavbar } = useContext(DochakiContext);

   const reloadWebPage = () => {
      window.location.reload()
   };

   return (
      <div className="navbar">
         <div className="left">
            <div onClick={() => setNavbar(!navbar)} className="menu-icon">
               <img src={!navbar ? imageData.menu_icon : imageData.close_icon} alt="Menu Icon" />
               {!navbar ? <span>Menu</span> : <span>Close</span>}
            </div>
            {!navbar ?
               <>
                  <img src={imageData.search_icon} alt="Search Icon" />
                  <Link to='/contact-us'> <img src={imageData.location_icon} alt="Location Icon" /></Link>
               </>
               : ""}
         </div>
         <div className="right">
            <img onClick={reloadWebPage} src={imageData.dochaki_logo} alt="Dochaki Logo" />
         </div>
      </div>
   );
};

export default Navbar;
