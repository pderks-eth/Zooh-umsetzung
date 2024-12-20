import React from 'react';
import ZooLogo from '../images/zooh-logo-png-transparent.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img 
          src={ZooLogo} 
          alt="Zoo Logo" 
          className="zoo-logo"
        />
        {/* Top navigation */}
        <nav className="top-nav">
          <a href="#general">General</a>
          <a href="#zoomap">Zoo Map</a>
          <a href="#tickets">Tickets</a>
          <a href="#fotospots">Fotospots</a>
          <a href="#waiting">Waiting Time</a>
          <a href="#food">Food</a>
          <a href="#children">Children</a>
        </nav>
      </div>
      <div className="header-actions">
        <button className="logout-btn">Log Out</button>
      </div>
    </header>
  );
}

export default Header;
