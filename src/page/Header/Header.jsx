import React, { useState } from 'react';
import './Header.css';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  return (
   <header className="header">
      <div className="header-inner">
        <div className="left">
          <button className="hamburger" onClick={toggleMenu}>☰</button>
          <div className="logo">
           <Link to="/"><img src={logo} /></Link>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#">FAQ</a>
          <a href="#">Reviews</a>
          <a href="#">Pricing</a>
        </nav>

        <button className="get-started">Get started</button>
      </div>

      {/* Mobile nav (below header) */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <a href="#">FAQ</a>
          <a href="#">Reviews</a>
          <a href="#">Pricing</a>
        </div>
      )}
    </header>
  )
  
};

export default Header;
