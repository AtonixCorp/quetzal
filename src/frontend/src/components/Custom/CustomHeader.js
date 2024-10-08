import React from 'react';

import './CustomHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomHeader = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="atonixcorp-text">
            <span className="color1">A</span>
            <span className="color2">t</span>
            <span className="color3">o</span>
            <span className="color4">n</span>
            <span className="color5">i</span>
            <span className="color6">x</span>
            <span className="color7">c</span>
            <span className="color8">o</span>
            <span className="color9">r</span>
            <span className="color10">p</span>
          </span>
        </div>
      </header>
    </>
  );
};

export default CustomHeader;
