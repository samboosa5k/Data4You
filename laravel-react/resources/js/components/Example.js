import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            userId: null,
            user: null
        }
    }

    componentDidMount() {
        const userIdConst = document.getElementById( 'user_id' ).value;
        const userConst = JSON.parse( document.getElementById( 'user' ).value );
        this.setState( { userId: userIdConst, user: userConst.name } );
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Thank you for logging in <span>{this.state.user}</span>, user {this.state.userId}</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if ( document.getElementById( 'my-react' ) ) {
    ReactDOM.render( <Example />, document.getElementById( 'my-react' ) );
}
