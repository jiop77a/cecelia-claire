import React, { Component } from 'react';
import './css/App.css';
import {images} from './imageIndex.js';
import Gallery from './components/Gallery.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={images.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pattern Gallery</h1>
        </header>
        <div className='Gallery-container'>
          <Gallery/>
        </div>
      </div>
    );
  }
}

export default App;
