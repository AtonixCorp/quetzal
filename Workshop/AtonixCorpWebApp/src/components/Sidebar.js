import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><button className="sidebar-link" onClick={() => alert('Data Analytics clicked')}>Data Analytics</button></li>
        <li><button className="sidebar-link" onClick={() => alert('IoT Solutions clicked')}>IoT Solutions</button></li>
        <li><button className="sidebar-link" onClick={() => alert('Agriculture Technology clicked')}>Agriculture Technology</button></li>
        <li><button className="sidebar-link" onClick={() => alert('Oil Technology Research clicked')}>Oil Technology Research</button></li>
        <li><button className="sidebar-link" onClick={() => alert('Security Research clicked')}>Security Research</button></li>
        <li><button className="sidebar-link" onClick={() => alert('Robotic and Computational Solutions clicked')}>Robotic and Computational Solutions</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;