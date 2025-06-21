import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
const Navbar1 = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/why">Why Us?</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar1;
