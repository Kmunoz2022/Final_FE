import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Home</Link>

        <div className="navbar-right">
          <Link to="/employees" className="navbar-item">All Employees</Link>
          <Link to="/tasks" className="navbar-item">All Tasks</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
