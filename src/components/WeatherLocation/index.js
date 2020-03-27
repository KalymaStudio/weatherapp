import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN, WINDY} from '../../constants/weathers';
import './style.css';
/*probar git */

const data1 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '30 m/s',
};

const data2 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component { 
    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        }
    }
    handleUpdateClick = () => {
        this.setState ({
            data: data2
        });
        console.log("Actualizado");
    }
    render = () => {
        const {city,data} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        )
    };
}

export default WeatherLocation;