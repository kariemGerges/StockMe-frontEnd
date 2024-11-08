import React from "react";
import '../Footer/Footer.css'
import logo from '../../assets/logo3.webp'

function Footer () {
    return(
      <footer className="footer mt-auto py-3">
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <div className="footer-left">
              <a href="/home" className="footer-link">Home</a>
              <a href="/about" className="footer-link">About</a>
              <a href="/services" className="footer-link">Services</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div className="col">
            <div className="footer-middle">
              <div className="footer-section">
                <h3>Stay IN TOUCH</h3>
                <p>Mon-Friday<br />10AM-4PM EST</p>
                <a href="/contact" className="footer-link">Contact </a>
                <a href="/instagram" className="footer-link">Instagram </a>
                <a href="/pinterest" className="footer-link">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-section">
              <h3>Join List</h3>
              <form>
                <input type="text" placeholder="First Name" name="firstName" className="form-label" required />
                <input type="email" placeholder="name@example.com" name="email" className="form-label" required />
                <button type="submit" className="btn btn-success">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="footer-right">
            <div className="animation-circle">
              <img src={logo} alt="Logo" className="logo-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="disclaimer-text">
          Disclaimer: The stock information provided on this website is for informational purposes only and should not be considered financial advice.
        </p>
        <p className="designer-credit">
          Designed with ❤️ by Kariem
        </p>
      </div>
    </footer>
    
  );
}


export default Footer;

// Designed with ❤️ by Kariem