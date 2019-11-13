import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ProductList />
        <Footer />
      </>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
