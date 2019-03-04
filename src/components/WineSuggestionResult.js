import React from 'react';

// const wineSuggestion = "A nice Bordeaux"

class WineSuggestionResult extends React.Component {
//Renders hardcoded WineSuggestion as a prop from App.js when the GoButton is clicked.
    render() {
        return (
        <p style={styles}>{this.props.wineName}</p>
        );
    }
}

export default WineSuggestionResult;

const styles = {
    textAlign : "center",
    paddingBottom: "50px",
    color: "gold",
    fontSize: "20px"
    
}