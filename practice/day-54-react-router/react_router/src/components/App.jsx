import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import history from '../history';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Example from './subcomponents/Example.jsx';


const App = () => {

  return (
    <>
      {/* <Router history={history}> */}
      <Router>
        <NavBar />

        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/example' component={Example} />

        </Switch>
      </Router>
    </>
  );
};

export default App;