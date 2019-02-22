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
      <div>

        <div>
          <Title />
        </div>

        <div>
          <Description />
        </div>

        <div class="row">
          <div class="col-sm-4" ><Picture />
          </div>
          <div class="col-sm-4" ><DropDownMenu />
          </div>
          <div class="col-sm-4" ><GoButton />
          </div>
        </div>

        <div>
          <WineSuggestionResult />
        </div>
      </div>

    );
  }
}

export default App;
