import React, { useState } from 'react';

function ImcResult() {
  // Déclarer deux états pour les valeurs des inputs
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sum, setSum] = useState(0);

  // Fonction pour calculer la somme
  const calculateIMC = () => {
    setSum(Number(height) + Number(weight));
  };

  return (
    <div>
      <h1>Calculatrice de Somme</h1>
      
      {/* Champ d'entrée pour la taille */}
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Entrez la taille"
      />
      
      {/* Champ d'entrée pour le poids */}
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Entrez le poids"
      />
      
      {/* Bouton pour calculer l'IMC */}
      <button onClick={calculateIMC}>Calculer l'IMC</button>

      {/* Affichage de l'IMC */}
      <p>L'IMC est : {sum}</p>
    </div>
  );
}

export default ImcResult;
