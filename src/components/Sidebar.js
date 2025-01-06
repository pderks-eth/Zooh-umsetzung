import React from 'react';
import BbwLogo from '../images/bbw_logo.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li><a href="#general">General</a></li>
        <li><a href="#zoomap">Zoo Map</a></li>
        <li><a href="#tickets">Tickets</a></li>
        <li><a href="#fotospots">Fotospots</a></li>
        <li><a href="#waiting">Waiting Time Tracking</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#children">Children&apos;s Page</a></li>
      </ul>
      <div className="sidebar-branding">
        <img src={BbwLogo} alt='BBW Logo'/>
      </div>
    </aside>
  );
}

export default Sidebar;
