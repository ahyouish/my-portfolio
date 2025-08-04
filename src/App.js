import React from 'react';
import './App.css'; // You can style this later
// No import for logo.svg — not needed

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0f0f0f', color: '#ffffff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Ayush G</h1>
      <h2 style={{ color: '#f43f5e' }}>Engineering Student</h2>
      <p>Guy who is into tech!</p>

      <hr style={{ margin: '2rem 0', borderColor: '#333' }} />

      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Nuvira</strong> – A custom eyewear website <br />
          🔗 <a href="https://ahyouish.github.io/Nuvira_site/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Sudoku Game</strong> – A Sudoku game built in web <br />
          🔗 <a href="https://ahyouish.github.io/Sudoku-new/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </li>
      </ul>

      <hr style={{ margin: '2rem 0', borderColor: '#333' }} />

      <p>Check out more on <a href="https://github.com/ahyouish" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  );
}

export default App;
