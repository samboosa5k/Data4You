import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import Ratings from './components/Ratings.jsx';

const App = () => {
    const [actor, setActor] = useState( 22616 );
    const [actorName, setActorName] = useState();

    const handleActorSwitch = ( event ) => {
        console.log( 'handleactorswtich', event.target.id );
        setActor( event.target.id );
        setActorName( event.target.innerText );
    }

    return (
        <>
            <NavBar handleActorSwitch={handleActorSwitch} actors={[[22616, "Bruce"], [19302, "Salma"]]} />
            <Ratings actorid={actor} actorName={actorName} />
        </>
    )
}

export default App;