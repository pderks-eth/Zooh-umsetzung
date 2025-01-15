import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZooLogo from '../images/logo.png';

function Header({ setLoggedIn}) {  
  const navigate = useNavigate();

  const handleLogout = () => {
    // State auf false setzen
    setLoggedIn(false);

    // Optional: Nach dem Logout zur Login-Seite navigieren
    navigate('/login');
  };

  return (
    <header className="header">
      <div id="zoo-logo" onClick={toggleFunk} className="logo-area">
        <img 
          src={ZooLogo} 
          alt="Zoo Logo" 
          className="zoo-logo"
        />
        {/* Top navigation
        <nav className="top-nav">
          <a href="#general">General</a>
          <a href="#zoomap">Zoo Map</a>
          <a href="#tickets">Tickets</a>
          <a href="#fotospots">Fotospots</a>
          <a href="#waiting">Waiting Time</a>
          <a href="#food">Food</a>
        </nav>
          <a href="#children">Children</a>
        </nav> */}
      </div>
      <div className="header-actions">
      <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
    </header>
    
  );
  
}

function toggleFunk() {
  
}

export default Header;