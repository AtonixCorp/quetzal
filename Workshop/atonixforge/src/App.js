import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';

import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Herosection from './components/Custom/Herosection';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Developments from './components/headerpage/Developments';
import Community from './components/headerpage/Community';
import Products from './components/headerpage/Products';
import Support from './components/headerpage/Support';
import Company from './components/headerpage/Company';
//import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="App">
    
        <Header />
        <Herosection />
        <Menu />
        <Home />
        <div className="main-container">
          <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/developments/project1" element={<Developments />} />
                <Route path="/developments/project2" element={<Developments />} />
                <Route path="/community/event1" element={<Community />} />
                <Route path="/community/event2" element={<Community />} />
                <Route path="/products" element={<Products />} />
                <Route path="/support/faq" element={<Support />} />
                <Route path="/support/contact" element={<Support />} />
                <Route path="/company/about" element={<Company />} />
                <Route path="/company/careers" element={<Company />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;