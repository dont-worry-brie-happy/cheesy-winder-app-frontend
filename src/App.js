import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Description from './components/Description.js';
import Picture from './components/Picture.js';
import DropDownMenu from './components/DropDownMenu.js';
import GoButton from './components/GoButton.js';
import WineSuggestionResult from './components/WineSuggestionResult.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Title/>
        </div>
        <div>
          <Description/>
        </div>
        <div>
          <Picture/><DropDownMenu/><GoButton/>
        <div>
        <WineSuggestionResult/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
