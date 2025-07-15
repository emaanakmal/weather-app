import { useState } from 'react';
import Searchbar from './components/Searchbar';
import WeatherInfo from './components/WeatherInfo';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="app-title">Emaan's Weather App</h1>
        <Searchbar 
          weatherData={weatherData}
          setWeatherData={setWeatherData} 
          setError={setError} 
          unit={unit} 
          setUnit={setUnit} 
        />
        <WeatherInfo weatherData={weatherData} error={error} unit={unit} />
      </div>
    </div>
  );
}