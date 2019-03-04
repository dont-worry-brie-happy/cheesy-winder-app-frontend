import React from 'react';

class WineItem extends React.Component {


render() {
    return (
        <div>
            <div className="row">
                <div className="col-4" >
                    {this.props.wine.wineName}
                </div>
                <div className="col-4" >
                    {this.props.wine.wineDescription}
                </div>
                <div className="col-4">
                    {this.props.wine.wineType}
                </div>
            </div>
        </div>
       );
    }
};

export default WineItem;