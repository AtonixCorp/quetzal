import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <div className="nav-list">
        <div className="nav-item" onClick={() => navigate('/data-analytics')}>
          <span className="nav-link">Data Analytics</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/iot-solutions')}>
          <span className="nav-link">IoT Solutions</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/agriculture-technology')}>
          <span className="nav-link">Agriculture Technology</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/oil-technology-research')}>
          <span className="nav-link">Oil Technology Research</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/security-research')}>
          <span className="nav-link">Security Research</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/robotic-solutions')}>
          <span className="nav-link">Robotic Solutions</span>
        </div>
      </div>
      <div className="nav">
        <span className="nav-item">Developments</span>
        <span className="nav-item">Community</span>
        <span className="nav-item">Products</span>
        <span className="nav-item">Support</span>
        <span className="nav-item">Company</span>
      </div>
    </nav>
  );
};

export default Sidebar;