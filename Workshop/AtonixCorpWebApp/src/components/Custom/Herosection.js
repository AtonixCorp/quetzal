import React from 'react';
import './Herosection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomHeader = () => {
  return (
    <header className="header">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="header-content text-center my-5 tiny-text hero">
          <h1>
            AtonixCorp is a <span className="highlight">Cutting Edge Technology Company</span> Empowering Innovation
            Through Data Analytics 🌐
          </h1>
          <p className="lead">
            Transforming Industries with Data-Driven Solutions
          </p>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;