import React from 'react';
import DisplayWeather from './DisplayWeather/DisplayWeather';

export default function WeatherData({weatherData, formSubmitted, getUnits, capitalizeFirstLetter}) {
    return (
        <div className='weather-data'>
            {weatherData && weatherData.weather && (
                <DisplayWeather
                    weatherData={weatherData}
                    formSubmitted={formSubmitted}
                    getUnits={getUnits} 
                    capitalizeFirstLetter={capitalizeFirstLetter}
                />
            )}
        </div>
    );
}