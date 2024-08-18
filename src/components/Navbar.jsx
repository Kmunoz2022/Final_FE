import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/employees">All Employees</Link>
        <Link to="/tasks">All Tasks</Link>
      </div>
    </nav>
  );
}

export default Navbar;
