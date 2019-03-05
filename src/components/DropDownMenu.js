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
        };

    }

    toggle(event) {
        const chosenCheese = event.currentTarget.textContent;
        this.props.selectCheese(chosenCheese);
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    select(event) {
        this.setState({
        value: event.currentTarget.textContent
      })
    }


    render() {

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle onClick={this.chooseCheese} caret>
                    {this.props.value}
                </DropdownToggle>
                <DropdownMenu style={Styles.dropCheese}>
                    {this.props.cheeseList.map(cheese => (

                        <DropdownItem onClick={this.select}>{cheese}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const Styles = {
    dropCheese: {
        paddingRight: '50px',
        fontColor: 'gold'
    }
};
export default DropDownCheeseMenu;
