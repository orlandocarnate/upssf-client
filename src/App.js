import React from 'react';
import logo from './upssf-logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header upssf-cover">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
