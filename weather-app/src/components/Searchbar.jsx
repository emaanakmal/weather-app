import { useState } from 'react';

export default function Searchbar({ weatherData, setWeatherData, setError, unit, setUnit}) {
  const [city, setCity] = useState('');

  async function handleSearch(event) {
    event.preventDefault();
    
    try {
      if (!city.trim()) {
        setWeatherData(null);
        throw new Error('Please enter a city name');
      }

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0276bfc30b75ae6db2c8c7079f35b7d0&units=${unit}`);

      if (!response.ok) {
        throw new Error('City not found or invalid request');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);

    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  }

  async function toggleUnit() {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    
    try {
      if (!city.trim()) {
        setWeatherData(null);
        throw new Error('Please enter a city name');
      }
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0276bfc30b75ae6db2c8c7079f35b7d0&units=${newUnit}`
      );

      if (!response.ok) {
        throw new Error('City Not Found');
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);

    } catch (error) {
      setError(error.message ?? 'Failed to fetch weather data');
      setWeatherData(null);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search-input"
        type="text"
        name="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter City Name"
      />
      <button className='search-button'>Search</button>
      {weatherData && <button
          type="button"
          onClick={toggleUnit}
          className="unit-toggle-button"
        >
          Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
        </button>}
    </form>
  );
}