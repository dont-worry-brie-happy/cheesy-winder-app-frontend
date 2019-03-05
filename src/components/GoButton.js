import React from 'react';

class GoButton extends React.Component {
    constructor(props) {
        super(props);
        this.onGoClicked=this.onGoClicked.bind(this);
    }
//onGoClicked function passed down as a prop from App.js

    onGoClicked() {
        this.props.onGoClicked(this.props.onGoClicked);
}
    render() {
        return (
            <button type="button" class="btn btn-danger" style={styles.goButton}onClick={this.onGoClicked}>Wine?</button>
        );
    }
}

const styles = {
goButton :     {
    color: "black",
    fontWeight: "bold"
}


}
export default GoButton;