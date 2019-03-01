import React from 'react';

class Description extends React.Component {

    render() {
        return (<h2 style={styles.h2}>A dating app for cheese and wine!</h2>);
    }
}


const styles = {
    h2: {
        paddingTop: '30px',
        textAlign: 'center'

    }
}

export default Description;