import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/card.jsx';
import './index.html';

class App extends React.Component {
  render() {
    return (

      <>
        <Card
          title="This is a card"
          content="This is the content, now smile."
        />
      </>

    )
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );

