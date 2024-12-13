import React from 'react';
import './Herosection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Herosection = () => {
  return (
    <header className="herosection">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="herosection-content text-center my-5 tiny-text">
          <h1 className="hero-title">
            Be Part of Developing the Future of Atonixcorp!
          </h1>
          <p className="hero-subtitle">
            Join the Developer Preview Program to see what we are building and make an impact on the future of Atonixcorp products.
            Help us shape the future of Atonixcorp products by providing feedback.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Herosection;