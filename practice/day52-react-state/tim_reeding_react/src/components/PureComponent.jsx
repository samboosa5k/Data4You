import React from 'react';

const PureComponent = ( props ) => {
    if ( props.toggle ) {
        console.log( 'toggled...' );
        return <a href="#" onClick={props.clickHandler}><h4>'Hello from PureComponent.jsx'</h4></a>;
    } else {
        console.log( 'not toggled...' );
        return <a href="#" onClick={props.clickHandler}><h4>'Hello from -clicked- PureComponent.jsx'</h4></a>;
    }
}

export default PureComponent;