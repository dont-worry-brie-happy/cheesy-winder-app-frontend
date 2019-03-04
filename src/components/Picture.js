import React from 'react';
import brie from '../images/brie.png';

class Picture extends React.Component {

    render() {
        return (
           <img src={brie} width = {500} height = {300}  ></img> 
        );
    }
}


const Styles = {

    picture: {
        height: '200',
        width: '200 '
    }



};
export default Picture;