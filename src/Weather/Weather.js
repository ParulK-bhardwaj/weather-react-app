import React, { useState } from 'react';
import DisplayWeather from '../DisplayWeather/DisplayWeather';
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
        fetchWeatherData();
        setFormSubmitted(true);
    };

    const fetchWeatherData= () => {
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${unit}&appid=${apikey}`
        
        const fetchData = async() => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setWeatherData(data);
            } catch (err) {
                console.error("Error fetching weather data: Please check the zip code", err);
            }
        }
        fetchData()
    };

    const getUnits = (type) => {
        switch (unit) {
            case "metric":
                return type === "temp" ? "℃" : "meter/sec";
            case "imperial":
                return type === "temp" ? "℉" : "miles/hour";
            case "standard":
                return type === "temp" ? " Kelvin" : "meter/sec";
            default:
                return type === "temp" ? "℃" : "meter/sec";
        }
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='weather'>
            <form onSubmit={handleSubmit} className='weather-form'>
                <label name="unit">Temperature Unit: </label>
                    <select onChange={handleUnitChange} value={unit}>
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                        <option value="standard">Standard</option>
                    </select>
                    <br />
                <input
                    type="text" 
                    placeholder="Enter Zip Code"
                    pattern="[0-9]{5}"
                    value={zip}
                    onChange={handleZipChange}
                >
                </input>
                <br />
                <button type="submit">Submit</button>
            </form>

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
};

export default Weather;