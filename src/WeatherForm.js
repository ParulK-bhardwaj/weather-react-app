import React from 'react';

function WeatherForm({ handleSubmit, handleUnitChange, handleZipChange, unit, zip }) {
    return (
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
    );
}

export default WeatherForm;