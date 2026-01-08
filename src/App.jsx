import { useState, useEffect } from 'react';
import SearchSection from './components/SearchSection';
import WeatherInfo from './components/WeatherInfo';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // SECURE API KEY ACCESS
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        if (!API_KEY) {
            console.error("API Key missing! Check .env file.");
        }
    }, [API_KEY]);

    const fetchWeatherData = async (searchCity) => {
        if (!API_KEY) return;

        setLoading(true);
        setError(false);
        setWeather(null);

        try {
            const weatherRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
            );

            if (!weatherRes.ok) throw new Error('City not found');
            const weatherData = await weatherRes.json();

            const forecastRes = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API_KEY}&units=metric`
            );
            const forecastData = await forecastRes.json();

            const timeTaken = "12:00:00";
            const todayDate = new Date().toISOString().split("T")[0];

            const dailyForecast = forecastData.list.filter(item =>
                item.dt_txt.includes(timeTaken) && !item.dt_txt.includes(todayDate)
            );

            setWeather(weatherData);
            setForecast(dailyForecast);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        if ((e.key === 'Enter' || e.type === 'click') && city.trim() !== '') {
            fetchWeatherData(city);
            setCity('');
        }
    };

    return (
        <main className="main-container">
            <SearchSection
                city={city}
                setCity={setCity}
                handleSearch={handleSearch}
            />

            {loading && (
                <section className="loading-message">
                    <h4 className="regular-txt">Fetching weather data...</h4>
                </section>
            )}

            {!loading && error && (
                <section className="not-found section-message">
                    <img src="/assets/message/not-found.png" alt="Not Found" />
                    <div>
                        <h1>City Not Found</h1>
                        <h4 className="regular-txt">Try searching again</h4>
                    </div>
                </section>
            )}

            {!loading && !error && !weather && (
                <section className="search-city section-message">
                    <img src="/assets/message/search-city.png" alt="Search" />
                    <div>
                        <h1>Search City</h1>
                        <h4 className="regular-txt">Find out the weather</h4>
                    </div>
                </section>
            )}

            {!loading && !error && weather && (
                <WeatherInfo weather={weather} forecast={forecast} />
            )}
        </main>
    );
}

export default App;