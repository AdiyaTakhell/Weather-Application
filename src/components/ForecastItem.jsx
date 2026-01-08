const ForecastItem = ({ data, getWeatherIcon }) => {
    const { dt_txt, weather, main } = data;
    const id = weather[0].id;
    const temp = Math.round(main.temp);

    const dateResult = new Date(dt_txt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
    });

    return (
        <div className="forecast-item">
            <h5 className="forecast-item-date regular-txt">{dateResult}</h5>
            <img
                src={`/assets/weather/${getWeatherIcon(id)}`}
                className="forecast-items-img"
                alt={weather[0].main}
            />
            <h5 className="forecast-item-temp">{temp} °C</h5>
        </div>
    );
};

export default ForecastItem;