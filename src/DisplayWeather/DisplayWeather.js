import React from 'react';
import './DisplayWeather.css';

const DisplayWeather = ({ weatherData, formSubmitted, getUnits, capitalizeFirstLetter}) => {
    return(
        <div className='weather-display'>
            <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather-Icon"
            />
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p className='temp'>Temperature: {Math.round(weatherData.main.temp)}{formSubmitted && getUnits("temp")}</p>
            <p className='feels'>Feels Like: {Math.round(weatherData.main.feels_like)}{formSubmitted && getUnits("temp")}</p>
            <p className='desc'>Description: {capitalizeFirstLetter(weatherData.weather[0].description)}</p>
            <p className='humidity'>Humidity: {weatherData.main.humidity}%</p>
            <p className='wind'>Wind: {weatherData.wind.speed} {formSubmitted && getUnits("wind")}</p>
        </div>
    );    
};

export default DisplayWeather;