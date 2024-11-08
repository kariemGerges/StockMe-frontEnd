import React from "react";
import teamImage from '../../assets/st1.jpeg'
import '../About/About.css'


function About() {
    return (
        <div className="about-us">
          <div className="container">
            <h1>About Us</h1>
            <p className="intro">
              Welcome to StockMe, your trusted partner in stock analysis and investment insights. Our mission is to empower investors with cutting-edge AI tools and data-driven insights to make informed investment decisions.
            </p>
    
            <div className="mission-values">
              <h2>Our Mission</h2>
              <p>
                At StockMe, we are committed to providing transparent, accurate, and timely stock analysis to help our users achieve their financial goals. Our AI-powered platform delivers personalized recommendations and market analysis tailored to your investment preferences.
              </p>
    
              <h2>Our Values</h2>
              <ul>
                <li>Integrity: We believe in maintaining the highest standards of honesty and integrity in all our actions.</li>
                <li>Innovation: We continuously strive to innovate and improve our platform to provide the best tools and insights to our users.</li>
                <li>Customer-Centric: Our users are at the heart of everything we do. We are dedicated to providing exceptional service and support.</li>
                <li>Transparency: We are committed to transparency in our processes and data, ensuring our users have full visibility into their investments.</li>
              </ul>
            </div>
    
            <div className="team-section">
              <h2>Meet Our Team</h2>
              <img src={teamImage} alt="Our Team" className="team-image" />
              <p>
                Our team of experts is passionate about finance and technology. We combine our knowledge and expertise to create a platform that serves both novice and experienced investors.
              </p>
            </div>
          </div>
        </div>
      );
};

export default About;