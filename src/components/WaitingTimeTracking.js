import React from 'react';
import '../styles/WaitingTimeTracking.css';
import { FiRadio } from 'react-icons/fi'; // Beispiel: einfacher Kreis als Icon

function WaitingTimeTracking() {
  // Beispiel-Daten
  const areas = [
    { name: 'Panterra', status: 'Frei' },
    { name: 'Affen Welt', status: '1 registrierte Person' },
    { name: 'Terrarium', status: '3 registrierte Personen' },
    { name: 'Savanne', status: '15 registrierte Personen' },
    { name: 'Elefantenpark', status: '25 registrierte Personen' },
    { name: 'Zoolino', status: '30 registrierte Personen' },
    { name: 'Afrika', status: '45 registrierte Personen' },
  ];

  return (
    <div className="waitingtime-container">
      <h1>Wartezeiten</h1>
      <div className="waitingtime-list">
        {areas.map((area, index) => (
          <div className="waitingtime-item" key={index}>
            <div className="waitingtime-name">
              <FiRadio className="waitingtime-icon" />
              <span>{area.name}</span>
            </div>
            <div className="waitingtime-status">{area.status}</div>
            <button className="waitingtime-button">Bin dabei!</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaitingTimeTracking;
