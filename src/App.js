import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Recupera il valore del contatore da localStorage, se esiste
  const savedCount = localStorage.getItem('count');
  const initialCount = savedCount ? Number(savedCount) : 0;

  // Stato per il contatore
  const [count, setCount] = useState(initialCount);

  // Stato per il tema (chiaro o scuro)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Stato per lo step personalizzato
  const [step, setStep] = useState(1);

  // Funzioni per incrementare, decrementare e resettare il contatore
  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    localStorage.setItem('count', newCount);  // Salva il nuovo valore in localStorage
  };

  const decrement = () => {
    const newCount = count > 0 ? count - step : 0;
    setCount(newCount);
    localStorage.setItem('count', newCount);  // Salva il nuovo valore in localStorage
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem('count', 0);  // Salva il reset in localStorage
  };

  // Funzione per cambiare il tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Contatore: {count}</h1>

      <label htmlFor="stepInput">Passo:</label>
      <input
        type="number"
        id="stepInput"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        min="1"
      />

      <div>
        <button onClick={increment}>+{step}</button>
        <button onClick={decrement}>-{step}</button>
        <button onClick={reset}>Reset</button>
      </div>

      <button onClick={toggleTheme}>
        {isDarkMode ? 'Tema Chiaro' : 'Tema Scuro'}
      </button>
    </div>
  );
}

export default App;
