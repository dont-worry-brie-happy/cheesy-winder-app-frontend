import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import cheeseMenuItem from './CheeseMenuItem.js';

class DropDownCheeseMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            // cheeseName: ["brie", "limberger", "camembert"],
            // cheeseArray: [,
            //     {
            //         cheeseName: brie,
            //         cheeseId: 1
            //     },
            //     {
            //         cheeseName: brie,
            //         cheeseId: 2
            //     },
            //     {
            //         cheeseName: brie,
            //         cheeseId: 3
            //     }],

            value:"Cheese"
        };

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    select(event) {
        this.setState({
        value: event.target.innerText
      })
    }


  
    render() {

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.value}
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.cheeseName.map(cheese => (
                        <DropdownItem onClick={this.select}>{cheese}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropDownCheeseMenu;
