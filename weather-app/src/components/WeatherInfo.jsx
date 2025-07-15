export default function WeatherInfo({ weatherData, error, unit }) {
  if (error) {
        return <div className="error-message">{error}</div>;
  }

  if (!weatherData) {
    return <div className="info-message">Enter a city to see the weather</div>;
  }

  return (
    <div className="weather-info">
      <h2 className="city-name">{weatherData.name}</h2>
      <p className="temperature">{weatherData.main.temp}{unit === 'metric' ?  '°C' : '°F'}</p>
      <p className="description">{weatherData.weather[0].description}</p>
      <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
      <p className="wind-speed">Wind Speed: {weatherData.wind.speed}{unit === 'metric' ?  'm/s' : 'mph'}</p>
    </div>
  );
}