import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import './WeatherSearch.css';

const WeatherSearch = () => {
  const { unit, setUnit } = useWeather();
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  const handleToggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className='container'>
      <h1>Weather</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className="weather-search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <button className="toggle-unit" onClick={handleToggleUnit}>
        Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default WeatherSearch;
