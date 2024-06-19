import React from 'react';
import { useWeather } from '../context/WeatherContext';
import './WeatherDisplay.css';

const weatherImages = {
  Clear: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D',
  Clouds: 'https://media.istockphoto.com/id/1195907786/photo/clouds.webp?b=1&s=170667a&w=0&k=20&c=8MCreJP0ZO3ZvUCXQrXa6y3TkfqbJhqHQ74Z71_ojgI=',
  Rain: 'https://media.istockphoto.com/id/1612250363/photo/world-environment-day-concept.webp?b=1&s=170667a&w=0&k=20&c=8uQ2x9i6_22VGbSxucGlXgN5iFZq4ar_aY3r5boPB60=',
  Snow: 'https://media.istockphoto.com/id/1157120428/photo/panorama-khardung-la-road-with-heavy-snow-in-summer-season-at-leh-ladakh.webp?b=1&s=170667a&w=0&k=20&c=iFw9SnKbHWWwOg35X6KDteNKc0QdJpsuxw-OeaJRorc=',
  Drizzle: 'https://media.istockphoto.com/id/1403508430/photo/weather-with-sun-clouds-rain-and-sky-background-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=QDOSYbN8NmNXCMXMK9RShOggkHoRmhTCPqhaGWQoogo=',
  Thunderstorm: 'https://media.istockphoto.com/id/1552904571/photo/curtain-of-lightning-over-city.webp?b=1&s=170667a&w=0&k=20&c=E8yuX1kQGOJym-fBWgxOLs5WmoISQ-YH6xb6v48PQCI=',
  Mist: 'https://media.istockphoto.com/id/1325224306/photo/the-misty-evening.webp?b=1&s=170667a&w=0&k=20&c=2HN-klrmVCCTxeLRNiBTfUIzkRvkWYsxrrRxQp_YjAU=',
  Smoke: 'https://media.istockphoto.com/id/1473779779/photo/bath-abbey-skyline-uk.webp?b=1&s=170667a&w=0&k=20&c=MIfb21BllS0VWcupqDcAZUHTF2Q3McCXvNO8b5SpFoI=',
  Haze: 'https://media.istockphoto.com/id/1473779779/photo/bath-abbey-skyline-uk.webp?b=1&s=170667a&w=0&k=20&c=MIfb21BllS0VWcupqDcAZUHTF2Q3McCXvNO8b5SpFoI=',
  Dust: 'https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdC5qcGd8ZW58MHx8MHx8fDA%3D',
  Fog: 'https://media.istockphoto.com/id/1310638017/photo/extreme-smog-on-india-pakistan-border.webp?b=1&s=170667a&w=0&k=20&c=77RQ5JGaJf22Snq7KgIigfUUklZOeYA_Q5p4E7nCxWM=',
  Sand: 'https://media.istockphoto.com/id/1020382868/photo/footprint-on-the-sand-flat-view.webp?b=1&s=170667a&w=0&k=20&c=viKiBchJiNq7ObAfiUBBYNcGrZePii1GWgwesWIxtkQ=',
  Ash: 'https://media.istockphoto.com/id/1251221287/photo/ash-covered-landescape.webp?b=1&s=170667a&w=0&k=20&c=qeQSACLCoRMpdHYLZxmXACjBq8YAMpdUc39PtkTX5Y0=',
  Squall: 'https://media.istockphoto.com/id/2064704243/photo/snowfall-view-from-the-window-winter-background-snowy-outside.webp?b=1&s=170667a&w=0&k=20&c=uclX6z16H41YxH6I6tkDVM3d-6IapGrq22GheohtMYE=',
  Tornado: 'https://media.istockphoto.com/id/867647924/photo/cinematic-portrayal-of-city-destroyed-by-tornado-or-hurricane.webp?b=1&s=170667a&w=0&k=20&c=bkXO_vQBHuj0mIJSQpnG6GpbnlwRiUbpf4l3y_kLhQY='
};


const WeatherDisplay = () => {
  const { weatherData, forecastData, addFavorite } = useWeather();
  return (
    <div className="weather-display">
      {weatherData && (
        <div className="weather-current">
         <div className="current-weather-deatils">
         <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°</p>
          <button className='add-to-favorites-button' onClick={() => addFavorite(weatherData.name)}>Add to Favorites</button>

         </div>
          <div className='current-weather-display'>
          <img 
              src={weatherImages[weatherData.weather[0].main]}
              alt={weatherData.weather[0].main}
              className="weather-image"
            />
          </div>
        </div>
      )}
      {forecastData && (
        <div className="weather-forecast">
        <h3 className='weather-forecast-header'>Upcoming Weather: 5-Day Sneak Peek</h3>

          <div className="forecast-grid">
            {forecastData.list.map((item, index) => (
              <div key={index} className="forecast-item">
              <img 
                  src={weatherImages[item.weather[0].main]}
                  alt={item.weather[0].main}
                  className="weather-image"
                />
                <p className='date'>{item.dt_txt}</p>
                <p className='description'>{item.weather[0].description}</p>
                <p className='temperature'>Temperature: {item.main.temp}°</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
