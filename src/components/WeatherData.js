import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temperature={20}/>
            <WeatherExtraInfo humidity={80} wind={'10m/s'} />
        </div>
    )
};

export default WeatherData;