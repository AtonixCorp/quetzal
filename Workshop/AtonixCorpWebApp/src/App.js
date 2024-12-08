import React, { Suspense } from 'react';
import './scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import CustomHeader from './components/Custom/CustomHeader';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CustomHeader />
        <Home />
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <div style={{ height: '2px', backgroundColor: 'black' }}></div>
            <Footer />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;