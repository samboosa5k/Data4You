import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Components/Movie';
import FavoriteMovie from './Components/FavoriteMovie';
import './index.css';

function App() {
    return (
        <div className="App">
            <Movie mid="2" />
            <FavoriteMovie mid="2" uid="1" />
        </div>
    );
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );
