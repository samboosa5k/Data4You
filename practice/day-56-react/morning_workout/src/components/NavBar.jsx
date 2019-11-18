import React, { useEffect, useState } from 'react';

const NavBar = ( props ) => {
    const { actors, handleActorSwitch } = props;

    return (
        actors.map( elem => {
            return <a href="#" style={{
                backgroundColor: "coral",
                color: "white",
                padding: "1rem",
                margin: "0.5rem"
            }} onClick={handleActorSwitch} id={elem[0]} > {elem[1]}</a>
        } )
    )
}

export default NavBar;