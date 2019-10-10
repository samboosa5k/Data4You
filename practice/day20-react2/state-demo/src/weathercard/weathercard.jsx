import React from 'react';

export default class WeatherCard extends React.Component {
    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        this.props.onSelect( this.props.day );
    }

    render() {
        return (
            <>
                <div className="day-forecast">
                    <div className="day-forecast__header">{this.props.day}</div>
                    <div className="day-forecast__body" onClick={this.handleClick}>
                        <div className={`day-forecast__image weather-${this.props.weatherType}`}></div>
                        <div className="day-forecast__temps">
                            <span className="temp-day">{this.props.tempDay}</span>
                            <span className="temp-night">{this.props.tempNight}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

/* LIFTING THE STATE */