import React from 'react';
import Search from './subcomponents/Search';
import Results from './subcomponents/Results';

class Content extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            searchQuery: ''
        }
    }

    handleSubmit = (input) => {
        this.setState( { searchQuery: input } );
    }

    render() {
        return (
            <div id="content">
                <Search 
                    submitProps={this.handleSubmit}
                />
                <Results searchFor={this.state.searchQuery}/>
            </div>
        )
    }

}

export default Content;