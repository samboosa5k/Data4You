import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Character from './components/Character.jsx';
import ChangePage from './components/ChangePage.jsx';
import './index.html';

const App = ( props ) => {
    const [character, setCharacter] = useState();
    const [page, setPage] = useState( 1 );

    const nextPage = () => {
        console.log( 'next page' ); // Triggered on clicking link in ChangePage.jsx
        setPage( () => {
            return page + 1;
        } )
    }


    useEffect( () => {
        //  start - PRINT the current fetch API
        console.log( 'https://swapi.co/api/people/' + page + '/' );
        //  end
        const doFetch = async () => {
            const result = await fetch( 'https://swapi.co/api/people/' + page + '/' );
            const data = await result.json();
            setCharacter( () => {
                return data;
            } )
        };
        doFetch();
    }, [page] )

    return ( <>
        <ChangePage nextPage={nextPage} />
        <Character character={character} />
    </> );
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );