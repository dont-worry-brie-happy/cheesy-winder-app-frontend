import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Description from './components/Description.js';
import Picture from './components/Picture.js';
import DropDownCheeseMenu from './components/DropDownMenu.js';
import GoButton from './components/GoButton.js';
import WineSuggestionResult from './components/WineSuggestionResult.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineName: "",
      cheeseName: ["brie", "limberger", "camembert"],
      chosenCheese:""
    };

    this.onGoClicked = this.onGoClicked.bind(this);
    this.selectCheese = this.selectCheese.bind(this)
  }

  //Hardcoded a suggested wine. Passed as a prop to the WineSuggestionResult component
  onGoClicked() {
    // alert("Check out that wine suggestion")
    this.setState({
      wineName: "A Nice Bordeaux"
    })
  }

  selectCheese(chosenCheese) {
    this.setState({
      chosenCheese: chosenCheese
    })
    console.log(this.state.chosenCheese)
    // alert(this.state.chosenCheese);
  };

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

          <div class="row">

            <div class="col-sm-4" ><DropDownCheeseMenu cheeseName={this.state.cheeseName} selectCheese={this.selectCheese}/>
            </div>

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
