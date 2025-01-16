import React, { useState } from 'react';
import '../styles/Fotospots.css';
import SnakeImage from '../images/Snake.png';

function Fotospots() {
  const [isGeneralNotesVisible, setIsGeneralNotesVisible] = useState(false);
  const [isBacklightVisible, setIsBacklightVisible] = useState(false);
  const [isGlassVisible, setIsGlassVisible] = useState(false);
  const [isAquariumVisible, setIsAquariumVisible] = useState(false);
  const [isContrastVisible, setIsContrastVisible] = useState(false);
  const [isLowLightVisible, setIsLowLightVisible] = useState(false);
  const [isMacroVisible, setIsMacroVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isFastMotionVisible, setIsFastMotionVisible] = useState(false);

  return (
    <div className="fotospots-container">
      <h1>Tipps zum Fotografieren</h1>
      <div className="fotospots-content">
        <div className="fotospots-text">
          <li>
            <h2 onClick={() => setIsGeneralNotesVisible((prev) => !prev)} className="clickable-heading">
              Generelle Hinweise
            </h2>
          </li>
          <ul className={`general-notes ${isGeneralNotesVisible ? 'visible' : ''}`}>
              <div className="fotospots-image-container">
                <img src={SnakeImage} alt="Snake" className="fotospots-image" />
              </div>
              <div className="fotospots-text">
                <li>Erkundigen Sie sich nach den Fütterungszeiten; hier ergeben sich spannende Fotomotive.</li>
                <li>Fotografieren Sie zu jedem Tier die Infotafel an der Anlage, damit Sie zuhause wissen, was Sie aufgenommen haben.</li>
                <li>Legen Sie die Schärfe auf das Auge des Tieres.</li>
                <li>Platzieren Sie das Hauptsujet nicht in die Mitte. Ihre Bilder wirken dadurch spannender.</li>
                <li>Achten Sie auf einen geraden Horizont. Dies ist vor allem wichtig bei Aufnahmen mit Wasser (z.B. Pinguine).</li>
                <li>Machen Sie weniger, dafür gute Bilder.</li>
                <li>Nehmen Sie sich Zeit und warten Sie auf den besten Moment.</li>
                <li>Stellen Sie den Weissabgleich auf «automatisch» ein.</li>
                <li>
                  Achten Sie darauf, folgende Verschlusszeiten nicht zu unterschreiten (Verwackelungsgefahr):
                  Weitwinkelobjektiv 1/30s, Normalobjektiv 1/125s, Teleobjektiv 1/250s.
                </li>
              </div>
          </ul>

          <li><h2 onClick={() => setIsBacklightVisible((prev) => !prev)} className="clickable-heading">Bei Gegenlicht</h2></li>
          <ul className={`general-notes ${isBacklightVisible ? 'visible' : ''}`}>
            <li>Vermeiden Sie starke Schatten, indem Sie bei Gegenlicht Aufhellblitze oder Reflektoren verwenden.</li>
            <li>Nutzen Sie den HDR-Modus der Kamera, um Details in hellen und dunklen Bereichen zu erhalten.</li>
            <li>Stellen Sie sicher, dass das Hauptsujet gut ausgeleuchtet bleibt, indem Sie eine geeignete Position wählen.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsGlassVisible((prev) => !prev)} className="clickable-heading">
              Durch Glasscheiben
            </h2>
          </li>
          <ul className={`general-notes ${isGlassVisible ? 'visible' : ''}`}>
            <li>Halten Sie die Kamera möglichst nah an die Scheibe, um Reflexionen zu vermeiden.</li>
            <li>Nutzen Sie eine Streulichtblende oder decken Sie den Bereich um die Kamera mit einem Tuch ab.</li>
            <li>Fotografieren Sie im rechten Winkel zur Scheibe, um Verzerrungen zu minimieren.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsAquariumVisible((prev) => !prev)} className="clickable-heading">
              Durch Aquariumglasscheiben
            </h2>
          </li>
          <ul className={`general-notes ${isAquariumVisible ? 'visible' : ''}`}>
            <li>Stellen Sie den Weißabgleich der Kamera auf "Kunstlicht" ein, um die Farbstimmung des Wassers zu korrigieren.</li>
            <li>Deaktivieren Sie den Blitz, um störende Reflexionen zu vermeiden.</li>
            <li>Nutzen Sie hohe ISO-Werte und eine große Blende, um auch bei schwachem Licht scharfe Bilder zu erhalten.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsContrastVisible((prev) => !prev)} className="clickable-heading">
              Bei starkem Hell-/Dunkel-Kontrast
            </h2>
          </li>
          <ul className={`general-notes ${isContrastVisible ? 'visible' : ''}`}>
            <li>Verwenden Sie den manuellen Modus oder den Belichtungsausgleich, um den Dynamikumfang zu steuern.</li>
            <li>Nutzen Sie Schatten als Gestaltungselement, um mehr Dramatik in die Fotos zu bringen.</li>
            <li>Überprüfen Sie das Histogramm Ihrer Kamera, um Über- und Unterbelichtung zu vermeiden.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsLowLightVisible((prev) => !prev)} className="clickable-heading">
              Bei schwachem Licht
            </h2>
          </li>
          <ul className={`general-notes ${isLowLightVisible ? 'visible' : ''}`}>
            <li>Verwenden Sie ein Stativ, um Verwacklungen bei längerer Belichtungszeit zu vermeiden.</li>
            <li>Setzen Sie eine möglichst offene Blende (kleine Blendenzahl) ein.</li>
            <li>Erhöhen Sie den ISO-Wert, aber achten Sie auf das Bildrauschen.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsMacroVisible((prev) => !prev)} className="clickable-heading">
              Im Nahbereich (Makro)
            </h2>
          </li>
          <ul className={`general-notes ${isMacroVisible ? 'visible' : ''}`}>
            <li>Nutzen Sie den Makromodus der Kamera oder ein spezielles Makroobjektiv.</li>
            <li>Fokussieren Sie manuell, da der Autofokus bei Makroaufnahmen oft ungenau ist.</li>
            <li>Achten Sie auf den Hintergrund, um Ablenkungen zu vermeiden und das Hauptsujet hervorzuheben.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsGridVisible((prev) => !prev)} className="clickable-heading">
              Durch Gitter
            </h2>
          </li>
          <ul className={`general-notes ${isGridVisible ? 'visible' : ''}`}>
            <li>Positionieren Sie die Kamera so nah wie möglich an das Gitter, sodass es im Unschärfebereich verschwindet.</li>
            <li>Wählen Sie eine möglichst offene Blende, um das Gitter auszublenden.</li>
            <li>Fotografieren Sie aus einem Winkel, in dem das Tier nicht verdeckt ist.</li>
          </ul>

          <li>
            <h2 onClick={() => setIsFastMotionVisible((prev) => !prev)} className="clickable-heading">
              Schnell bewegte Objekte
            </h2>
          </li>
          <ul className={`general-notes ${isFastMotionVisible ? 'visible' : ''}`}>
            <li>Nutzen Sie eine kurze Belichtungszeit (z. B. 1/1000 Sekunde oder kürzer), um Bewegungen "einzufrieren".</li>
            <li>Verwenden Sie den "Sportmodus" oder den Serienbildmodus der Kamera.</li>
            <li>Verfolgen Sie das Motiv mit der Kamera ("Mitziehen"), um den Hintergrund dynamisch wirken zu lassen.</li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Fotospots;
