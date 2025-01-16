import React from 'react';
import '../styles/Food.css';

// Beispielhaft Bilder importieren
import PantanalImg from '../images/panatanal.jpg';
import MasoalaImg from '../images/masoala.jpg';
import KloesterliImg from '../images/altes kloesterli.jpg';
import ZoocafeImg from '../images/zoocafe.jpg';
import ThaiLodgeImg from '../images/Thailodge.jpg';
import FoodStallsImg from '../images/verpflegungsstände.jpg';

function Food() {
  const foodPlaces = [
    { name: 'Restaurant Pantanal', img: PantanalImg, href: "https://www.zoo.ch/en/food-drinks/restaurant-pantanal"},
    { name: 'Restaurant Masoala', img: MasoalaImg, href: "https://www.zoo.ch/en/food-drinks/restaurant-masoala" },
    { name: 'Restaurant Altes Klösterli', img: KloesterliImg, href: "https://www.zoo.ch/en/food-drinks/restaurant-altes-klosterli" },
    { name: 'Zoocafé', img: ZoocafeImg, href: "https://www.zoo.ch/en/food-drinks/zoocafe" },
    { name: 'Thai Lodge', img: ThaiLodgeImg, href: "https://www.zoo.ch/en/thai-lodge" },
    { name: 'Food Stalls', img: FoodStallsImg, href: "https://www.zoo.ch/en/food-drinks/food-stalls" }
  ];

  return (
    <div className="food-container">
      <h1>Essen &amp; Trinken</h1>
      <div className="food-grid">
        {foodPlaces.map((place, index) => (
          <div className="food-item" key={index} onClick={() => window.location.href = place.href}>
            <img src={place.img} alt={place.name} className="food-image" />
            <div className="food-name">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
