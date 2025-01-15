import React, { useState } from 'react';
import '../styles/WaitingTimeTracking.css';
import { FiRadio } from 'react-icons/fi';

function WaitingTimeTracking() {
  const initialAreas = [
    { name: 'Panterra', status: 'Frei', count: 0, isJoined: false },
    { name: 'Affen Welt', status: '1 registrierte Person', count: 1, isJoined: false },
    { name: 'Terrarium', status: '3 registrierte Personen', count: 3, isJoined: false },
    { name: 'Savanne', status: '15 registrierte Personen', count: 15, isJoined: false },
    { name: 'Elefantenpark', status: '25 registrierte Personen', count: 25, isJoined: false },
    { name: 'Zoolino', status: '30 registrierte Personen', count: 30, isJoined: false },
    { name: 'Afrika', status: '45 registrierte Personen', count: 45, isJoined: false },
  ];

  const [areas, setAreas] = useState(initialAreas);

  // Function to handle "Bin dabei!" click
  const handleJoin = (index) => {
    setAreas((prevAreas) => {
      const updatedAreas = [...prevAreas];
      updatedAreas[index].count += 1;
      updatedAreas[index].status =
        updatedAreas[index].count === 1 ? `${updatedAreas[index].count} registrierte Person` : `${updatedAreas[index].count} registrierte Personen`;
      updatedAreas[index].isJoined = true; // Mark as joined
      return updatedAreas;
    });
  };

  // Function to handle "Bin doch nicht dabei!" click
  const handleLeave = (index) => {
    setAreas((prevAreas) => {
      const updatedAreas = [...prevAreas];
      updatedAreas[index].count = Math.max(0, updatedAreas[index].count - 1); // Prevent negative count
      updatedAreas[index].status =
        updatedAreas[index].count === 1 ? `${updatedAreas[index].count} registrierte Person` : `${updatedAreas[index].count} registrierte Personen`;
      updatedAreas[index].isJoined = false; // Mark as not joined
      return updatedAreas;
    });
  };

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
            {area.isJoined ? (
              <button
                className="waitingtime-button leave-button"
                onClick={() => handleLeave(index)}
              >
                Bin doch nicht dabei!
              </button>
            ) : (
              <button
                className="waitingtime-button join-button"
                onClick={() => handleJoin(index)}
              >
                Bin dabei!
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaitingTimeTracking;
