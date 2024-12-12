import React from 'react';
import '../../src/styles/ZooMap.css';
import ZooMapImage from '../images/zoo-map.png';

function ZooMap() {
  return (
    <div className="zoo-map-container">
      <h1>Zoo Map</h1>
      <div className="zoo-map-content">
        <img 
          src={ZooMapImage} 
          alt="Zoo Map" 
          className="zoo-map-image"
        />
      </div>
    </div>
  );
}

export default ZooMap;
