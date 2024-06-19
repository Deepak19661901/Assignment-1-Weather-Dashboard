import React from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import { useWeather } from '../context/WeatherContext';
import './WeatherDashboard.css';
import Footer from './Footer';

const WeatherDashboard = () => {
  const {lastSearchedCity } = useWeather();



  return (
    <div className="weather-dashboard">
      <WeatherSearch />
      <Favorites/>
      {lastSearchedCity && <WeatherDisplay />}
      <Footer/>
    </div>
  );
};

export default WeatherDashboard;
