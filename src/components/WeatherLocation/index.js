import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const WeatherLocation = () => {
    return(
        <div className='weatherLocationCont'>
            <Location city={'Buenos aires'}/>
            <WeatherData/>
        </div>
    )
}

export default WeatherLocation;