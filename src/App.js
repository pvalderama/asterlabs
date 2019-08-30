import React from 'react';
import logo from './logo.svg';
import logoA from './logo.png';
import './App.css';
import Transfer from './Transfer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoA} className="App-logo" alt="logo" />
      </header>
      <Transfer /> 
    </div>
  );
}

export default App;
