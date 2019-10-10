import React from 'react';

export default class Seat extends React.Component {
    constructor( props ) {
        super( props );

        this.handleClicks = this.handleClicks.bind( this );
    }

    handleClicks() {
        this.props.handleSelection( this.props.id );
    }

    render() {
        const bookedClass = ( this.props.isBooked ) ? "seat--booked" : ( this.props.selectedId === this.props.id ) ? "seat--selected" : "seat";

        return (
            <>
                <div className={bookedClass} id={this.props.id} onClick={this.handleClicks}>

                </div>
            </>
        )
    }
}