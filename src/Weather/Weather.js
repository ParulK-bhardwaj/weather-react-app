import React, { useState } from 'react';
import WeatherForm from '../WeatherForm';
import WeatherData from '../WeatherData';
import fetchWeatherData from '../FetchWeatherData';
import { getUnits, capitalizeFirstLetter } from '../utils';
import './Weather.css'


function Weather() {
    const [zip, setZip] = useState('');
    const [unit, setUnit] = useState('metric');
    const [weatherData, setWeatherData] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleZipChange = (e) => {
        setZip(e.target.value);
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
        setFormSubmitted(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        fetchWeatherData(zip, unit, setWeatherData);
    }; 

    return (
        <div className='weather'>
            <WeatherForm
                handleSubmit={handleSubmit}
                handleUnitChange={handleUnitChange}
                handleZipChange={handleZipChange}
                unit={unit}
                zip={zip}
            />
            <WeatherData
                weatherData={weatherData}
                formSubmitted={formSubmitted}
                getUnits={(type) => getUnits(unit, type)} 
                capitalizeFirstLetter={capitalizeFirstLetter}
            />
        </div>   
    );
};

export default Weather;