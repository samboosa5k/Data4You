import React from 'react';

export default class Comment extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            likes: 0,
        }

        this.handleLikes.bind( this );
    }

    handleLikes = () => {
        this.setState( { likes: this.state.likes + 1 } );
        this.props.handleTotal();
    }

    render() {
        return (
            <>
                <div className="comment__wrapper">
                    <h2 className="comment__h2">
                        {this.props.commenth2}
                    </h2>

                    <p className="comment__p">{this.props.commentp}</p>

                    <a href="#" onClick={this.handleLikes}>
                        <p className="likes">Likes: {this.state.likes}</p>
                    </a>
                </div>
            </>
        )
    }
}