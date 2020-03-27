import convert from 'convert-units';
import {WINDY} from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}
const getWeatherState = weather => {
    return WINDY;
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState('weather');
    const temperature = getTemp(temp);

    const data = {
        humidity, 
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;