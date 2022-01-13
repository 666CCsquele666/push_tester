import React, {useEffect} from 'react';
import Location from './components/Location';
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
     <Location />
    </div>
  );
}

export default App;
