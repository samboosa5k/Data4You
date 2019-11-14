import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to='/'>HOME</Link>
            <Link to='/example'>EXAMPLE</Link>
        </>
    )
}

export default NavBar;