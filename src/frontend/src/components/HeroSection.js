import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section bg-light p-2 rounded mb-2 shadow-sm">
      <section className="journey-section bg-white p-2 rounded shadow-sm">
        <h1 className="hero-section-title">
          <span className="color1">H</span>
          <span className="color2">y</span>
          <span className="color3">d</span>
          <span className="color4">r</span>
          <span className="color5">0</span>
          <span className="color6">v</span>
          <span className="color7">i</span>
          <span className="color8">s</span>
          <span className="color9">i</span>
          <span className="color10">0</span>
        </h1>

        <p>
          Whether you’re a seasoned pro or a curious beginner,{' '}
          <strong>Hydrovisio</strong> is your tech compass. Buckle up, explore,
          and let’s geek out together!
        </p>
        <p>
          👉{' '}
          <a href="#" className="btn btn-primary">
            Start Exploring
          </a>{' '}
          👈
        </p>
      </section>
    </div>
  );
};

export default HeroSection;


import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUp from '../account/SignUp';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xxl navbar-dark navbar-custom text-white p-1 border border-primary-subtle rounded-3 w-100"
      aria-label="Seventh navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleXxl"
          aria-controls="navbarsExampleXxl"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-bars"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {[
                  'Computing',
                  'Data Science',
                  'Artificial Intelligence',
                  'Physics',
                  'Another action',
                  'IoT',
                  'Quantum Computing',
                  'Hardware Computing',
                  'Chemistry',
                  'Web Development',
                  'Communication',
                  'Mathematics',
                  'Science',
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="dropdown-item small"
                      href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/research">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <form role="search" className="d-flex me-3">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="vertical-line"></div>
          <button
            className="btn btn-primary btn-sm btn-signup"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signUpModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
