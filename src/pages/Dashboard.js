import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../services/WeatherService';
import WeatherCard from '../components/WeatherCard';
import Header from '../components/Header';
import UserGroupTabs from '../components/UserGroupTabs';

const Dashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('eventPlanners');
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState(null);


  useEffect(() => {
    const getPosition = () => {
      return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {//console.log('locations',position);
              resolve(position)
            },
            (error) => reject(error)
          );
        } else {
          reject(new Error('Geolocation not available'));
        }
      });
    }

    //
    const fetchLocation = async () => {
      try {
        const position = await getPosition();
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        const data = await getWeatherData(position.coords.latitude + "," + position.coords.longitude);
        setWeather(data);
      }
      catch (error) {
        setError(error.message);
      }
    };
    fetchLocation();
  }, [])

  const fetchWeather = async () => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  return (
    <div className='lg:w-1/2 items-center mx-auto bg-black'>
      <div className="min-h-screen bg-gray-100 items-center justify-center">
        <Header />
        <div className="container mx-auto p-4">
          <div className="my-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-between mt-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchWeather}>
                Get Weather
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={async () => {
                  const data = await getWeatherData(latitude + "," + longitude);
                  setWeather(data);
                }}
              >
                Current Location
              </button>

            </div>
          </div>

          {error && (<div className='text-2xl' >{error}
          </div>)}
          
          {weather && (
            <div>
              <WeatherCard weather={weather} />
            </div>
          )}
          <div className="mt-4">
            <UserGroupTabs selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} forecast={weather?.forecast.forecastday} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
