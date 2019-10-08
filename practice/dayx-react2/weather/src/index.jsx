import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from './weathercard/weathercard.jsx';
import './style.css';
import './index.html';
import forecast from './forecast.js';

console.log( forecast );

class Weather extends React.Component {
    render() {
        return (
            <>
                <h1>Weekly Weather Forecast</h1>
                <div className="week-forecast">
                    {
                        forecast.map( day => (
                            <WeatherCard
                                day={day.weekday}
                                weatherType={day.weather}
                                tempDay={day.tempDay}
                                tempNight={day.tempNight} />
                        ) )
                    }
                </div>
            </>
        )
    }
}

ReactDOM.render( <Weather />, document.getElementById( 'app' ) );