import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";

function Footer() {
  return (
    <footer className="bg-white text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Shop and Learn</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/mac">Mac</Link></li>
              <li><Link className="footer-link" to="/ipad">iPad</Link></li>
              <li><Link className="footer-link" to="/iphone">iPhone</Link></li>
              <li><Link className="footer-link" to="/watch">Watch</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Apple Music</a></li>
              <li><a className="footer-link" href="#">Apple TV+</a></li>
              <li><a className="footer-link" href="#">iCloud</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Manage Your Apple ID</a></li>
              <li><a className="footer-link" href="#">Apple Store Account</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2025 Apple Inc</p>
      </div>
    </footer>
  );
}

export default Footer;