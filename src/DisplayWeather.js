import React from 'react';

const DisplayWeather = ({ weatherData, formSubmitted, getUnits, capitalizeFirstLetter}) => {
    return(
        <div>
            <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather-Icon"
            />
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {Math.round(weatherData.main.temp)}{formSubmitted && getUnits("temp")}</p>
            <p>Feels Like: {Math.round(weatherData.main.feels_like)}{formSubmitted && getUnits("temp")}</p>
            <p>Description: {capitalizeFirstLetter(weatherData.weather[0].description)}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} {formSubmitted && getUnits("wind")}</p>
        </div>
    );    
};

export default DisplayWeather;