import React from 'react';

class DropDownMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            showCheese: false,
        };

        this.showCheese = this.showCheese.bind(this);

    }

    showCheese(event) {
        event.preventDefault();

        this.setState({ showCheese: true }, () => {
            document.addEventListener('press', this.closeCheese);
        });
    }


    closeCheese() {
//we need a fuction that allows us to clear the cheese choices.Ive added showCheese into the render.
    }

    render() {
        return (
            <div>
                <button onClick={this.showCheese}>
                    Cheese
        </button>

                {
                    this.state.showCheese
                        ? (
                            <div className="menu">
                                <button> Cheese 1 </button>
                                <button> Cheese 2 </button>
                                <button> Cheese 3 </button>
                                <button> Cheese 4 </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}




export default DropDownMenu;