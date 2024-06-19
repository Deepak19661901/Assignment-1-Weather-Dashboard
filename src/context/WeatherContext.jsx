import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [lastSearchedCity, setLastSearchedCity] = useState('');

  const fetchWeather = async (city) => {
    try {
     
      const API_KEY = 'bd726f1ba3b84a40d1eb9509b48507c4';
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`);
      
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setLastSearchedCity(city);
      localStorage.setItem('lastSearchedCity', city);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:5000/favorites');
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorite cities', error);
    }
  };

  const addFavorite = async (city) => {
    try {
      const response = await axios.post('http://localhost:5000/favorites', { city });
      setFavorites([...favorites, response.data]);
    } catch (error) {
      console.error('Error adding favorite city', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/favorites/${id}`);
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } catch (error) {
      console.error('Error removing favorite city', error);
    }
  };

  useEffect(() => {
    const city = localStorage.getItem('lastSearchedCity');
    if (city) {
      fetchWeather(city);
    }
    fetchFavorites();
  }, [unit]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        favorites,
        unit,
        fetchWeather,
        addFavorite,
        removeFavorite,
        setUnit,
        lastSearchedCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);


