import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from "react-onesignal";

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: "ae615730-5a3d-41d0-95da-6a6bf663a47d",
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
