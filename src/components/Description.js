import React from 'react';

class Description extends React.Component {

    render() {
        return (<h2 style={styles.h2}>Find Your Perfect Combination</h2>);
    }
}


const styles = {
    h2: {
        paddingBottom: '60px',
        textAlign: 'center',
        color: 'gold',
        fontFamily:  'Atma'

    }
}

export default Description;