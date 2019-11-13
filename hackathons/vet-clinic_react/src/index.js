import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import './index.scss';

function App() {
  return (
    <Content />
  );
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );