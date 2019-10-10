import React from 'react';

export default class Question extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <>
                <div className="mainQuestion__wrapper">
                    <h1 className="mainQuestion__h1">
                        {this.props.mainh1}
                    </h1>

                    <p className="mainQuestion__p">{this.props.mainp}</p>

                    <div className="likes">
                        <a href="#" onClick={this.props.handleLike}>
                            <p className="likes">Likes: {this.props.likes}</p>
                        </a>

                        <p className="likes">Total likes: {this.props.totalLikes}</p>
                    </div>


                </div>
            </>
        )
    }
}