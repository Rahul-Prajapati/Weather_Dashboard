import React, { useState } from 'react';
import Forecast from './Forecast';
// import { getFarmersData } from '../services/WeatherService';

const UserGroupTabs = ({ selectedGroup, setSelectedGroup, forecast }) => {
  const handleChange = (group) => {
    setSelectedGroup(group);
  };


  const FarmerTab = ({forecast1}) => {
    const {
      avghumidity,
      avgtemp_c,
      avgtemp_f,
      avgvis_km,
      condition
      : { text, icon },
      daily_chance_of_rain,
      maxtemp_c,
      maxtemp_f,
      maxwind_kph,
      mintemp_c,
      mintemp_f,
      totalprecip_mm,
      uv,
    } = forecast1?.day;

    const getRecommendations = () => {
      const recommendations = [];
  
      if (avghumidity > 70) {
        recommendations.push('Monitor for fungal diseases due to high humidity.');
      }
      if (avgtemp_c > 35) {
        recommendations.push('Prepare for heat stress measures for livestock.');
      }
      if (uv > 7) {
        recommendations.push('Use sun protection for workers due to high UV index.');
      }
      if (totalprecip_mm < 1) {
        recommendations.push('Consider irrigation if no significant rain is expected soon.');
      }
      if (daily_chance_of_rain > 50) {
        recommendations.push('Be prepared for rain; ensure drainage systems are functioning.');
      }
      if (maxwind_kph > 20) {
        recommendations.push('Secure lightweight structures and be cautious with pesticide application.');
      }
  
      return recommendations;
    };

    

    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex items-center px-6 py-4">
        <img src={icon} alt={text} className="w-12 h-12" />
        <div className="mx-4">
        <h2 className="text-xl font-bold">{forecast1.date}</h2>
          <h2 className="text-xl font-semibold">{text}</h2>
          <p className="text-gray-600">Average Temperature: {avgtemp_c}°C ({avgtemp_f}°F)</p>
          <p className="text-gray-600">Max Temperature: {maxtemp_c}°C ({maxtemp_f}°F)</p>
          <p className="text-gray-600">Min Temperature: {mintemp_c}°C ({mintemp_f}°F)</p>
          <p className="text-gray-600">Humidity: {avghumidity}%</p>
          <p className="text-gray-600">Wind Speed: {maxwind_kph} kph</p>
          <p className="text-gray-600">Precipitation: {totalprecip_mm} mm</p>
          <p className="text-gray-600">Visibility: {avgvis_km} km</p>
          <p className="text-gray-600">UV Index: {uv}</p>
          <p className="text-gray-600">Chance of Rain: {daily_chance_of_rain}%</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold">Recommendations</h3>
        <ul className="list-disc list-inside">
          {getRecommendations().map((rec, index) => (
            <li key={index} className="text-gray-600">{rec}</li>
          ))}
        </ul>
        <div className='text-slate-500 text-center '>Have a great day!!!</div>
      </div>
    </div>
      
    )
  }

  const AirlinePilotTab = ({ forecast1 }) => {
    const {
      avghumidity,
      avgtemp_c,
      avgtemp_f,
      avgvis_km,
      condition: { text, icon },
      daily_chance_of_rain,
      maxtemp_c,
      maxtemp_f,
      maxwind_kph,
      mintemp_c,
      mintemp_f,
      totalprecip_mm,
      uv,
    } = forecast1?.day;
  
    const getRecommendations = () => {
      const recommendations = [];
  
      if (avgvis_km < 5) {
        recommendations.push('Visibility is low, prepare for instrument flight rules (IFR) conditions.');
      }
      if (maxwind_kph > 30) {
        recommendations.push('Strong winds expected, be cautious during takeoff and landing.');
      }
      if (daily_chance_of_rain > 50) {
        recommendations.push('Rain expected, ensure aircraft de-icing and anti-icing measures are in place.');
      }
      if (uv > 7) {
        recommendations.push('High UV index, consider sun protection measures for crew and passengers.');
      }
      if (totalprecip_mm > 10) {
        recommendations.push('Heavy precipitation forecasted, check for potential delays and runway conditions.');
      }
  
      return recommendations;
    };
  
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
        <div className="flex items-center px-6 py-4">
          <img src={icon} alt={text} className="w-12 h-12" />
          <div className="mx-4">
            <h2 className="text-xl font-bold">{forecast1.date}</h2>
            <h2 className="text-xl font-semibold">{text}</h2>
            <p className="text-gray-600">Average Temperature: {avgtemp_c}°C ({avgtemp_f}°F)</p>
            <p className="text-gray-600">Max Temperature: {maxtemp_c}°C ({maxtemp_f}°F)</p>
            <p className="text-gray-600">Min Temperature: {mintemp_c}°C ({mintemp_f}°F)</p>
            <p className="text-gray-600">Humidity: {avghumidity}%</p>
            <p className="text-gray-600">Wind Speed: {maxwind_kph} kph</p>
            <p className="text-gray-600">Precipitation: {totalprecip_mm} mm</p>
            <p className="text-gray-600">Visibility: {avgvis_km} km</p>
            <p className="text-gray-600">UV Index: {uv}</p>
            <p className="text-gray-600">Chance of Rain: {daily_chance_of_rain}%</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">Recommendations</h3>
          <ul className="list-disc list-inside">
            {getRecommendations().map((rec, index) => (
              <li key={index} className="text-gray-600">{rec}</li>
            ))}
          </ul>
          <div className='text-slate-500 text-center '>Safe flights!</div>
        </div>
      </div>
    );
  };
  

  return (
    <>
      <div className="flex justify-center mt-4">
      <button className={`px-4 py-2 mx-2 ${selectedGroup === 'forecast' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleChange('forecast')}>
          Forecast
        </button>
        <button className={`px-4 py-2 mx-2 ${selectedGroup === 'farmers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleChange('farmers')}>
          Farmers
        </button>
        <button className={`px-4 py-2 mx-2 ${selectedGroup === 'Airline&Pilots' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleChange('Airline&Pilots')}>
        Airline&Pilots
        </button>
        
      </div>
      <div>
        {selectedGroup === 'farmers' && (
          <div className=''>
            {
                forecast.map((forecast1, index) => (
                  <FarmerTab key={index} forecast1={forecast1} />
                ))
              }
          </div>
        )}
      </div>
      <div>
        {selectedGroup === 'forecast' && (
          <div className='w-2/3 mt-4 flex flex-col gap-7 items-center mx-auto justify-around lg:w-full lg:flex-row lg:gap-5'>
              {
                  forecast.map((forecastArrayItems, index) => (
                  <Forecast key={index} forecast={forecastArrayItems} />
                ))
              }
            </div>
        )}
      </div>
      <div>
        {selectedGroup === 'Airline&Pilots' && (
          <div className=''>
            {
                forecast.map((forecast1, index) => (
                  <AirlinePilotTab key={index} forecast1={forecast1} />
                ))
              }
          </div>
        )}
      </div>
    </>

  );


};

export default UserGroupTabs;
