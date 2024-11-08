import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import '../Header/Navbar.css'

function Navbar() {
  return (
    <div className='container navMain'>
      <div className='row'>
        <div className='col '>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-pill">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={logo} className = 'logo' alt="StockMe Logo" height="35" />StockMe
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
                </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About Us</Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Services</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
