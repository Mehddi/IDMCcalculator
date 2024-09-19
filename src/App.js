import React, { useEffect } from 'react';
import './App.css';
import ImcResult from './imcResult';

function App() {
  useEffect(() => {
    const letter = document.querySelector('.letter');

    const setRandomPosition = () => {
      const randomX = Math.random() * (window.innerWidth - 200); // Ajuste pour la largeur du texte
      const randomY = Math.random() * (window.innerHeight - 100); // Ajuste pour la hauteur du texte
      letter.style.left = `${randomX}px`;
      letter.style.top = `${randomY}px`;
    };

    // Initial position
    setRandomPosition();

    // Change position every 3 seconds
    const interval = setInterval(setRandomPosition, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>IMC calculator</h1>
      <p>What is IMC?</p>
      <p>description</p>
      <ImcResult />

      <div className="letter">IMC</div>
    </div>
  );
}

export default App;
