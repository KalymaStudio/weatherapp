import React from 'react';
import App from'./WeatherIcon'

const WeatherTemperature = ({temperature, weatherState}) => {
    return(

        <div><App /><span>{`${temperature} Cº`}</span></div>
    )
};

export default WeatherTemperature;