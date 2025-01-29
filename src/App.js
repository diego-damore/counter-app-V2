import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const savedCount = localStorage.getItem('count');
  const initialCount = savedCount ? Number(savedCount) : 0;
  const savedTheme = localStorage.getItem('theme') === 'dark';

  const [count, setCount] = useState(initialCount);
  const [isDarkMode, setIsDarkMode] = useState(savedTheme);
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    localStorage.setItem('count', newCount);
  };

  const decrement = () => {
    const newCount = count > 0 ? count - step : 0;
    setCount(newCount);
    localStorage.setItem('count', newCount);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem('count', 0);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const checkPalindrome = () => {
    const strNum = number.toString();
    const isPalindrome = strNum === strNum.split('').reverse().join('');
    setResult(isPalindrome);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="settings-icon" onClick={() => setSettingsOpen(!settingsOpen)}>
        ⚙️
      </div>

      <div className={`settings-menu ${settingsOpen ? 'visible' : ''}`}>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {isDarkMode ? 'Tema Chiaro' : 'Tema Scuro'}
        </button>
      </div>

      <h1 className="title-box country-title">Contatore: {count}</h1>

      <label htmlFor="stepInput">Passo:</label>
      <input
        type="number"
        id="stepInput"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        min="1"
      />

      <div className="button-group">
        <button onClick={increment}>+{step}</button>
        <button onClick={decrement}>-{step}</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h2 className="title-box country-title">Verifica se un numero è palindromo</h2>
      <input
        type="number"
        className="palindrome-input"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Inserisci un numero"
      />
      <button className="palindrome-button" onClick={checkPalindrome}>
        Verifica
      </button>
      {result !== null && (
        <div
          className="palindrome-output title-box country-title"
          style={{ color: result ? 'green' : 'red' }}
        >
          {result ? 'Il numero è palindromo!' : 'Il numero non è palindromo!'}
        </div>
      )}
    </div>
  );
}

export default App;
