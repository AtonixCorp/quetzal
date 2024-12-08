import React, { useState } from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setShowLanguage(false); // Hide language dropdown if search is shown
    };

    const toggleLanguage = () => {
        setShowLanguage(!showLanguage);
        setShowSearch(false); // Hide search input if language dropdown is shown
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <img 
                    src={`${process.env.PUBLIC_URL}/logo512.png`} 
                    alt="Logo"
                    className="logo"
                />
                <span className="logo-text">Atonixcorp</span>
            </div>
            <div className="nav">
                <span className="nav-item">Developments</span>
                <span className="nav-item">Community</span>
                <span className="nav-item">Products</span>
                <span className="nav-item">Support</span>
                <span className="nav-item">Company</span>
            </div>
            <div className="icon-container">
                <FontAwesomeIcon icon={faSearch} className="icon search-icon" onClick={toggleSearch} />
                {showSearch && (
                    <input type="text" className="search-bar" placeholder="Search..." />
                )}
                <FontAwesomeIcon icon={faGlobe} className="icon translator-icon" onClick={toggleLanguage} />
                {showLanguage && (
                    <select className="translator">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        
                    </select>
                )}
            </div>
            <button className="cta-button">
                <span className="cta-text">Log on to Hub</span>
            </button>
        </div>
    );
}

export default Header;