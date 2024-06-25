import React from 'react'

const Forecast = ({ forecast }) => {
  const iconurl = 'https:' + forecast.day.condition.icon;
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4">
      <span>{forecast.date}</span>
      <div className='flex flex-row'>
        <div>
          <div className='text-2xl'>
            {forecast.day.maxtemp_c}°C
          </div>
          <div>{forecast.day.mintemp_c}°C</div>
          <div className='' >{forecast.day.condition.text}</div>
        </div>
          <img
          className='w-1/2 pb-6 '
          src={iconurl} alt="Weather Icon" />
      </div>
    </div>
  )
}

export default Forecast