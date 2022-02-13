import React, { Component } from 'react';
import Lata from './Lata/Lata';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lata
        name = "Lata Mangeshkar"
        honorific="Nightingale of India"
        image="https://upload.wikimedia.org/wikipedia/commons/e/e4/Lata_Mangeshkar_-_still_29065_crop.jpg"
        lived="Lata Mangeshkar [1942–2022]"/>
        
      </div>
    );
  }
}

export default App;
