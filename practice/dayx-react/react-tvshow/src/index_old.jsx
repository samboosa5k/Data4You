import React from 'react';
import ReactDOM from 'react-dom';
import episodes from './episodes/episodes.jsx';
import './index.scss';
import './index.html';
import Episodes from './episodes/episodes.jsx';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            episodes: []
        }
    }

    componentDidMount() {
        fetch( 'http://api.tvmaze.com/singlesearch/shows?q=dark&embed=episodes' )
            .then( response => response.json() )
            .then( episode => {
                let episodes = episode._embedded.episodes.map( ( epi, index ) => {
                    return (
                        <div key={index}>
                            <Episodes
                                episode__name={epi.name}
                                episode__description={epi.summary}
                            />
                        </div>
                    )
                } )
                this.setState( { episodes: episodes } )
                console.log( "state", this.state.episodes )
            } )
    }

    render() {
        return (


            <div className="episodes">
                {this.state.episodes.map(
                    epi => (
                        <li>{epi.key}</li>
                    )
                )}
            </div>


        )
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );

