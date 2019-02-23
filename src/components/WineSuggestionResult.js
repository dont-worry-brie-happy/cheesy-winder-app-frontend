import React from 'react';

// const wineSuggestion = "A nice Bordeaux"

class WineSuggestionResult extends React.Component {
//Renders hardcoded WineSuggestion as a prop from App.js when the GoButton is clicked.
    render() {
        return (
        <p style={styles}>{this.props.wineSuggestion}</p>
        );
    }
}

export default WineSuggestionResult;

const styles = {
    textAlign : "center",
    padding: "50px"
}