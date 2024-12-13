import React from 'react';
import '../styles/Fotospots.css';
// import SnakeImage from '../images/snake.jpg'; // Beispielbildpfad anpassen

function Fotospots() {
  return (
    <div className="fotospots-container">
      <h1>Tipps zum Fotografieren</h1>
      <div className="fotospots-content">
        <div className="fotospots-text">
          <h2>Generelle Hinweise</h2>
          <ul className="general-notes">
            <li>Erkundigen Sie sich nach den Fütterungszeiten; hier ergeben sich spannende Fotomotive.</li>
            <li>Fotografieren Sie zu jedem Tier die Infotafel an der Anlage, damit Sie zuhause wissen, was Sie aufgenommen haben.</li>
            <li>Legen Sie die Schärfe auf das Auge des Tieres.</li>
            <li>Platzieren Sie das Hauptsujet nicht in die Mitte. Ihre Bilder wirken dadurch spannender.</li>
            <li>Achten Sie auf einen geraden Horizont. Dies ist vor allem wichtig bei Aufnahmen mit Wasser (z.B. Pinguine).</li>
            <li>Machen Sie weniger, dafür gute Bilder.</li>
            <li>Nehmen Sie sich Zeit und warten Sie auf den besten Moment.</li>
            <li>Stellen Sie den Weissabgleich auf «automatisch» ein.</li>
            <li>Achten Sie darauf, folgende Verschlusszeiten nicht zu unterschreiten (Verwackelungsgefahr):  
                Weitwinkelobjektiv 1/30s, Normalobjektiv 1/125s, Teleobjektiv 1/250s.</li>
          </ul>

          <ul className="additional-notes">
            <li>Bei Gegenlicht</li>
            <li>Durch Glasscheiben</li>
            <li>Durch Aquariumglasscheiben</li>
            <li>Bei starkem Hell-/Dunkel-Kontrast</li>
          </ul>

          <ul className="additional-notes">
            <li>Bei schwachem Licht</li>
            <li>Im Nahbereich (Makro)</li>
            <li>Durch Gitter</li>
            <li>Schnell bewegte Objekte</li>
          </ul>
        </div>

        <div className="fotospots-image-container">
          {/* <img src={SnakeImage} alt="Snake" className="fotospots-image" /> */}
        </div>
      </div>
    </div>
  );
}

export default Fotospots;
