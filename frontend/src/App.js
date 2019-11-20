import React from 'react';

import './App.css';

import logomarca341 from './assets/logomarca341.png';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logomarca341} alt="QDE" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
