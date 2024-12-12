import React from 'react';
import leopardImage from '../images/erkunde die tierwelt.png';
import lionsImage from '../images/erkunde die tierwelt2.png';
import nightSafariImage from '../images/night safari.png';
import lewaSavanneImage from '../images/lewa savanne.png';
import australienImage from '../images/Australien.png';
import affenFuetterungImage from '../images/Affen Füterung.png';


function MainContent() {
  return (
    <main className="main-content">
      <section className="intro-section">
        <h2>Erkunde die Tierwelt</h2>
        <div className="animal-banners">
          <div className="animal-banner">
            <img src={leopardImage} alt="Leopard" />
          </div>
          <div className="animal-banner">
            <img src={lionsImage} alt="Lions" />
          </div>
        </div>
      </section>
      <section className="events-section">
        <h2>Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image-container">
              <img src={nightSafariImage} alt="Night Safari" />
            </div>
            <div className="event-info">
              <h3>Night Safari</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src={lewaSavanneImage} alt="Lewa Savanne" />
            </div>
            <div className="event-info">
              <h3>Lewa Savanne</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src={australienImage} alt="Australien" />
            </div>
            <div className="event-info">
              <h3>Australien</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src={affenFuetterungImage} alt="Affen Fütterung" />
            </div>
            <div className="event-info">
              <h3>Affen Fütterung</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
