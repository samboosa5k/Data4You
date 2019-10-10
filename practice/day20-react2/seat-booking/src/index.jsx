import React from 'react';
import ReactDOM from 'react-dom';
import Seat from './seat/seat.jsx';
import './style.css';
import './index.html';


class Seating extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            booked: [1, 3, 4, 5, 6, 7, 8, 32],
            selected: ''
        }

        this.handleSelection = this.handleSelection.bind( this );
    }

    handleSelection( seatId ) {
        if ( !this.state.booked.includes( seatId ) ) {
            this.setState( { selected: seatId } );
            console.log( this.state.selected );
        } else {
            console.log( "Seat is already selected, sorry." );
        }
    }

    render() {
        const arr =
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27,
                28, 29, 30, 31, 32];
        return (
            <>
                {
                    arr.map( ( elem, id ) => (
                        <Seat
                            key={id}
                            id={id}
                            isBooked={this.state.booked.includes( id )}
                            handleSelection={this.handleSelection}
                            selectedId={this.state.selected}
                        />
                    ) )
                }
            </>
        )
    }
}

ReactDOM.render( <Seating />, document.getElementById( 'app' ) );