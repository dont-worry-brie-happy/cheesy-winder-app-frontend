import React from 'react';
import WineItem from './IndividualWine.js';
// const wineSuggestion = "A nice Bordeaux"

class WineSuggestionResult extends React.Component {
    //Renders hardcoded WineSuggestion as a prop from App.js when the GoButton is clicked.
    render() {
        return (
            <div>
                {
                    this.props.wineList.map((wine, i) =>
                        <WineItem wine={wine} key={i} />
                    )}
                
        </div>
        );
    }
}

export default WineSuggestionResult;

const styles = {
    textAlign: "center",
    paddingBottom: "50px",
    color: "gold",
    fontSize: "20px"

}