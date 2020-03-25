import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from '../../constants/weathers';
import './style.css';
/*probar git */

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const WeatherLocation = () => {
    return(
        <div className='weatherLocationCont'>
            <Location city={'Buenos aires'}/>
            <WeatherData data={data}/>
        </div>
    )
}

export default WeatherLocation;