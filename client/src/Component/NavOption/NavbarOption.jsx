import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarOption.css';

const NavbarOption = () => {
   return (
      <>
         <div className="navbar-option">
            <ul className='menu-item'>
               <Link className='no-style'><li>Home</li></Link>
               <Link className='no-style'><li>Projects</li></Link>
               <Link className='no-style'><li>Blog</li></Link>
               <Link className='no-style'> <li>Shop</li></Link>
               <Link className='no-style'> <li>Services</li></Link>
            </ul>
         </div>

      </>
   )
}

export default NavbarOption;