// /src/components/WeatherCard.js
import React, { useEffect, useState } from 'react';

const WeatherCard = ({ weather }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  const currentData = weather.current;
  const iconurl = 'https:' + weather.current.condition.icon;
  return (
    <div className=" lg:w-2/3 bg-white shadow-md rounded-lg p-4 m-4 flex-cols items-center justify-center mx-auto relative">

      <div className='flex-row'>
        <h6 className="font-medium "> Current weather of {weather.location.name}</h6>
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div className='flex flex-cols gap-6' >
        <div className='flex'>
        <p className="text-5xl font-semibold">{weather.current.temp_c}</p>
        <p className='text-2xl'>°C</p>
        </div>
        
        <img
          className=''
          src={iconurl} alt="Weather Icon" />
        <div className='flex-cols'>
          <p className="font-semibold ">{weather.current.condition.text}</p>
          <p className="font-normal ">Feels like {currentData.feelslike_c}°C</p>
        </div>
      </div>
      <div className='flex justify-between gap-2 relative text-xs font-semibold '>
        <p className="p-1 hover:bg-green-400 rounded-lg ">Humidity {currentData.humidity}%</p>
        <p className="p-1 hover:bg-green-400 rounded-lg ">Visibility {currentData.vis_km}km</p>
        <p className="p-1 hover:bg-green-400 rounded-lg  ">Wind {currentData.wind_kph}km/h</p>
        <p className="p-1 hover:bg-green-400 rounded-lg  ">Dew Point {currentData.dewpoint_c}°</p>
        <p className="p-1 hover:bg-green-400 rounded-lg  ">Pressure {currentData.pressure_in}mb</p>
      </div>

    </div>
  );
}
export default WeatherCard;
