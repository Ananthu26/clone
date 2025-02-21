import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.apple.com/favicon.ico"
            alt="Apple Logo"
            width="20"
            height="20"
            className="me-2"
          />
          Apple
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/mac">Mac</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ipad">iPad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iphone">iPhone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch">Watch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;