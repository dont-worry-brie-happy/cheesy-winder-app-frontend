import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Description from './components/Description.js';
import Picture from './components/Picture.js';
import DropDownCheeseMenu from './components/DropDownMenu.js';
import GoButton from './components/GoButton.js';
import WineSuggestionResult from './components/WineSuggestionResult.js';
import WinesService from './service/wines';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineList: [],
      cheeseList: [],
      value: "Cheese"
    };

    this.onGoClicked = this.onGoClicked.bind(this);
    this.selectCheese = this.selectCheese.bind(this)
  }

  async componentDidMount() {
    const cheeses = await WinesService.getCheese();
    const cheeseList = cheeses.map(cheeses => cheeses.cheeseName);
    this.setState({ cheeseList: cheeseList });
}
  
  async onGoClicked() {
    let cheeseName = this.state.value
    const wines = await WinesService.getWine(cheeseName)
    console.log(wines);
    // const wineList = wines.map(wines => wines.wineName);
    this.setState({
      wineList: wines,
      value: "Cheese"
    })
  }

  selectCheese(value) {
    this.setState({
      value: value
    })
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

            <div class="col-sm-4" ><DropDownCheeseMenu cheeseList={this.state.cheeseList} value={this.state.value} selectCheese={this.selectCheese} />
            </div>

          </div>

          <div class="col-sm-4" ><GoButton onGoClicked={this.onGoClicked} />
          </div>
        </div>

        <div>
          <WineSuggestionResult wineList={this.state.wineList} />
        </div>
      </div>

    );
  }
}

export default App;
