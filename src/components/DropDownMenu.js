import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import cheeseMenuItem from './CheeseMenuItem.js';

class DropDownCheeseMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.chooseCheese = this.chooseCheese.bind(this);

        this.state = {
            dropdownOpen: false,
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
        // value: event.target.innerText
        value: event.currentTarget.textContent
      })
    }
    chooseCheese (event) {
        const chosenCheese = event.currentTarget.textContent;
        this.props.selectCheese(chosenCheese);
    }

    render() {

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle onClick={this.chooseCheese} caret>
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
