import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PureComponent from './components/PureComponent.jsx';

import './index.html';

const App = ( props ) => {
    const [toggle, setToggled] = useState( true );

    const clickHandler = () => {
        setToggled( prevToggled => {
            return !prevToggled;
        } )
    }

    useEffect( () => {
        console.log( 'Useeffect --> state updated' );
    }, [toggle] )   //  COMMA -> SQUAREBRACKETS = componentDidMount
    //  The variable in the square brackets means 'whenever TOGGLE updates, run the code. It's like doing componentDidMount for specific variables

    return <PureComponent
        toggle={toggle}
        clickHandler={clickHandler} />
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );