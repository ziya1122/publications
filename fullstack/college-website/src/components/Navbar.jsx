import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Fr. Conceicao Rodrigues<br />College of Engineering
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/collaborations">Collaboration</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
