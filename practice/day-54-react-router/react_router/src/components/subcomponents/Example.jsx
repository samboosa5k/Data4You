import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Child from './Child.jsx';

const Example = ( { match } ) => {
    console.log( 'Example laoded' );
    return (
        <>
            <Router>
                <p>This is the 'example' section...</p>
                <Link to={`${match.url}/child`}>CHILD</Link>

                <Switch>
                    <Route path={`${match.url}/child`} component={Child} />
                </Switch>
            </Router>
        </>
    )
}

export default Example;