import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users.jsx';

import './index.html';

const App = () => {
    return (
        <Users search={2884} />
    )
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );