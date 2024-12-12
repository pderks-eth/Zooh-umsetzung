import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

// Neue Seiten importieren
import ZooMap from './components/ZooMap';
import Tickets from './components/Tickets';
import Fotospots from './components/Fotospots';
import WaitingTimeTracking from './components/WaitingTimeTracking';
import Food from './components/Food';
import ChildrenPage from './components/ChildrenPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidebar />
          <Routes>
            {/* Home (General) */}
            <Route path="/" element={<MainContent />} />
            
            {/* Weitere Seiten */}
            <Route path="/zoomap" element={<ZooMap />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/fotospots" element={<Fotospots />} />
            <Route path="/waiting" element={<WaitingTimeTracking />} />
            <Route path="/food" element={<Food />} />
            <Route path="/children" element={<ChildrenPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
