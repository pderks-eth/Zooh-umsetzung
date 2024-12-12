import React from 'react';

function MainContent() {
  return (
    <main className="main-content">
      <section className="intro-section">
        <h2>Erkunde die Tierwelt</h2>
        <div className="animal-banners">
          <div className="animal-banner">
            <img src="public\images\erkunde die tierwelt.png" alt="Leopard" />
          </div>
          <div className="animal-banner">
            <img src="public\images\erkunde die tierwelt2.png" alt="Lions" />
          </div>
        </div>
      </section>
      <section className="events-section">
        <h2>Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-image-container">
              <img src="public\images\night safari.png" alt="Night Safari" />
            </div>
            <div className="event-info">
              <h3>Night Safari</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src="public\images\lewa savanne.png" alt="Lewa Savanne" />
            </div>
            <div className="event-info">
              <h3>Lewa Savanne</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src="public\images\Australien.png" alt="Australien" />
            </div>
            <div className="event-info">
              <h3>Australien</h3>
            </div>
          </div>
          <div className="event-card">
            <div className="event-image-container">
              <img src="public\images\Affen Füterung.png" alt="Affen Fütterung" />
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
