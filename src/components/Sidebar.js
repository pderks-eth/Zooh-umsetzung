import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/">General</Link></li>
        <li><Link to="/zoomap">Zoo Map</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/fotospots">Fotospots</Link></li>
        <li><Link to="/waiting">Waiting Time Tracking</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
      <div className="sidebar-branding">
        <img src="path-to-brand-logo.png" alt="Brand Logo" />
      </div>
    </aside>
  );
}

export default Sidebar;
