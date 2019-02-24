import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Description from './components/Description.js';
import Picture from './components/Picture.js';
import DropDownMenu from './components/DropDownMenu.js';
import GoButton from './components/GoButton.js';
import WineSuggestionResult from './components/WineSuggestionResult.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineName: ""
    };

    this.onGoClicked = this.onGoClicked.bind(this)
  }

//Hardcoded a suggested wine. Passed as a prop to the WineSuggestionResult component
  onGoClicked() {
    // alert("Check out that wine suggestion")
    this.setState ({
      wineName: "A Nice Bordeaux"
    })
  }

  render() {
    return (
      <div className="container">

        <div>
          <Title />
        </div>

        <div>
          <Description />
        </div>

        <div class="row">
          <div class="col-sm-4" ><Picture />
          </div>

          <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Cheese
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">Cheese1</a></li>
    <li><a href="#">Cheese2</a></li>
    <li><a href="#">Cheese3</a></li>
    <li><a href="#">Cheese3</a></li>
  </ul>
</div>
          <div class="col-sm-4" ><GoButton onGoClicked={this.onGoClicked} />
          </div>
        </div>

        <div>
          <WineSuggestionResult wineName={this.state.wineName} />
        </div>
      </div>

    );
  }
}

export default App;
