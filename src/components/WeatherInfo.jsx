import ForecastItem from './ForecastItem';

const WeatherInfo = ({ weather, forecast }) => {
    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weather;

    const getCurrentDate = () => {
        const options = { weekday: "short", day: "2-digit", month: "short" };
        return new Date().toLocaleDateString("en-GB", options);
    };

    const getWeatherIcon = (id) => {
        if (id >= 200 && id <= 232) return `thunderstorm.svg`;
        if (id >= 300 && id <= 321) return `drizzle.svg`;
        if (id >= 500 && id <= 531) return `rain.svg`;
        if (id >= 600 && id <= 622) return `snow.svg`;
        if (id >= 701 && id <= 781) return `atmosphere.svg`;
        if (id === 800) return `clear.svg`;
        if (id >= 801 && id <= 804) return `clouds.svg`;
        return `clouds.svg`;
    };

    return (
        <section className="weather-info">
            <div className="location-date-container">
                <div className="location">
                    <span className="material-symbols-outlined">location_on</span>
                    <h4 className="country-text">{country}</h4>
                </div>
                <h5 className="current-date-text regular-txt">{getCurrentDate()}</h5>
            </div>

            <div className="weather-summary-container">
                <img
                    src={`/assets/weather/${getWeatherIcon(id)}`}
                    className="weather-summary-img"
                    alt={main}
                />
                <div className="weather-summary-info">
                    <h1 className="temp-txt">{Math.round(temp)} °C</h1>
                    <h3 className="condition-txt regular-txt">{main}</h3>
                </div>
            </div>

            <div className="weather-conditions-container">
                <div className="condition-item">
                    <span className="material-symbols-outlined">water_drop</span>
                    <div className="condition-info">
                        <h5 className="regular-txt">Humidity</h5>
                        <h5 className="humidity-value-txt">{humidity}%</h5>
                    </div>
                </div>

                <div className="condition-item">
                    <span className="material-symbols-outlined">air</span>
                    <div className="condition-info">
                        <h5 className="regular-txt">Wind Speed</h5>
                        <h5 className="wind-value-txt">{speed} M/s</h5>
                    </div>
                </div>
            </div>

            <div className="forecast-items-container">
                {forecast.map((item, index) => (
                    <ForecastItem key={index} data={item} getWeatherIcon={getWeatherIcon} />
                ))}
            </div>
        </section>
    );
};

export default WeatherInfo;