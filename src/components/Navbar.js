import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Math Magicians</h1>
      <div className="nav-contianer">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/calculator" className="nav-item bordered">Calculator</Link>
        <Link to="/quote" className="nav-item">Quote</Link>
      </div>
    </nav>
  );
}
export default Navbar;
