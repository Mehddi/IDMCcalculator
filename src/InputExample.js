import React, { useState } from 'react';

function InputExample() {
  const [inputValue, setInputValue] = useState(''); // État pour la valeur de l'input

  const handleChange = (event) => {
    setInputValue(event.target.value); // Met à jour l'état avec la nouvelle valeur
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Tape quelque chose..."
      />
      <p>Vous avez tapé : {inputValue}</p>
    </div>
  );
}

export default InputExample;
