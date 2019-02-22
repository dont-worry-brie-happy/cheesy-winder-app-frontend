import React from 'react';

class GoButton extends React.Component {
    constructor(props) {
        super(props);
        this.onGoClicked=this.onGoClicked.bind(this);
    }

    onGoClicked () {
        alert("Check out that wine suggestion")
    }

    render() {
        return (
            <button type="button" class="btn btn-primary" onClick={this.onGoClicked}>Go Button</button>
        );
    }
}

export default GoButton;