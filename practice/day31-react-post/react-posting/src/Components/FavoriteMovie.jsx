import React from 'react';

class FavoriteMovie extends React.Component {
	constructor( props ) {
		super( props );
		this.props = props;
		this.state = {
			isLiked: ''
		}
	}

	componentDidMount() {
		fetch( 'http://127.0.0.1:8000/api/movies/favorite?user_id=' + this.props.uid + '&movie_id=' + this.props.mid )
			.then( response => response.json() )
			.then( data => {
				this.setState( { isLiked: data.favorite } )
			} )
	}

	render() {
		console.log( this.state.isLiked );
		return (
			( this.state.isLiked === true ) ? <h1>Favorited</h1> : <h1>Not Favorited</h1>
		);
	}
}


export default FavoriteMovie;