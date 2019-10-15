import React from 'react';

export default class Game extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <div className="game-container">
                <div className="game">
                    <div className="game__L" >
                        <img src={this.props.img} />
                    </div>
                    <div className="game__R">
                        {/* <h2>{this.props.id}</h2> */}
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="game__info">
                    Rating: {this.props.rating}
                </div>
            </div>
        );
    }
}