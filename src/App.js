import React from 'react';
import './App.css';
import InputExample from './InputExample'; // Import du nouveau composant
import ImcResult from './imcResult';

function App() {
  return (
    <div>
      <h1>IDMC calculator</h1>
      <p>What is IMC?</p>
      <p>description</p>
      <InputExample />
      <ImcResult />
    </div>
  );
}

export default App;
