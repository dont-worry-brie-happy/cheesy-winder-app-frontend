import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class cheeseMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
//onGoClicked function passed down as a prop from App.js


    render() {
        return (
            <div>
            <DropdownItem>Limburger</DropdownItem>
            </div>
        );
    }
}

export default cheeseMenuItem;