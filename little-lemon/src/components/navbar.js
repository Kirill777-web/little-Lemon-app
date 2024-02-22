// create navbar component

import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
     
     <div className='navbar-icon'>
   <img src="/assets/Asset16@4x.png" alt="logo" />
  </div>
     <div className='nav-links'>
     <ul>
    <li><a href="/home">Home</a></li>        
    <li><a href="/about">About Us</a></li>
    <li><a href="/blog">Menu</a></li>  
    <li><a href="/blog">Reservations</a></li>  
    <li><a href="/blog">Order Online</a></li>  
    <li><a href="/blog">Login</a></li>  
  </ul>
  </div>
  
   </nav>
  )
}

export default Navbar;