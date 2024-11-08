import React from 'react';
import stockImage1 from '../../assets/st1.jpeg'
import stockImage2 from '../../assets/st2.jpeg'
import stockImage3 from '../../assets/st3.webp'

function Hero() {
    return(
        <section className="hero">
      <div className="container-fluid hero-container">
        <div className="row">
          <div className="col-md-6 hero-text">
            <h1>Advanced Stock Analysis</h1>
            <p>Leverage AI to make informed investment decisions.</p>
            <a href="#analyze" className="btn btn-primary">Analyze Now</a>
          </div>
          <div className="col-md-6 hero-image">
            <img src={stockImage1} alt="Stock 1" className="stock stock1" />
            <img src={stockImage2} alt="Stock 2" className="stock stock2" />
            <img src={stockImage3} alt="Stock 3" className="stock stock3" />
          </div>
        </div>
      </div>
    </section>
    )
};

export default Hero;
