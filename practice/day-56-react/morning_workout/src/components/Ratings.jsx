import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const Ratings = ( props ) => {
    const { actorid, actorName } = props;

    const [dataState, setDataState] = useState();

    useEffect( () => {
        const doFetch = async () => {
            const response = await fetch( `https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actorid}/ratings` );
            const data = await response.json();

            setDataState( data );
        }
        doFetch();
    } );

    return (
        <Chart
            width={640}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={dataState}
            options={{
                title: `Average ratings for ${actorName}`,
                chartArea: { width: '90%' },
                hAxis: {
                    title: 'Average Rating',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Year',
                },
            }}
            legendToggle
        />
    )
}

export default Ratings;