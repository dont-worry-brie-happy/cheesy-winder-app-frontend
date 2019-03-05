import React from 'react';
import WineItem from './IndividualWine.js';
// const wineSuggestion = "A nice Bordeaux"

class WineSuggestionResult extends React.Component {
    //Renders hardcoded WineSuggestion as a prop from App.js when the GoButton is clicked.
    render() {
        return (
            <div style={Winestyles}>
                {
                    this.props.wineList.map((wine, i) =>
                        <WineItem wine={wine} key={i} />



                    )}

            </div>
        );
    }
}

export default WineSuggestionResult;

const Winestyles = {

    textAlign: "center",
    paddingBottom: "50px",
    paddingLeft: "50px",
    paddingRight: "50px",
    color: "gold",
    fontSize: "20px"
};
        
