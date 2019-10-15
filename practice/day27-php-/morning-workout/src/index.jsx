import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/List.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <List
          url="http://www.all.com:7777/Data4You/practice/day27-php-/morning-workout/"
        />
      </>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
