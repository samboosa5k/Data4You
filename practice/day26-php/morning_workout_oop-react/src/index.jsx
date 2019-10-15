import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities
          url="http://localhost:7777/Data4You/practice/day26-php/morning_workout_oop-react/src/Api/index.php"
        />
      </>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
