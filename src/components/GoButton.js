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
            <button type="button" class="btn btn-primary" onClick={this.onGoClicked}>Go Button</button>
        );
    }
}

export default GoButton;