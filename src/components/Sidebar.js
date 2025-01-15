import React from 'react';
import { Link } from 'react-router-dom';
import BbwLogo from '../images/bbw_logo.png'; 
 
function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/">General</Link></li>
        <li><Link to="/zoomap">Zoo Map</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/fotospots">Fotospots</Link></li>
        <li><Link to="/waiting">Waiting Time Tracking</Link></li>
        <li><Link to="/food">Food and Drinks</Link></li>
      </ul>
      <div className="sidebar-branding">
        <img src={BbwLogo} alt="BBW Logo" />
      </div>
    </aside>
  );
}
 
export default Sidebar;