import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import '../styles/Tickets.css';

function Tickets() {
  const mainSeasonData = [
    { category: 'Erwachsene (ab 21 Jahren)', price: 'CHF 29.- / CHF 30.-' },
    { category: 'Jugendliche (16–20 Jahre)', price: 'CHF 24.- / CHF 25.-' },
    { category: 'Kinder (6–15 Jahre)', price: 'CHF 15.- / CHF 16.-' },
    { category: 'Kinder unter 6 Jahren', price: 'gratis' },
    { category: 'IV-Bezüger mit gültigem Ausweis', price: 'online nicht erhältlich / CHF 16.-' },
    { category: 'Familientageskarte (Lebenspartner mit eigenen Kindern 6–15 Jahre)', price: 'CHF 78.- / CHF 80.-' },
    { category: 'Sunset-Ticket (ab 90 Minuten vor Zooschliessung)', price: '40% Rabatt auf nicht rabattierte Einzeleintritte' }
  ];

  const offSeasonData = [
    { category: 'Erwachsene (ab 21 Jahren)', price: 'CHF 27.- / CHF 28.-' },
    { category: 'Jugendliche (16–20 Jahre)', price: 'CHF 22.- / CHF 23.-' },
    { category: 'Kinder (6–15 Jahre)', price: 'CHF 14.- / CHF 15.-' },
    { category: 'Kinder unter 6 Jahren', price: 'gratis' },
    { category: 'IV-Bezüger mit gültigem Ausweis', price: 'online nicht erhältlich / CHF 15.-' },
    { category: 'Familientageskarte (Lebenspartner mit eigenen Kindern 6–15 Jahre)', price: 'CHF 74.- / CHF 76.-' },
    { category: 'Sunset-Ticket (ab 90 Minuten vor Zooschliessung)', price: '40% Rabatt auf nicht rabattierte Einzeleintritte' }
  ];

  const renderRows = (data) => {
    return data.map((item, i) => (
      <tr key={i}>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td><FiShoppingCart /></td>
      </tr>
    ));
  };

  return (
    <div className="tickets-container">
      <div className="ticket-season">
        <h2>Hauptsaison (März – Oktober)</h2>
        <table>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Online/Zookasse</th>
              <th>Ticket Kaufen</th>
            </tr>
          </thead>
          <tbody>
            {renderRows(mainSeasonData)}
          </tbody>
        </table>
      </div>
      <div className="ticket-season">
        <h2>Nebensaison (November – Februar)</h2>
        <table>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Online/Zookasse</th>
              <th>Ticket Kaufen</th>
            </tr>
          </thead>
          <tbody>
            {renderRows(offSeasonData)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
