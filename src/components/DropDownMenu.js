import React from 'react';

class DropDownMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            showCheese: false,
        };

        this.showCheese = this.showCheese.bind(this);
        this.closeCheese = this.closeCheese.bind(this);

    }

    showCheese(event) {
        event.preventDefault();

        this.setState({ showCheese: true }, () => {
            document.addEventListener('click', this.closeCheese);
        });
    }


    closeCheese(event) {

        if (!this.dropdownMenu.contains(event.target)) {
      
            this.setState({ showCheese: false }, () => {
              document.removeEventListener('click', this.closeCheese);
            });  
            
          }
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
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
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