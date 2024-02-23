import React, { useState } from 'react';
import '../App.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={isOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <li><a href="/home">Home</a></li>        
          <li><a href="/blog">Menu</a></li>  
          <li><a href="/blog">Reservations</a></li>  
          <li><a href="/blog">Order Online</a></li>  
          <li><a href="/blog">Login</a></li>  
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;