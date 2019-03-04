import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Description from './components/Description.js';
import Picture from './components/Picture.js';
import DropDownCheeseMenu from './components/DropDownMenu.js';
import GoButton from './components/GoButton.js';
import WineSuggestionResult from './components/WineSuggestionResult.js';
// import WinesService from './wines/tasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineName: "",
      // cheeseList: [],
      cheeseList: ["brie", "limberger", "camembert"],
      value: "Cheese"
    };

    this.onGoClicked = this.onGoClicked.bind(this);
    this.selectCheese = this.selectCheese.bind(this)
  }
  //need to include cheeseName = this.state.value
  //Hardcoded a suggested wine. Passed as a prop to the WineSuggestionResult component

//   async componentDidMount() {
//     const cheeses = await WinesService.getCheese();
//     const cheeseList = cheeses.map(cheeses => cheeses.cheeseName);
//     this.setState({ cheeseList: cheeseList });
// }
  
  onGoClicked() {
    alert(this.state.value)
    this.setState({
      wineName: "A Nice Bordeaux",
      value: "Cheese"
    })
  }
  // async onGoClicked() {
  //   const wines = await WinesService.getWine(this.state.value)
  //   alert(this.state.value)
  //   this.setState({
  //     wineName: wines.wineName,
  //     value: "Cheese"
  //   })
  // }

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
          <WineSuggestionResult wineName={this.state.wineName} />
        </div>
      </div>

    );
  }
}

export default App;
