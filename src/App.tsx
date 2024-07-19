import React from 'react';
import './App.css';
import logo from './logo.svg'; 
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learning Cards
      </header>
      <Card imgSrc={logo} imgAlt='card image' title='Card title' description='Card description' />
    </div>
  );
}

export default App;
