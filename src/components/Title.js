import React from 'react';

class Title extends React.Component {

    render() {
 
        return (<h1 style={styles.header}> Needs A Title </h1>);

    }
}


const styles = {
    header : {
        color: 'rgb(184, 134, 11)',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily:  'Atma',
        color: 'gold',
        fontStyle: 'italic'
        
        
        
    }
};


export default Title;

