import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/why" onClick={() => setIsOpen(false)}>Why Us?</NavLink></li>
        <li><NavLink to="/career" onClick={() => setIsOpen(false)}>Career</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
