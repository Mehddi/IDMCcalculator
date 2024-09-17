import React, { useState } from 'react';

function ImcResult() {
  // Déclarer deux états pour les valeurs des inputs
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setIMC] = useState(0);

  // Fonction pour calculer la somme
  const calculateIMC = () => {
    setIMC(Number(weight) / ((Number(height)/100))**2);
  };

  return (
    <div>
      <h1>Calcul de l'imc</h1>
      
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
      <p>L'IMC est : {imc}</p>
    </div>
  );
}

export default ImcResult;
