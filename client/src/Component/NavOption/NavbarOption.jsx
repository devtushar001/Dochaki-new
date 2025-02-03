import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavbarOption.css';
import { DochakiContext } from '../../Context/DochakiContext'
const NavbarOption = () => {
   const { setNavbar } = useContext(DochakiContext);
   return (
      <>
         <div className="navbar-option">
            <ul className='menu-item'>
               <Link onClick={() => setNavbar(false)} to={"/"} className='no-style'><li>Home</li></Link>
               <Link onClick={() => setNavbar(false)} to={"/projects"} className='no-style'><li>Projects</li></Link>
               <Link onClick={() => setNavbar(false)} to={"/blogs"} className='no-style'><li>Blog</li></Link>
               <Link onClick={() => setNavbar(false)} to={"/shop"} className='no-style'> <li>Shop</li></Link>
               <Link onClick={() => setNavbar(false)} to={"/services"} className='no-style'> <li>Services</li></Link>
            </ul>
         </div>

      </>
   )
}

export default NavbarOption;