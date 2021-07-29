import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto.js'; 
import Address from './component/profile/Address.js';
import FullName from './component/profile/FullName.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
      </header>
      
      <FullName />
      <Address />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
