import React from 'react';

class Title extends React.Component {

    render() {
        return (<h1 style={styles.header}> CHINDER </h1>);
    }
}


const styles = {
    header : {
        color: 'rgb(184, 134, 11)',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: 'Gautami',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'
    }
};


export default Title;
