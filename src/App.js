import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateContentLayout } from './updateContentLayout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
import ZooMap from './components/ZooMap';
import Tickets from './components/Tickets';
import Fotospots from './components/Fotospots';
import WaitingTimeTracking from './components/WaitingTimeTracking';
import Food from './components/Food';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Each time loggedIn changes, update layout
    updateContentLayout(loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <div className="app-container">
        {/* Header und Sidebar ggf. nur anzeigen, wenn loggedIn? */}
        {loggedIn && <Header setLoggedIn={setLoggedIn} />}
        <div className="content-container">
          {loggedIn && <Sidebar />}
          <Routes>
            {/* Login */}
            <Route 
              path="/login" 
              element={<LoginPage setLoggedIn={setLoggedIn} />} 
            />
            
            {/* Inhalte nur zugänglich, wenn eingeloggt */}
            <Route path="/" element={
              loggedIn ? <MainContent /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
            <Route path="/zoomap" element={
              loggedIn ? <ZooMap /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
            <Route path="/tickets" element={
              loggedIn ? <Tickets /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
            <Route path="/fotospots" element={
              loggedIn ? <Fotospots /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
            <Route path="/waiting" element={
              loggedIn ? <WaitingTimeTracking /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
            <Route path="/food" element={
              loggedIn ? <Food /> : <LoginPage setLoggedIn={setLoggedIn} />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
