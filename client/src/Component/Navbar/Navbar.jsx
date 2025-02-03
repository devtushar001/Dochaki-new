import React, { useContext } from "react";
import { imageData } from "../../assets/dochakiData";
import "./Navbar.css";
import { DochakiContext } from "../../Context/DochakiContext";

const Navbar = () => {
   const { navbar, setNavbar } = useContext(DochakiContext);

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
                  <img src={imageData.location_icon} alt="Location Icon" />
               </>
               : ""}
         </div>
         <div className="right">
            <img src={imageData.dochaki_logo} alt="Dochaki Logo" />
         </div>
      </div>
   );
};

export default Navbar;
