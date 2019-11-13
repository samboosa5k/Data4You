import React from 'react';

export default class Movie extends React.Component {
    constructor( props ) {
        super( props );
        this.props = props;
        this.state = { content: 0, flag: false, rating: 0 }

        this.handleSubmit = this.handleSubmit.bind( this );
    }

    componentDidMount() {
        fetch( 'http://127.0.0.1:8000/api/eloquentmovie?id=' + this.props.mid )
            .then( response => response.json() )
            .then( data => {
                this.setState( { content: data } )
            } );
    }

    componentDidUpdate() {
        if ( this.state.flag === false ) {
            this.setState( { flag: true } );
        }
    }

    handleChangeRating( e ) {
        e.preventDefault();
        console.log( this.state.rating );
        this.setState( { rating: e.target.value } );
    }

    handleSubmit( e ) {
        //  Here we'll send post to an endpoint
        //  FETCH method POST
        //  https://stackoverflow.com/questions/44996357/react-fetch-post-request#44996543
        e.preventDefault();

        fetch( 'http://127.0.0.1:8000/api/eloquentmovie/update', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                "rating": this.state.rating,
                "id": this.props.mid,
            } )
        } );
    }


    render() {

        return (
            <>
                <h1>{this.state.content['name']}</h1>
                <h2>{this.state.content['year']}</h2>
                <img src={this.state.content['poster']} alt="movie_poster" />
                <form onSubmit={this.handleSubmit}>
                    <input id="rating" type="text" name="rating" value={this.state.rating} onChange={( e ) => this.handleChangeRating( e )} />
                    <input type="submit" value="submit" />
                </form>
            </>
        )
    }
}