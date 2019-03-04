import React from 'react';

// const wineSuggestion = "A nice Bordeaux"

class WineSuggestionResult extends React.Component {
//Renders hardcoded WineSuggestion as a prop from App.js when the GoButton is clicked.
    render() {
        return (
            <div>
        <p style={styles}>{this.props.wineName}</p>
        </div>
        );
    }
}

export default WineSuggestionResult;

const styles = {
    textAlign : "center",
    padding: "50px"
}