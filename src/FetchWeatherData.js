async function fetchWeatherData(zip, unit, setWeatherData) {
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${unit}&appid=${apikey}`
    
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Error fetching weather data:Please check the zip code', res.statusText);
            return;
        }

        const data = await res.json();
        setWeatherData(data);
    } catch (err) {
        console.error("Error fetching weather data: Please check the zip code", err);
    }
};

export default fetchWeatherData;