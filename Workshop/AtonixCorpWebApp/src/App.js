
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import Herosection from './components/Custom/Herosection';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Herosection />
        <Menu />
        <Home />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;