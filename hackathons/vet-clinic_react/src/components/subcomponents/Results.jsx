import React from 'react';

class Results extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            results: '',
            searchFor: this.props.searchFor
        }
    }

    static getDerivedStateFromProps( nextProps, prevState ) {
        console.log( prevState )
        let state = {};
        if ( nextProps.searchFor !== prevState.searchFor ) {

            fetch( 'http://www.st-hectors.test:8000/api?name=' + nextProps.searchFor )
                .then( response => response.json() )
                .then( data => {
                    state = {
                        ...prevState,
                        searchFor: nextProps.searchFor,
                        results: data
                    }
                } )
        } return state;
    }

    render() {
        let searchResults = 'Loading...';
        if ( this.state.results !== '' ) {
            searchResults = this.state.results.map( ( result, key ) => (
                <div key="key">
                    <h4>{result.first_name}</h4>
                </div>
            ) )
        }

        return (
            <>
                {searchResults}
            </>
        )
    }

}

export default Results;