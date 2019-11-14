import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import ErroneousComponent from './ErroneousComponent.jsx';

const App = ( props ) => {
    const [inputValue, setInputValue] = useState( { field1: '', field2: '' } );

    const handleInputChange = ( e ) => {
        console.log( e.target.value );  // GOLDEN RULE - always log to see if something is working
        setInputValue( { ...inputValue, [e.target.id]: e.target.value } );
    }

    const compare = ( a, b ) => {
        if ( a !== b ) {
            throw "Not equal";
        } else {
            console.log( "It's equal" );
        }
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        console.log( [inputValue.field1, inputValue.field2] );  //  Log current values

        try {
            compare( inputValue.field1, inputValue.field2 );   // Compare current values
        } catch ( e ) {
            console.error( e );
        }
    }

    return (
        <>
            <form>
                <label htmlFor="field1">Field 1</label>
                <input
                    type="text"
                    id="field1"
                    value={inputValue.field1}
                    onChange={handleInputChange} />

                <label htmlFor="field2">Field 2</label>
                <input
                    type="text"
                    id="field2"
                    value={inputValue.field2}
                    onChange={handleInputChange} />
                <input type="submit" onClick={handleSubmit} />
            </form>
            <ErrorBoundary>
                <ErroneousComponent />
            </ErrorBoundary>
        </>
    )
}

export default App;
