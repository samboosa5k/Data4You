import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from './quotes/quotes.jsx';
import './index.scss';
import './index.html';

//  Ask Martin, could not get this to work otherwise
let quotes = require( './quotes/quoteslist.json' );


class App extends React.Component {
  render() {
    return (

      <>
        {
          quotes.map( quote => (
            <Quotes name={quote.person}
              quote={quote.quote} />
          ) )
        }
      </>

    )
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );

