import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import cheeseMenuItem from './CheeseMenuItem.js';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            cheeseName: ["brie", "limberger", "camembert"],
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
          dropdownOpen: !this.state.dropdownOpen,
          value: event.target.innerText
        });
      }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.value}
        </DropdownToggle>
                <DropdownMenu>
                    {this.state.cheeseName.map(cheese => (
                        <DropdownItem onclick={this.select}>{cheese}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}
// render() {
//     return (
//         <Dropdown className="container" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <span
//           onClick={this.toggle}
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded={this.state.dropdownOpen}
//         >{this.state.value}
//         </span>
//         <DropdownMenu>
//           <div onClick={this.select}>Work</div>
//           <div onClick={this.select}>Contact</div>
//         </DropdownMenu>
//       </Dropdown>
//     );
//   }
// }
