import React from 'react';
import { useWeather } from '../context/WeatherContext';
import './Favorites.css';
import { MdFavorite } from "react-icons/md";


const Favorites = () => {
  const { favorites, fetchWeather, removeFavorite } = useWeather();

  return (
    <div className="favorites">
      <h3 className='header'> <MdFavorite style={{color:"red"}} />Cities </h3>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            <p style={{color:"orange"}} onClick={() => fetchWeather(fav.city)}>{fav.city}</p>
            <button onClick={() => removeFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
